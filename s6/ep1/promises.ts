// Cette fonction simule le chargement de données depuis un serveur
// Elle retourne une Promise qui se résout avec les données après 2 secondes
function chargerDonnees(): Promise<string> {
    return new Promise((resolve) => {
        // On simule un délai de 2 secondes
        setTimeout(() => {
            // Après 2 secondes, on résout la Promise avec les données
            resolve("Données chargées avec succès!");
        }, 2000);
    });
}

// On utilise la fonction chargerDonnees
console.log("Début du chargement...");

// On appelle la fonction et on utilise .then() pour gérer le résultat
chargerDonnees().then((donnees) => {
    console.log(donnees);
}); 