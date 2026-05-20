import fs from 'fs-extra';

/**
 * Modifie ou crée un fichier avec le contenu spécifié.
 * Crée également les dossiers parents si nécessaire.
 * @param {string} file - Le chemin absolu du fichier à modifier/créer
 * @param {string} content - Le contenu textuel à inscrire dans le fichier
 */
export async function modifFile(file, content) {
  try {
    await fs.outputFile(file, content, 'utf8');
  } catch (error) {
    throw new Error(`Impossible d'écrire dans le fichier ${file} : ${error.message}`);
  }
}