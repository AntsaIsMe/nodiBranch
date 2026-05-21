import chalk from "chalk";
export function help() {
    const c1 = chalk.hex('#00f5d4'); 
      const c2 = chalk.hex('#72efdd');
      const c3 = chalk.hex('#56cfe1'); 

      const textGreen = chalk.bgHex('#52b788').white.bold;
      const textCyan = chalk.bgHex('#00b4d8').white.bold;
      const textBlue = chalk.bgGreen.white.bold;


      console.log(
        c1("  ......___________......... /   / ....   \n") +
        c2(" ....../           \\..  ?   |___/   ?     \n") +
        c2(" .....||  HELPDESK  \\....  / _ _ \\   ...   \n") +
        c3(" ......\\             \\____/   o  / ?   ..  \n") +
        c3("  ......\\           /           /......... \n") +
        c3("   ......\\_________/           /......... \n") +
        c3("   .......\\___________________/.........  \n") +
        c2("   .......................................  \n") +
        c2("  ....  ") + textGreen(" N O D I ") + textCyan(" B R A N C H ") + textBlue("H E L P") + c1("  ....\n") 
      );

    console.log(`
        ${chalk.gray('générateur de boilerplates & scaffolding ultra-rapide')}
        
        ${chalk.yellow.bold('USAGE :')}
          ${chalk.green('nb')} <commande> [arguments]
        
        ${chalk.yellow.bold('COMMANDES DISPONIBLES :')}
          ${chalk.green('init')}, ${chalk.green('-i')}          Initialiser un nouveau projet Nodibranch (crée l'architecture, le .env, installe les dépendances)
          ${chalk.green('make:route')} <nom>     Générer un fichier de route Express isolé pour l'autoloading (ex: nb make:route client)
        
        ${chalk.yellow.bold('OPTIONS GLOBALES :')}
          ${chalk.green('help')}, ${chalk.green('--help')}, ${chalk.green('-h')}   Afficher ce menu d'aide
          `);
}