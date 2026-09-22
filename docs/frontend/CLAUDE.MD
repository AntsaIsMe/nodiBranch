CLAUDE.md (docs/frontend)
Static documentation site for Nodibranch. No backend, no API calls.

Commands
npm run dev / npm run build / npm run preview
Stack
React + Vite, React Router, content in MDX
Deploy: static build (dist/) on GitHub Pages
Rules
Only edit files inside docs/; never touch ../bin, ../src, ../templates
Source of truth: ../README.md and ../src/commands/ (code wins on conflict)
Keep CLI examples identical to real generated output
Minimal dependencies; follow existing component patterns
Never use emojis in the design or the code
Follow the folder architecture below exactly — no ad-hoc folders, no mixing concerns
Each new file goes in its matching folder based on its role, not its feature
Structure
src/api/: fetch/query helpers (if any external data, e.g. GitHub stars)
src/assets/: images, fonts, static files
src/components/common/: reusable, page-agnostic UI (Button, Badge, Card, Input, Icon)
src/components/<ComponentName>/: one folder per non-common component
<ComponentName>.jsx: main component (composition only, stays short)
<SubComponent>.jsx: internal sub-components specific to this component

src/constant/: constants (route names, external links, etc.)
src/contexts/: React Context providers (theme, nav state)
src/data/: static content data (not fetched — e.g. nav tree, page metadata)
src/enum/: enums (e.g. page status, filter types)
src/hooks/: custom hooks
src/mappers/: data transformation/mapping functions
src/pages/: Installation, Usage, Route autoloading, Method filters, Help
src/router/: React Router route definitions
src/services/: business logic / non-API service functions
src/types/: TypeScript types / JSDoc typedefs
See PAGES.MD for the full documentation map and implementation gaps.
Example:

components/
  Sidebar/
    Sidebar.jsx
    SidebarItem.jsx
    SidebarSection.jsx
    index.js
  common/
    Button/
      Button.jsx
      index.js
Component granularity
Any UI element repeated 2+ times (buttons, badges, cards, inputs, links) MUST be extracted to src/components/common/ — never inline JSX duplicated across pages
Buttons: always <Button variant="primary|secondary|ghost" />, never raw <button> with inline styles
A component specific to one parent (e.g. a sidebar row) lives as a sub-component inside that parent's folder, not in common/ and not inlined in the parent file
Before writing a new component, check common/ first — reuse or extend, don't duplicate
File length
No component file should exceed ~100-150 lines
If a component's JSX has distinct visual sections or repeated blocks, extract them into sub-components within the same folder
If a component mixes rendering with data-fetching/logic, extract the logic into a hook in src/hooks/
Naming
Folder and file name match the component's role, not its page or feature: Button/, not HeaderButton/ or UsagePageButton/
PascalCase for components, camelCase for hooks/utils (useTheme, not UseTheme)
No abbreviations or vague names (Btn, Wrap, Item) — spell it out
Design principles
Single responsibility: components handle rendering only; logic goes in hooks/ or services/
No business logic or data fetching directly inside components/ or pages/
Comments
Comment why, not what — the code should already say what it does
No comments restating the obvious (// increment i, // loop over pages)
Document: non-obvious decisions, workarounds, edge cases, and anything that would confuse a future reader
JSDoc on exported functions/hooks/components: purpose, params, return — skip for trivial one-liners
No commented-out code left in commits
Prefer clear naming over comments when possible
Refactor rule
Before marking a page "done" in PAGES.md, check: duplicated JSX (extract to common/), oversized files (split into sub-components), mixed logic/rendering (extract to hooks/)

## Component declaration style
- Use function declarations, not arrow functions assigned to const
- `export default function ComponentName() { ... }` — not 
  `const ComponentName = () => { ... }; export default ComponentName;`
- Same for named (non-default) components: `export function ComponentName() { ... }`
- Applies to components only — hooks and utils can stay as `const` arrow functions 
  if that's already the project convention