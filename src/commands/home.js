import { select, input, checkbox } from '@inquirer/prompts';
import chalk from 'chalk';
import { initProj } from './init.js';
import { makeRoute } from './makeRoute.js';
import { makeCtrl } from './makeCtrl.js';
import { help } from './help.js';

// ← logique extraite, utilisée par 'route' et 'ctrl'
async function askFilterParams() {
  const filterType = await select({
    message: 'Filtrer les méthodes du contrôleur ?',
    choices: [
      {
        name: 'Par défaut (toutes les méthodes)', value: 'default',
        description: 'Génère toutes les méthodes CRUD : create, readOne, readAll, update, delete.'
      },
      {
        name: 'Only (générer uniquement certaines méthodes)', value: 'only',
        description: 'Sélectionnez précisément les méthodes à inclure.'
      },
      {
        name: 'Except (exclure certaines méthodes)', value: 'except',
        description: 'Sélectionnez précisément les méthodes à exclure.'
      },
    ],
  });

  if (filterType === 'default') return { paramType: null, paramContent: null };

  const selectedMethods = await checkbox({
    message: filterType === 'only' ? 'Sélectionnez les méthodes à INCLURE :' : 'Sélectionnez les méthodes à EXCLURE :',
    choices: ['create', 'readOne', 'readAll', 'update', 'delete']
      .map(m => ({ name: m, value: m })),
    validate: (answer) => answer.length > 0 || 'Vous devez sélectionner au moins une méthode.',
  });

  return { paramType: filterType, paramContent: selectedMethods };
}

async function askName(context) {
  return input({
    message: `Entrez le nom ${context} (ex: client) :`,
    validate: (value) => value.trim() !== '' || 'Le nom ne peut pas être vide.',
  });
}

export async function home() {
  console.clear();

  const c1 = chalk.hex('#00f5d4');
  const c2 = chalk.hex('#72efdd');
  const c3 = chalk.hex('#56cfe1');
  const textGreen = chalk.bgHex('#52b788').white.bold;
  const textCyan = chalk.bgHex('#00b4d8').white.bold;

  console.log(
    c1("    ...................................... \n") +
    c1("  ......___________......... /   / ....   \n") +
    c2(" ....../           \\....... |___/ .....   \n") +
    c2(" .....||            \\....../ _ _ \\......   \n") +
    c3(" ......\\             \\____/   o  /.......  \n") +
    c3("  ......\\           /           /......... \n") +
    c3("   ......\\_________/           /......... \n") +
    c3("   .......\\___________________/.........  \n") +
    c2("   .......................................  \n") +
    c2("  .......  ") + textGreen(" N O D I ") + textCyan(" B R A N C H ") + c1("  ............\n") +
    c1(" .............................................\n")
  );

  try {
    const choice = await select({
      message: 'Choisissez une fonctionnalité à exécuter :',
      choices: [
        {
          name: 'Initialiser un nouveau projet', value: 'init',
          description: "Lance la configuration et l'installation d'un nouveau projet. (Commande : nb init)"
        },
        {
          name: 'Générer une Route & un Contrôleur', value: 'route',
          description: 'Crée un fichier de route Express et son contrôleur associé. (Commande : nb -r <nom>)'
        },
        {
          name: 'Générer un Contrôleur seul', value: 'ctrl',
          description: 'Crée uniquement un fichier de contrôleur avec les fonctions CRUD. (Commande : nb -c <nom>)'
        },
        {
          name: "Afficher l'aide", value: 'help',
          description: 'Affiche les commandes et options en ligne de commande. (Commande : nb help)'
        },
        {
          name: 'Quitter', value: 'exit',
          description: "Ferme l'application CLI."
        },
      ],
    });

    switch (choice) {
      case 'init':
        await initProj();
        break;

      case 'route': {
        const name = await askName('de la route');
        const { paramType, paramContent } = await askFilterParams();
        await makeRoute(name, paramType, paramContent);
        break;
      }

      case 'ctrl': {
        const name = await askName('du contrôleur');
        const { paramType, paramContent } = await askFilterParams();
        await makeCtrl(name, paramType, paramContent);
        break;
      }

      case 'help':
        help();
        break;

      case 'exit': {
        const c1 = chalk.hex('#00f5d4'); // Cyan très flash
        const c2 = chalk.hex('#72efdd'); // Turquoise clair
        const c3 = chalk.hex('#56cfe1'); // Bleu lagon
        const textRed = chalk.hex('#ff5555').bold;

        console.log(
          c1("      /   /       ") + textRed("  ___  _   ___ ___ _    ___ \n") +
          c1("     |___/        ") + textRed(" | __|/_\\\\ |_ _| _ ) |  | __|\n") +
          c2("    / _ _ \\       ") + textRed(" | _|/ _ \\\\ | || _ \\\\ |__| _|\n") +
          c2("   /   o  /       ") + textRed(" |_|/_/ \\\\_\\\\___|___/____|___|\n") +
          c3("  /______/\n")
        );
        process.exit(0);
      }
    }
  } catch (error) {
    if (error.name === 'ExitPromptError') {
      console.log(chalk.yellow('\nOpération annulée.'));
    } else {
      console.error(chalk.red(`Une erreur est survenue : ${error.message}`));
    }
  }
}