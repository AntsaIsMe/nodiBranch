#!/usr/bin/env node
import chalk from 'chalk';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const source = path.join(__dirname, '..', 'templates');
const userPath = process.cwd();
const packageJsonPath = path.join(userPath, 'package.json');

const args = process.argv.slice(2);

const command = args[0];
const name = args[1];

const command2 = args.find(arg => arg.startsWith('--')) ?? null;

const [paramType, paramContent] = command2
  ? command2.replace('--', '').split(':')
  : [null, null];


async function run() {
  switch (command) {
    case "init":
    case "-i": {
      const { initProj } = await import('../src/commands/init.js');
      await initProj();
      break;
    }

    case '-r': {
      const { makeRoute } = await import('../src/commands/makeRoute.js');

      if (command2 != null && command2 != undefined) {
        const methods = ["only", "except"];

        if (methods.includes(paramType)) {
          await makeRoute(name, paramType, paramContent); 
        } else {
          console.log("Voir commande help");
        }
      } else {
        await makeRoute(name); 
      }
      break;
    }

    case '-c':
      const { makeCtrl } = await import('../src/commands/makeCtrl.js');
      if (command2 != null && command2 != undefined) {
        if (methods.includes(paramType)) {
          await makeCtrl(name, paramType, paramContent); 
        } else {
          console.log(chalk.yellow("Option invalide. Voir commande help"));
        }
      } else {
        await makeCtrl(name); 
      }
      break;

    case "help":
    case "-h":
    case "--help":
     {
      const { help } = await import('../src/commands/help.js');
      help();
      break;
    }

    case 'home':
    case '-h':
      case undefined: {
      const { home } = await import('../src/commands/home.js');
      await home();
      break;
    }

    default:
      console.log(`nb ${command} doesn't exist, type nb -h to see help`);
      break;
  }
}

run().catch(error => {  
  console.error(chalk.red(`Erreur inattendue : ${error.message}`));
  process.exit(1);
});