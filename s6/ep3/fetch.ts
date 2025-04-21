// Cette fonction utilise fetch pour récupérer des données depuis une API
// Elle retourne une Promise qui se résout avec les données JSON
async function chargerDonneesAPI(): Promise<any> {
    // On utilise fetch pour faire une requête HTTP
    // fetch retourne une Promise qui se résout avec la réponse
    const reponse = await fetch('https://api.example.com/data');
    
    // On attend que la réponse soit convertie en JSON
    // .json() retourne une Promise qui se résout avec les données JSON
    const donnees = await reponse.json();
    
    return donnees;
}

// On utilise la fonction pour charger les données
console.log("Chargement des données depuis l'API...");

// On appelle la fonction et on gère le résultat avec .then()
chargerDonneesAPI()
    .then(donnees => {
        console.log("Données reçues:", donnees);
    })
    .catch(erreur => {
        console.error("Erreur lors du chargement:", erreur);
    }); 