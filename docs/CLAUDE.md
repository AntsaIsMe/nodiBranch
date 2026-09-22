\# CLAUDE.md (docs)



Static documentation site for Nodibranch. No backend, no API calls.



\## Commands

\- `npm run dev` / `npm run build` / `npm run preview`



\## Stack

\- React + Vite, React Router, content in MDX

\- Deploy: static build (`dist/`) on GitHub Pages



\## Rules

\- Only edit files inside `docs/`; never touch `../bin`, `../src`, `../templates`

\- Source of truth: `../README.md` and `../src/commands/` (code wins on conflict)

\- Keep CLI examples identical to real generated output

\- Minimal dependencies; follow existing component patterns



\## Structure

\- `src/pages/`: Installation, Usage, Route autoloading, Method filters, Help

\- `src/components/`: Sidebar, CodeBlock (with copy button), Layout

