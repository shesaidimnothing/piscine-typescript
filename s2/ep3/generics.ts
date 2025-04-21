interface Voiture {
    marque: string;
    modele: string;
    annee: number;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const maVoiture: Voiture = {
    marque: "Toyota",
    modele: "Corolla",
    annee: 2020
};

// Test avec des clés valides
console.log("Marque:", getProperty(maVoiture, "marque"));
console.log("Année:", getProperty(maVoiture, "annee"));

// La ligne suivante devrait générer une erreur de compilation
// console.log(getProperty(maVoiture, "couleur")); // Erreur: La propriété 'couleur' n'existe pas sur le type 'Voiture' 