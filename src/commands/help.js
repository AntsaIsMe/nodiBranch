import chalk from "chalk";

const c1 = chalk.hex('#00f5d4'); 
const c2 = chalk.hex('#72efdd');
const c3 = chalk.hex('#56cfe1'); 

const textGreen = chalk.bgHex('#52b788').white.bold;
const textCyan = chalk.bgHex('#00b4d8').white.bold;
const textBlue = chalk.bgGreen.white.bold;

function printHeader(subTitle) {
  console.log(
    c1("  ......___________......... /   / ....   \n") +
    c2(" ....../           \\..  ?   |___/   ?     \n") +
    c2(" .....||  HELPDESK  \\....  / _ _ \\   ...   \n") +
    c3(" ......\\             \\____/   o  / ?   ..  \n") +
    c3("  ......\\           /           /......... \n") +
    c3("   ......\\_________/           /......... \n") +
    c3("   .......\\___________________/.........  \n") +
    c2("   .......................................  \n") +
    c2("  ....  ") + textGreen(" N O D I ") + textCyan(" B R A N C H ") + textBlue(subTitle) + c1("  ....\n") 
  );
}

function showInitHelp() {
  console.log(`
  ${chalk.yellow.bold('1. INITIALISATION')} (${chalk.green('init')}, ${chalk.green('-i')})
    ${chalk.gray("Initialise un nouveau projet Nodibranch dans le dossier courant.")}
    Configure l'architecture du projet, copie les templates, crée le fichier ${chalk.blue('.env')} et installe les dépendances.
    
    ${chalk.yellow.bold('Usage :')}
      nb init
      nb -i
      
    ${chalk.yellow.bold('Exemple :')}
      nb init
  `);
}

function showRouteHelp() {
  console.log(`
  ${chalk.yellow.bold('2. GÉNÉRATION DE ROUTE & CONTRÔLEUR')} (${chalk.green('-r')})
    ${chalk.gray("Génère une route Express isolée et son contrôleur associé.")}
    Crée un fichier de route dans ${chalk.blue('src/routes/<nom>Routes.js')} et son contrôleur associé dans ${chalk.blue('src/controllers/<nom>Controller.js')}.
    
    ${chalk.yellow.bold('Usage :')}
      nb -r <nom>
      nb -r <nom> --only:<méthodes>
      nb -r <nom> --except:<méthodes>
    
    ${chalk.yellow.bold('Méthodes CRUD disponibles :')}
      create, readOne, readAll, update, delete
      
    ${chalk.yellow.bold('Exemples :')}
      nb -r client
        (génère la route et le contrôleur avec toutes les méthodes CRUD)
      nb -r client --only:create,readAll
        (génère uniquement 'create' et 'readAll')
      nb -r client --except:delete
        (génère toutes les méthodes CRUD sauf 'delete')
  `);
}

function showCtrlHelp() {
  console.log(`
  ${chalk.yellow.bold('3. GÉNÉRATION DE CONTRÔLEUR SEUL')} (${chalk.green('-c')})
    ${chalk.gray("Génère uniquement un contrôleur Express CRUD dans src/controllers/.")}
    
    ${chalk.yellow.bold('Usage :')}
      nb -c <nom>
      nb -c <nom> --only:<méthodes>
      nb -c <nom> --except:<méthodes>
    
    ${chalk.yellow.bold('Méthodes CRUD disponibles :')}
      create, readOne, readAll, update, delete
      
    ${chalk.yellow.bold('Exemples :')}
      nb -c client
        (génère le contrôleur avec toutes les méthodes CRUD)
      nb -c client --only:create,update
        (génère uniquement 'create' et 'update')
      nb -c client --except:delete
        (génère toutes les méthodes CRUD sauf 'delete')
  `);
}

export function help(cmd = null) {
  if (cmd) {
    const commandName = cmd.toLowerCase();
    
    if (commandName === 'init' || commandName === '-i') {
      printHeader('I N I T');
      showInitHelp();
      return;
    }

    if (commandName === '-r') {
      printHeader('R O U T E');
      showRouteHelp();
      return;
    }

    if (commandName === '-c') {
      printHeader('C O N T R O L');
      showCtrlHelp();
      return;
    }
  }

  // Affichage du help général par défaut
  printHeader('H E L P');
  
  console.log(`
    ${chalk.gray('générateur de boilerplates & scaffolding ultra-rapide')}
    
    ${chalk.yellow.bold('USAGE GÉNÉRAL :')}
      ${chalk.green('nb')}                                Lance l'interface interactive de sélection
      ${chalk.green('nb')} <commande> [arguments]         Exécute une commande spécifique
  `);

  showInitHelp();
  showRouteHelp();
  showCtrlHelp();

  console.log(`
  ${chalk.yellow.bold('OPTIONS GLOBALES :')}
    ${chalk.green('help')}, ${chalk.green('--help')}, ${chalk.green('-h')}   Afficher ce menu d'aide complet
    
  ${chalk.gray("Pour afficher l'aide d'une commande spécifique individuellement, tapez : nb <commande> -h")}
  `);
}