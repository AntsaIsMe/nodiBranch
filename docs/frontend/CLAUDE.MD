# CLAUDE.md (docs/frontend)

Static documentation site for Nodibranch. No backend, no API calls.

## Commands
- `npm run dev` / `npm run build` / `npm run preview`

## Stack
- React + Vite, React Router, content in MDX
- Deploy: static build (`dist/`) on GitHub Pages

## Rules
- Only edit files inside `docs/`; never touch `../bin`, `../src`, `../templates`
- Source of truth: `../README.md` and `../src/commands/` (code wins on conflict)
- Keep CLI examples identical to real generated output
- Minimal dependencies; follow existing component patterns
- **Never use emojis in the design or the code.**

## Structure
- `src/api/`: fetch/query helpers (if any external data, e.g. GitHub stars)
- `src/assets/`: images, fonts, static files
- `src/components/`: Sidebar, CodeBlock (with copy button), Layout
- `src/constant/`: constants (route names, external links, etc.)
- `src/contexts/`: React Context providers (theme, nav state)
- `src/data/`: static content data (not fetched — e.g. nav tree, page metadata)
- `src/enum/`: enums (e.g. page status, filter types)
- `src/hooks/`: custom hooks
- `src/mappers/`: data transformation/mapping functions
- `src/pages/`: Installation, Usage, Route autoloading, Method filters, Help
- `src/router/`: React Router route definitions
- `src/services/`: business logic / non-API service functions
- `src/types/`: TypeScript types / JSDoc typedefs
- See [PAGES.MD](./PAGES.MD) for the full documentation map and implementation gaps.

## Rules (additional)
- Follow the folder architecture above exactly — no ad-hoc folders, no mixing concerns (e.g. no fetch logic in `components/`)
- Each new file goes in its matching folder based on its role, not its feature

## Design principles
- Single responsibility: components handle rendering only; logic goes in hooks/ or services/
- No business logic or data fetching directly inside components/ or pages/

## Comments
- Comment *why*, not *what* — the code should already say what it does
- No comments restating the obvious (`// increment i`, `// loop over pages`)
- Document: non-obvious decisions, workarounds, edge cases, and anything that would confuse a future reader
- JSDoc on exported functions/hooks/components: purpose, params, return — skip for trivial one-liners
- No commented-out code left in commits
- Prefer clear naming over comments when possible
