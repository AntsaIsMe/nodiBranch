import inquirer from 'inquirer';
import chalk from 'chalk';

export async function home() {
  console.clear();
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
}