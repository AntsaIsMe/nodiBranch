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
    const source   = path.join(__dirname, '..', '..', 'templates');
    const userPath = process.cwd();
  
    try {
      const answers = await inquirer.prompt(questions);
      const personalisable = answers.personalisable ?? [];
  
      if (!personalisable.includes('dbcustom')) {
        questions
          .filter(q => q.when && 'default' in q)
          .forEach(q => { answers[q.name] = q.default; });
      }
  
      const uploadChecked = personalisable.includes('upload');
  
      // ✅ ÉTAPE AJOUTÉE : sauvegarder le package.json existant avant la copie
      const existingPkgPath = path.join(userPath, 'package.json');
      let existingPkg = null;
      if (await fs.pathExists(existingPkgPath)) {
        existingPkg = await fs.readJson(existingPkgPath);
      }
  
      // 1. Copie des templates
      await fs.copy(source, userPath);
  
      // ✅ ÉTAPE AJOUTÉE : merge des dépendances pour ne pas écraser les deps existantes
      if (existingPkg) {
        const templatePkg = await fs.readJson(existingPkgPath);
        const merged = {
          ...templatePkg,
          dependencies: {
            ...existingPkg.dependencies,        // ← tes anciennes dépendances (incl. nodibranch)
            ...templatePkg.dependencies,        // ← les nouvelles du template (prioritaires)
          },
          devDependencies: {
            ...(existingPkg.devDependencies || {}),
            ...(templatePkg.devDependencies || {}),
          },
        };
        await fs.writeJson(existingPkgPath, merged, { spaces: 2 });
      }
  
      // 2. Modification du .env
      const { personalisable: _, ...envAnswers } = answers;
      const envContent = toString(envAnswers);
      const destEnv = path.join(userPath, '.env');
      await modifFile(destEnv, envContent);
  
      // 3. Gestion du middleware upload
      if (!uploadChecked) {
        await fs.remove(path.join(userPath, 'src', 'middlewares', 'upload.js'));
      } else {
        await fs.ensureDir(path.join(userPath, 'uploads'));
        const packageJson = await fs.readJson(existingPkgPath);
        packageJson.dependencies['multer'] = '^1.4.5-lts.1';
        await fs.writeJson(existingPkgPath, packageJson, { spaces: 2 });
      }
  
      await depInstall(userPath);
  
      if (personalisable.includes('crud')) {
        const routeName = answers.routeName?.trim() || 'user';
        const { makeRoute } = await import('./makeRoute.js');
        await makeRoute(routeName);
      }
  
    } catch (error) {
      if (error.isTtyError) {
        console.error("Problème d'affichage du terminal.");
      } else {
        console.error("Une erreur est survenue :", error);
      }
    }
  }
