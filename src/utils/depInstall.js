import { spawn } from 'child_process';
import cliProgress from 'cli-progress';
import chalk from 'chalk';

export default async function depInstall(targetDir) {
  console.log(chalk.cyan(`\nSummoning dependencies... \n`));

  // 1. Initialiser la barre de progression (0 à 100%)
  const progressBar = new cliProgress.SingleBar({
    format: 'Summoning |{bar}| {percentage}% |',
    barCompleteChar: '\u2666',
    barIncompleteChar: '\u2501',
    hideCursor: true
  }, cliProgress.Presets.shades_classic);

  progressBar.start(100, 0);

  let progress = 0;
  const timer = setInterval(() => {
    if (progress < 90) {
      progress += 1;
      progressBar.update(progress);
    }
  }, 50);

  // 3. On lance UN SEUL npm install global pour tout installer d'un coup
  await new Promise((resolve, reject) => {
    const child = spawn('npm', ['install'], {
      cwd: targetDir,
      shell: true,
      stdio: 'ignore' 
    });

    child.on('close', (code) => {
      clearInterval(timer); // On arrête le faux compteur
      
      if (code === 0) {
        progressBar.update(100);
        progressBar.stop();
        console.log(chalk.green("\nEverything installed perfectly!\n"));
        resolve();
      } else {
        progressBar.stop();
        reject(new Error("Can't summon dependencies. Check your internet connection."));
      }
    });
  });
}