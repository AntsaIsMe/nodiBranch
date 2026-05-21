import chalk from 'chalk';
import {routeTemplate} from '../models/routeTemplate.js'
import { makeCtrl } from './makeCtrl.js';
import fs from 'fs-extra';
import path from 'path';


export async function makeRoute(route) {
    if (!route) {
        console.log(chalk.red("Entrez le nom du fichier de route"));
        return
    }
    const pathNow = process.cwd();
    const routeMin = route.toLowerCase()

    // directory to route + file
    const routeDir = path.join(pathNow, "src", "routes")
    const routeFile = path.join(routeDir, `${routeMin}Routes.js`)

    try {
        // verify if the file already exists
        if (await fs.pathExists(routeFile)) {
            console.log(chalk.yellow(`Le fichier ${routeMin}Route.js existe déja`));
            return
        }

        // create the dir if !exist
        await fs.ensureDir(routeDir)

        await makeCtrl(route)
        await fs.writeFile(routeFile, routeTemplate(routeMin))
        console.log(chalk.green('File created ' + routeFile));
    } catch (error) {
        console.log(chalk.red('Erreur while creating route: ', error));
    }

}