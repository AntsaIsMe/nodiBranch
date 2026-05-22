# Nodibranch

> Scaffold your Node.js/Express projects in seconds — routes, controllers, and full project structure, without the boilerplate headache.

[![npm version](https://img.shields.io/npm/v/nodibranch)](https://www.npmjs.com/package/nodibranch)

---

![Nodibranch interactive menu](https://github.com/AntsaIsMe/nodiBranch/nodibranch/src/preview.png)

---

Nodibranch (`nb`) is a lightweight CLI that removes the repetitive setup work from every new Express project. Initialize a full project structure, generate CRUD-ready routes and controllers, or just spin up a controller on its own — all from one command, or through a guided interactive menu.

---

## Features

- **Interactive menu** — Run `nb` with no arguments and navigate through a clean, description-rich interface
- **Full project init** — Folder structure, templates, `.env` file, and dependency installation in one shot
- **Route & controller generation** — Pair them together or generate each independently
- **Granular method filtering** — Use `--only` or `--except` to include or exclude specific CRUD methods at generation time
- **CRUD out of the box** — Every controller ships with `create`, `readOne`, `readAll`, `update`, and `delete` pre-wired

---

## Installation

```bash
npm install -g nodibranch
```

Available as both `nodibranch` and the short alias `nb`.

---

## Usage

### Interactive mode

The fastest way to get started — run with no arguments:

```bash
nb
```

A guided menu walks you through every available action with live descriptions.

---

### Initialize a project

Sets up the full project structure: folders, templates, `.env`, and installs base dependencies automatically.

```bash
nb init
nb -i        # shorthand
```

---

### Generate a route + controller

Creates a route file in `src/routes/` and its matching controller in `src/controllers/`.

```bash
# All CRUD methods
nb -r client

# Only the methods you need
nb -r client --only:create,readAll

# Everything except what you don't
nb -r client --except:delete
```

**Example — `nb -r client` generates:**

`src/routes/clientRoutes.js`
```js
import { Router } from 'express';
import * as clientController from '../controllers/clientController.js';

const router = Router();

router.get('/', clientController.getAll);
router.get('/:id', clientController.getOne);
router.post('/', clientController.create);
router.put('/:id', clientController.update);
router.delete('/:id', clientController.remove);

export default router;
```

`src/controllers/clientController.js`
```js
export const create = async (req, res) => {
  try {
    res.status(201).json({ 
      message: "smthng created successfully",
      data: req.body 
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    res.status(200).json({
      message: "Fetch ... with ID successful",
      data : "res here"
      })
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ... getAll, update, remove
```

---

### Generate a controller only

Creates a standalone controller in `src/controllers/`.

```bash
nb -c client

# Only the methods you need
nb -c client --only:create,update

# Everything except what you don't
nb -c client --except:delete
```

**Example — `nb -c client --only:create,update` generates:**

`src/controllers/clientController.js`
```js
export const create = async (req, res) => {
  try {
    res.status(201).json({ 
      message: "smthng created successfully",
      data: req.body 
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    res.status(200).json({ 
      message: "Update successful "
      });
  } catch (error) {
    res.status(500).json({ 
      error: error.message 
      });
  }
};
```

---

### Route Autoloading & How to Call Routes

When you initialize a project with Nodibranch, the generated `src/index.js` automatically imports and registers all route files in the `src/routes/` directory ending with `Routes.js`.

Each route is mounted on `/api/<name>` (where `<name>` is the route filename prefix in lowercase).

For example, generating `nb -r client` automatically registers the client route. You can call the endpoints as follows:

| HTTP Method | Endpoint | Controller Function | Description |
|---|---|---|---|
| `POST` | `/api/client` | `create` | Create a resource |
| `GET` | `/api/client` | `getAll` | Fetch all resources |
| `GET` | `/api/client/:id` | `getOne` | Fetch a single resource by ID |
| `PUT` | `/api/client/:id` | `update` | Update a resource |
| `DELETE` | `/api/client/:id` | `remove` | Remove a resource |

---

### Help

```bash
nb -h
nb help

# Command-specific help
nb init -h
nb -r -h
nb -c -h
```

---

## Method Names (Filters)

Used with the `--only` and `--except` options:

| Filter Name | Generated Function Name | Description |
|---|---|---|
| `create` | `create` | POST — create a resource |
| `readOne` | `getOne` | GET — fetch a single resource by ID |
| `readAll` | `getAll` | GET — fetch all resources |
| `update` | `update` | PUT/PATCH — update a resource |
| `delete` | `remove` | DELETE — remove a resource |

---

## License

MIT