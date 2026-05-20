import { spawn } from 'child_process';
import fs from 'fs-extra';
import path from 'path';
import cliProgress from 'cli-progress'; // 📦 Import de la barre de progression

export default async function depInstall(targetDir) {
  // 1. Lire le package.json pour compter les dépendances
  const packageJsonPath = path.join(targetDir, 'package.json');
  const packageJson = await fs.readJson(packageJsonPath);
  
  // On récupère toutes les dépendances (prod et dev)
  const deps = Object.keys(packageJson.dependencies || {});
  const devDeps = Object.keys(packageJson.devDependencies || {});
  const allDeps = [...deps, ...devDeps];
  
  const totalDeps = allDeps.length;

  console.log(`\nSummoning ${totalDeps} dependances... \n`);

  // 2. Initialiser la barre de progression (0 à 100)
  const progressBar = new cliProgress.SingleBar({
    format: 'Summoning |{bar}| {percentage}% | {value}/{total} dependances',
    barCompleteChar: '\u2666',
    barIncompleteChar: '\u2501',
    hideCursor: true
  }, cliProgress.Presets.shades_classic);

  progressBar.start(totalDeps, 0);

  // 3. Installer chaque dépendance une par une
  let installedCount = 0;

  for (const dep of allDeps) {
    await new Promise((resolve, reject) => {

      const child = spawn('npm', ['install', dep], {
        cwd: targetDir,
        shell: true,
        stdio: 'ignore'
      });

      child.on('close', (code) => {
        if (code === 0) {
          installedCount++;
          progressBar.update(installedCount); 
          resolve();
        } else {
          progressBar.stop();
          reject(new Error(`Can't summon ${dep} dependencies`));
        }
      });
    });
  }

  progressBar.stop();
  console.log("\nEverything installed");
}