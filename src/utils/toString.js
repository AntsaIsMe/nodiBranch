/**
 * Transforme un objet de réponses JSON en chaîne de caractères au format .env
 * @param {Object} answers - L'objet contenant les réponses d'Inquirer
 * @returns {string} La chaîne formatée pour le fichier .env
 */
export default function toString(answers) {
    return Object.entries(answers)
      .map(([key, value]) => `${key}=${value}`)
      .join('\n');
  }