// Cette fonction simule le chargement de données depuis un serveur
// Elle retourne une Promise qui se résout avec les données après 2 secondes
function chargerDonnees(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Données chargées avec succès!");
        }, 2000);
    });
}

// On crée une fonction asynchrone pour utiliser async/await
async function afficherDonnees() {
    console.log("Début du chargement...");
    
    // On attend que les données soient chargées
    // Le mot-clé await fait que le code s'arrête ici jusqu'à ce que la Promise soit résolue
    const donnees = await chargerDonnees();
    
    // Une fois les données chargées, on les affiche
    console.log(donnees);
}

// On appelle la fonction asynchrone
afficherDonnees(); 