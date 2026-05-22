import chalk from 'chalk'; 
import { validNormChar, validNum } from '../utils/validator.js';
import inquirer from 'inquirer';

export const questions = [
  {
    type: 'html',
    name: 'nodibranch_logo',
    message: '',
    when: () => {
      // Dégradé de couleurs du haut vers le bas harmonisé
      const c1 = chalk.hex('#00f5d4'); // Cyan très flash
      const c2 = chalk.hex('#72efdd'); // Turquoise clair
      const c3 = chalk.hex('#56cfe1'); // Bleu lagon

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
      
      return false;
    }
  },
  {
    type: 'input',
    name: 'PORT',
    message: 'Port du serveur Express :', 
    default: '3000',
    validate: validNum
  },
  {
    type: 'input',
    name: 'DB_NAME',
    message: 'Nom de la base de données :', 
    default: 'tempName',
    validate: validNormChar
  },
  {
    type: 'html', 
    name: 'spacer_top',
    message: '',
    when: () => {
      console.log(''); 
      return false;  
    }
  },
  {
    type: 'checkbox',
    name: 'personalisable',
    prefix: `${chalk.green('\n?')}`,
    suffix: '\n',
    message: chalk.bgCyan(" Choisissez ce que vous allez personnaliser : "), // 🛠️ Nettoyage du \n interne qui décalait le prompt
    choices: [
      new inquirer.Separator(' '),
      { name: 'Personnaliser le DB host, le port, user, password', value: 'dbcustom'},
      { name: 'Integrer l\'upload fichier (Multer)', value: 'upload' },
      { name: 'Generer une template de route avec crud', value: 'crud' },
      new inquirer.Separator(' '),
    ]
  }, 
  {
    type: 'input',
    name: 'DB_HOST',
    message: '    Quel est l\'hôte de la base de données ?',
    default: 'localhost',
    when: (answers) => answers.personalisable?.includes('dbcustom')
  },
  {
    type: 'input',
    name: 'DB_PORT',
    message: '    Quel est le port de la base de données ?',
    default: '3306',
    validate: validNum,
    when: (answers) => answers.personalisable?.includes('dbcustom')
  },
  {
    type: 'input',
    name: 'DB_USER',
    message: '    Quel est l\'utilisateur MySQL ?',
    default: 'root',
    when: (answers) => answers.personalisable?.includes('dbcustom')
  },
  {
    type: 'password',
    name: 'DB_PASSWORD',
    message: '    Quel est le mot de passe MySQL ?',
    mask: '*',
    default: '',
    when: (answers) => answers.personalisable?.includes('dbcustom')
  },
  {
    type: 'input',
    name: 'ROUTE',
    message: 'Entrez le nom de la route ?',
    default: '',
    when: (answers) => answers.personalisable?.includes('crud')
  },
];