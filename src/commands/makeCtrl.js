import {createTemplate} from '../models/create.js'
import {getAllTemplate} from '../models/getAll.js'
import {getOneTemplate} from '../models/getOne.js'
import {updateTemplate} from '../models/update.js'
import {deleteTemplate} from '../models/delete.js'
import fs from 'fs-extra'
import chalk from 'chalk'
import path from "path"


const controller = {
    create: createTemplate(),
    readOne: getOneTemplate(),
    readAll: getAllTemplate(),
    update: updateTemplate(),
    delete: deleteTemplate()
};
const pathNow = process.cwd();
const ctrlDir = path.join(pathNow, 'src', 'controllers');
const ctrlFile = path.join(ctrlDir, `${routeN}Controller.js`);

export async function makeCtrl(route, paramType = null, paramContent = null) {
    if (!route) {
        console.log(chalk.red("Veuillez entrer un nom"));  
        return 
    }
    const routeN = route.toLowerCase()

    // all path
    const pathNow = process.cwd()
    const ctrlDir = path.join(pathNow, 'src', 'controllers')
    const ctrlFile = path.join(ctrlDir, `${routeN}Controller.js`)


    let allContrContent

    if (paramType != null) {
        switch (paramType) {
            case "except":
                allContrContent = Object.entries(controller)
                    .filter(([key]) => !paramContent.includes(key))
                    .map(([, value]) => value)
                    .join('\n\n');
                break;

            case "only":
                allContrContent = Object.entries(controller)
                    .filter(([key]) => paramContent.includes(key))
                    .map(([, value]) => value)
                    .join('\n\n');
                break;
        
                default:
                    console.log(chalk.red(`"${paramType}" n'est pas un paramètre valide`));
                    return;
        }
        
        
    }
    else{

        allContrContent = (
            Object.values(controller)
            .join('\n\n')
        );
    }

    try {
        
        // verify if the file already exists
        if (await fs.pathExists(ctrlFile)) {
            console.log(chalk.yellow(`${route}Controller.js already exist`));
            return
        }

        // create the dir if !exist
        await fs.ensureDir(ctrlDir)

        await fs.writeFile(ctrlFile ,allContrContent)
        

        console.log(chalk.green(`Controller created at ${ctrlDir}`));
        

    } catch (error) {
        console.log(chalk.red("Error while creating controller ", error));
    }
}