# Documentation Generation Plan

## Scope
Populate `sections` for all JSON files in `docs/content/` except `introduction/` and `developer-contributor/`. 

## Target Pages & Sections

### Chapter: Usage Guide
1. **interactive-mode.json** (Current state: basic)
   - *Sections*:
     - `launching-home`: How to start the CLI without args.
     - `menu-options`: Description of the interactive prompt and how it triggers other commands.
   - *Representative Example*:
     - Content: "The interactive menu uses a selection-based system to trigger other CLI commands... [2-4 sentences]"
     - Example: `nb` (cli) / `node bin/cli.mjs` (raw)

2. **route-generation.json** (Current state: populated)
   - *Sections*:
     - `the-r-flag`: Full route and controller generation.
     - `the-c-flag`: Controller-only generation.
     - `method-filtering`: Use of `--only` and `--except` with specific CRUD methods.
   - *Representative Example*:
     - Content: "Filtering allows fine-grained control over the controller methods generated... [2-4 sentences]"
     - Example: `nb -r user --only:create,readAll`

## Technical Verification (Code vs README)

### Confirmed Behaviors (via `bin/cli.mjs`, `src/commands/`, `src/models/`)
- **Flags**: `-r` and `-c` are treated as primary commands.
- **Filtering**: `--only:method,method` and `--except:method` are parsed as key-value pairs and applied via `.filter()` in `makeCtrl.js`.
- **CRUD Methods**: The supported keys are exactly `create`, `readOne`, `readAll`, `update`, `delete`.
- **Templates**: Logic is split between `src/models/*.js` for methods and `routeTemplate.js` for the Express router.

### Discrepancies / Doubts
- **README vs Code**: The README mentions flags, but the code implements them as positional arguments in some cases or specific `--key:value` strings. I will document the actual code implementation.
- **Shorthand `nb`**: The `nb` command is a wrapper/alias; I will provide both `nb` and `node bin/cli.mjs` to be explicit.

## Execution Strategy
1. Review the `docs/content/tables/cli-mapping.md` to ensure consistency.
2. Update JSON files sequentially.
3. Verify that no emojis are used in any content.
4. Link to `cli-mapping.md` where appropriate.
