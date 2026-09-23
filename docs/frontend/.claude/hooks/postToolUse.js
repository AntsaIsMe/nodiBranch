/**
 * PostToolUse hook — checks that need the FULL final file content,
 * which Edit's args.new_string alone can't give (it's only the fragment).
 * Runs after the write completes; read the file back to check it.
 * Per docs/frontend/CLAUDE.md.
 */

import { readFile } from 'fs/promises';

export async function postToolUse({ toolName, args }) {
  if (toolName !== 'Write' && toolName !== 'Edit') return;

  const filePath = args.file_path;
  if (!filePath || !filePath.includes('/src/')) return;
  if (!/\.tsx?$/.test(filePath)) return;

  let content;
  try {
    content = await readFile(filePath, 'utf-8');
  } catch {
    return; // file not found / not readable, skip silently
  }

  const warnings = [];

  // 9. Multiple state hooks inline in a component → likely needs extraction
  if (/\/components\/.*\.tsx$/.test(filePath)) {
    const stateHookCount = (content.match(/use(State|Effect|Reducer)\(/g) || []).length;
    if (stateHookCount >= 2) {
      warnings.push(
        `${filePath}: ${stateHookCount} state hooks inline — consider extracting to src/hooks/ (e.g. useSidebar, useCodeBlock). Per CLAUDE.md single-responsibility rule.`
      );
    }
  }

  // 10. File length guard (~150 lines)
  const lineCount = content.split('\n').length;
  if (/\/(components|pages)\/.*\.tsx$/.test(filePath) && lineCount > 150) {
    warnings.push(
      `${filePath}: ${lineCount} lines, exceeds ~150. Split into sub-components per CLAUDE.md.`
    );
  }

  if (warnings.length > 0) {
    // Reported as warnings, not thrown errors: these are judgment calls on the
    // finished file, not hard blockers on a single edit action.
    console.warn(warnings.join('\n'));
  }
}
