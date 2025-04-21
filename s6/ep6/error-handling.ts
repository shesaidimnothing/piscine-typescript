// Cette fonction simule le traitement de données
// Elle peut lever différentes erreurs selon le cas
function traiterDonnees(donnees: any): void {
    // On vérifie si les données sont définies
    if (!donnees) {
        throw new Error("Données manquantes");
    }
    
    // On vérifie si c'est un tableau
    if (!Array.isArray(donnees)) {
        throw new Error("Les données doivent être un tableau");
    }
    
    // On vérifie si le tableau n'est pas vide
    if (donnees.length === 0) {
        throw new Error("Le tableau est vide");
    }
    
    // On traite chaque élément du tableau
    for (const element of donnees) {
        if (typeof element !== 'number') {
            throw new Error(`Élément invalide: ${element}`);
        }
    }
    
    console.log("Traitement réussi!");
}

// On essaie de traiter différentes données
try {
    // Données valides
    traiterDonnees([1, 2, 3]);
    
    // Données invalides (va lever une erreur)
    traiterDonnees(null);
} catch (erreur) {
    // On gère l'erreur de manière appropriée
    if (erreur instanceof Error) {
        console.error("Erreur:", erreur.message);
        
        // On peut ajouter des actions spécifiques selon le type d'erreur
        if (erreur.message === "Données manquantes") {
            console.log("Veuillez fournir des données");
        } else if (erreur.message === "Les données doivent être un tableau") {
            console.log("Veuillez fournir un tableau");
        } else if (erreur.message === "Le tableau est vide") {
            console.log("Veuillez fournir un tableau non vide");
        } else if (erreur.message.startsWith("Élément invalide")) {
            console.log("Tous les éléments doivent être des nombres");
        }
    }
} finally {
    // On nettoie les ressources si nécessaire
    console.log("Nettoyage terminé");
} 