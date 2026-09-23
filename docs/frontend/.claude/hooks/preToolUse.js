/**
 * Hook to prevent emojis in .tsx files within src/
 * per docs/frontend/CLAUDE.md: "Never use emojis in the design or the code"
 */
export async function preToolUse({ toolName, args }) {
  if (toolName !== 'Write' && toolName !== 'Edit') {
    return;
  }

  const filePath = args.file_path;
  if (!filePath || !filePath.endsWith('.tsx') || !filePath.includes('/src/')) {
    return;
  }

  const content = args.content || ''; // For Write
  // For Edit, we only have the new_string, but checking that is sufficient to prevent addition
  const textToCheck = content || args.new_string || '';

  // Regex for emojis and common symbols
  const emojiRegex = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]/u;

  if (emojiRegex.test(textToCheck)) {
    throw new Error(`Emoji detected in ${filePath}. Emojis are strictly forbidden in the design and code per CLAUDE.md.`);
  }
}
