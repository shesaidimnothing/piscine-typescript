// On crée une classe d'erreur personnalisée qui hérite de Error
class ErreurValidation extends Error {
    // On ajoute une propriété pour stocker le code d'erreur
    code: string;
    
    constructor(message: string, code: string) {
        // On appelle le constructeur de la classe parent
        super(message);
        
        // On définit le nom de l'erreur
        this.name = 'ErreurValidation';
        
        // On stocke le code d'erreur
        this.code = code;
    }
}

// Cette fonction valide un email
// Elle peut lever une ErreurValidation si l'email est invalide
function validerEmail(email: string): void {
    // Expression régulière pour valider un email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!regexEmail.test(email)) {
        // On lève notre erreur personnalisée
        throw new ErreurValidation(
            "L'email n'est pas valide",
            "EMAIL_INVALIDE"
        );
    }
}

// On essaie de valider un email
try {
    // Email valide
    validerEmail("test@example.com");
    console.log("Email valide!");
    
    // Email invalide (va lever une erreur)
    validerEmail("test@example");
} catch (erreur) {
    // On vérifie si c'est notre erreur personnalisée
    if (erreur instanceof ErreurValidation) {
        console.error(`Erreur de validation (${erreur.code}):`, erreur.message);
    } else {
        // Si c'est une autre erreur, on l'affiche normalement
        console.error("Erreur inattendue:", erreur);
    }
} 