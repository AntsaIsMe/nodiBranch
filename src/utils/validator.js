/**
 * Valide que l'entrée est un numéro de port valide (entre 1 et 65535)
 */
export function validNum(input) {
    const port = parseInt(input, 10);
    
    // Vérifie si c'est bien un nombre entier
    if (isNaN(port) || String(port) !== input.trim()) {
      return "Veuillez entrer un nombre valide.";
    }
    
    // Vérifie la plage des ports réseau valides
    if (port < 1 || port > 65535) {
      return "Le port doit être compris entre 1 et 65535.";
    }
    
    return true;
  }
  
  /**
   * Valide que le nom de la base de données n'utilise que des caractères autorisés
   * (Lettres, chiffres, et underscores _, max 64 caractères)
   */
  export function validNormChar(input) {
    const trimmed = input.trim();
    
    if (trimmed.length === 0) {
      return "Le nom ne peut pas être vide.";
    }
    
    if (trimmed.length > 64) {
      return "Le nom ne peut pas dépasser 64 caractères.";
    }
    
    //lettres (sans accents), chiffres et underscores
    const validPattern = /^[a-zA-Z0-9_]+$/;
    
    if (!validPattern.test(trimmed)) {
      return "Le nom ne doit contenir que des lettres, des chiffres ou des underscores (_), sans espaces ni accents.";
    }
    
    return true;
  }