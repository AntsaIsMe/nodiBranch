# Nodibranch CLI Mapping

## Commands and Flags
| Command | Alias | Flag / Option | Behavior | Implementation |
| :--- | :--- | :--- | :--- | :--- |
| `init` | `-i` | N/A | Prompts user for environment config, copies templates to CWD, merges `package.json` dependencies, configures `.env`, and optionally creates an initial CRUD route. | `src/commands/init.js` |
| `makeRoute` | `-r` | `--only:method1,method2` | Creates a route file and a controller file. With `--only`, only specified CRUD methods are included in the controller. | `src/commands/makeRoute.js` |
| | | `--except:method1` | Creates a route file and a controller file. Excludes specified CRUD methods from the controller. | `src/commands/makeRoute.js` |
| `makeCtrl` | `-c` | `--only:method1...` | Creates only the controller file with filtered methods. | `src/commands/makeCtrl.js` |
| | | `--except:method1...` | Creates only the controller file excluding filtered methods. | `src/commands/makeCtrl.js` |
| `help` | `-h` / `--help` | `[command]` | Displays help. If a command is provided, it shows help specific to that command. | `src/commands/help.js` |
| `home` | `-h` / (none) | N/A | Default action when no command is provided. | `src/commands/home.js` |

## CRUD Method Mapping
| Method Key | Model File | Template Logic / Generated Function | Purpose |
| :--- | :--- | :--- | :--- |
| `create` | `src/models/create.js` | `export const create = async (req, res) => { ... }` | Returns 201 with `req.body`. |
| `readOne` | `src/models/getOne.js` | `export const getOne = async (req, res) => { ... }` | Returns 200 with a placeholder. |
| `readAll` | `src/models/getAll.js` | `export const getAll = async (req, res) => { ... }` | `Returns 200 with a placeholder list.` |
| `update` | `src/models/update.js` | `export const update = async (req, res) => { ... }` | Returns 200 success message. |
| `delete` | `src/models/delete.js` | `export const remove = async (req, res) => { ... }` | Returns 200 success message. |

## Utility Functions
| Utility | File | Purpose |
| :--- | :--- | :--- |
| `modifFile` | `files.js` | Wraps `fs-extra`'s `outputFile` to create/modify files and ensure parent directories exist. |
| `depInstall` | `depInstall.js` | Spawns an `npm install` process with a `cli-progress` progress bar. |
| `toString` | `toString.js` | Converts an object (from Inquirer) into a `.env` formatted string (`KEY=VALUE\n...`). |
| `validNum` | `validator.js` | Validates that a string is a valid network port (1-65535). |
| `validNormChar` | `validator.js` | Validates strings (e.g., DB names) against a regex allowing only alphanumeric characters and underscores. |
