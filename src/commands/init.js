import { questions } from '../questions/envQuest.js';
import { modifFile } from '../utils/files.js';
import inquirer from 'inquirer';
import toString from '../utils/toString.js';
import fs from 'fs-extra';
import path from 'path';
import depInstall from '../utils/depInstall.js';
import { fileURLToPath } from 'url';

// Au niveau du module, pas dans la fonction
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function initProj() {
  const source   = path.join(__dirname, '..','..', 'templates');
  const userPath = process.cwd();

  try {
    const answers = await inquirer.prompt(questions);

    // Normalisation unique de personalisable
    const personalisable = answers.personalisable ?? [];

    // Valeurs par défaut pour les champs db si dbcustom non coché
    if (!personalisable.includes('dbcustom')) {
      questions
        .filter(q => q.when && 'default' in q)
        .forEach(q => { answers[q.name] = q.default; });
    }

    const uploadChecked = personalisable.includes('upload');

    // 1. Copie des templates d'abord
    await fs.copy(source, userPath);

    // 2. Modification du .env dans la destination (et non dans le template source)
    const { personalisable: _, ...envAnswers } = answers;
    const envContent = toString(envAnswers);
    const destEnv = path.join(userPath, '.env');
    await modifFile(destEnv, envContent);

    // 3. Gestion du middleware upload
    if (!uploadChecked) {
      const unusedMiddleware = path.join(userPath, 'src', 'middlewares', 'upload.js');
      await fs.remove(unusedMiddleware);
    } else {
      await fs.ensureDir(path.join(userPath, 'uploads'));

      const packageJsonPath = path.join(userPath, 'package.json');
      const packageJson = await fs.readJson(packageJsonPath);

      packageJson.dependencies = packageJson.dependencies || {};
      packageJson.dependencies['multer'] = '^1.4.5-lts.1';

      await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
    }

    await depInstall(userPath);

  } catch (error) {
    if (error.isTtyError) {
      console.error("Problème d'affichage du terminal.");
    } else {
      console.error("Une erreur est survenue :", error);
    }
  }
}