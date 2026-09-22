# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands
- **Run CLI (local):** `node bin/cli.mjs [args]`
- **Help:** `node bin/cli.mjs -h`
- **Initialize project:** `node bin/cli.mjs init`
- **Generate route & controller:** `node bin/cli.mjs -r <name> [--only:<methods> | --except:<methods>]`
- **Generate controller only:** `node bin/cli.mjs -c <name> [--only:<methods> | --except:<methods>]`

## Architecture
Nodibranch is a CLI scaffolder for Express.js. It follows a command-based architecture:

- `bin/cli.mjs`: Entry point. Parses CLI arguments and dynamically imports the corresponding command implementation from `src/commands/`.
- `src/commands/`: contains the business logic for each CLI action:
  - `init.js`: Sets up the full project structure.
  - `makeRoute.js` / `makeCtrl.js`: Handle file generation for routes and controllers.
  - `home.js`: Interactive menu driven by `@inquirer/prompts`.
- `src/models/`: Contains templates and logic for specific CRUD operations (e.g., `create.js`, `getAll.js`) used to build controllers.
- `src/utils/`: Shared utility functions for file system operations (`files.js`), dependency installation (`depInstall.js`), and validation.
- `templates/`: Base files used during `init` to bootstrap a new project.

## Project Structure
- `bin/`: CLI entry point.
- `src/`: Core logic, commands, and models.
- `templates/`: Scaffolding templates for new projects.

## Documentation site
- Location: `docs/` (self-contained, own `package.json`; never modify `bin/`, `src/`, `templates/`)
- Stack: <VitePress | Docusaurus | Astro Starlight> — à choisir
- Commands: `cd docs && npm run dev` / `npm run build`
- Source of truth for content: `README.md` and the actual behavior of `src/commands/` — if they disagree, code wins
- Pages: Installation, Usage (interactive, init, `-r`, `-c`), Route autoloading, Method filters (`--only` / `--except`), Help
- Keep the CLI's ES module conventions; no new dependencies at the repo root
