#!/usr/bin/env node

import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const source = path.join(__dirname, '..', 'templates');
const userPath = process.cwd();
const packageJsonPath = path.join(userPath, 'package.json');

const args = process.argv.slice(2)
const command = args[0]
const name = args[1]

async function run() {
  switch (command) {
    case "init":
    case "-i":
      {
        const {initProj} = await import('../src/commands/init.js')
        await initProj()
        break;
      }
    
    case '-r':
      const {makeRoute} = await import('../src/commands/makeRoute.js')
      makeRoute(name)
      break
  
    case "help":
    case "-h":
    case "--help":
    case undefined: {
      const {help} = await import('../src/commands/help.js')
      help();
      break;
    }

    default:
          console.log(`nb ${command} doesn't exist, type nb -h to see help`);
      break;
  }
}

run();