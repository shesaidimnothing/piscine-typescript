interface Vehicule {
    marque: string;
    annee: number;
}

function isVehicule(obj: any): obj is Vehicule {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.marque === 'string' &&
        typeof obj.annee === 'number'
    );
}

function afficherVehicule(obj: any): void {
    if (isVehicule(obj)) {
        console.log(`Le véhicule ${obj.marque} de l'année ${obj.annee} est valide.`);
    } else {
        console.log("Objet invalide pour un véhicule.");
    }
}

// Test avec un objet valide
const voitureValide = {
    marque: "Toyota",
    annee: 2020
};

// Test avec un objet invalide
const voitureInvalide = {
    marque: "Honda",
    annee: "2020" // annee est une chaîne au lieu d'un nombre
};

afficherVehicule(voitureValide);
afficherVehicule(voitureInvalide); 