#!/usr/bin/env node

import inquirer from  'inquirer'
import path from 'path'
import { fileURLToPath } from 'url'
import {questions} from '../src/questions/envQuest.js'
import { modifFile } from '../src/utils/files.js'
import toString from '../src/utils/toString.js'
import fs from 'fs-extra'
import depInstall from '../src/utils/depInstall.js'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const source = path.join(__dirname, '..', 'templates')
const userPath = process.cwd()

const packageJsonPath = path.join(userPath, 'package.json');

async function run() {
  try {
      const answers = await inquirer.prompt(questions);
      
      const { uploadFeature, ...envAnswers } = answers;
      const envContent = toString(answers)

      const cible = path.join(__dirname, '..', 'templates', '.env');

      await modifFile(cible, envContent);

      // copy templates
      await fs.copy(source, userPath)


      if (!uploadFeature) {
        const unusedMiddleware = path.join(userPath, 'src', 'middlewares', 'upload.js');
        await fs.remove(unusedMiddleware);
      } else {
        // add upload dir
          await fs.ensureDir(path.join(userPath, 'uploads'));

          const packageJson = await fs.readJson(packageJsonPath);

          packageJson.dependencies = packageJson.dependencies || {}
          packageJson.dependencies['multer'] = '^1.4.5-lts.1';

          await fs.writeJson(packageJsonPath, packageJson, {spaces : 2})

      }

      await depInstall(userPath);

  } catch (error) {
      if (error.isTtyError) {
          console.log("Problème d'affichage du terminal.");
      } else {
          console.log("Une erreur est survenue :", error);      
      }
  }
}

run()
