# Documentation Map

This file defines the required pages for the Nodibranch documentation site and identifies discrepancies between the README and the actual implementation.

## Required Pages

### 1. Installation
- Global installation (`npm install -g nodibranch`)
- Local installation (`npm install nodibranch`)
- Quick start via `npx nodibranch`

### 2. Interactive Mode
- Running `nb` without arguments to launch the guided menu.

### 3. Project Initialization
- `nb init` or `nb -i`.
- **Key details to cover (missing in README):**
    - Guided questionnaire for `.env` personalization.
    - Database customization options.
    - Optional `multer` upload middleware setup.
    - Optional initial CRUD generation.

### 4. Route & Controller Generation
- **Route + Controller:** `nb -r <name>`
- **Controller only:** `nb -c <name>`
- **Method Filtering:** Using `--only:<methods>` and `--except:<methods>`.

### 5. Project Architecture
- **File Naming:** `*Routes.js` and `*Controller.js`.
- **Route Autoloading:** How `src/index.js` automatically registers routes in `src/routes/`.
- **Endpoint Structure:** `/api/<name>` mounting logic.

### 6. Reference: Method Filters
- Mapping of filter names to generated function names:
    - `create` $\rightarrow$ `create`
    - `readOne` $\rightarrow$ `getOne`
    - `readAll` $\rightarrow$ `getAll`
    - `update` $\rightarrow$ `update`
    - `delete` $\rightarrow$ `remove`

### 7. Help
- General help: `nb -h` or `nb help`.
- Command-specific help: `nb <command> -h`.

---

## Implementation Gaps (README vs Code)

| Feature | README Claim | Actual Implementation | Status |
| :--- | :--- | :--- | :--- |
| **Init Process** | Basic setup description. | Comprehensive interactive questionnaire (env, DB, multer). | ⚠️ Under-documented |
| **Shorthand `-i`** | Claimed as shorthand for `init`. | Implemented in `bin/cli.mjs`. | ✅ Verified |
| **Help Flags** | `nb init -h`, etc. | Implemented via `bin/cli.mjs` $\rightarrow$ `src/commands/help.js`. | ✅ Verified |
| **Method Keys** | Describes filters. | Uses exact keys `readOne`, `readAll` in `makeCtrl.js`. | ✅ Verified |
