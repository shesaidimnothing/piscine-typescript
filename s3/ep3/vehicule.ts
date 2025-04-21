// On crée une interface Vehicule qui définit la structure d'un véhicule
// C'est comme une fiche technique minimale d'un véhicule
interface Vehicule {
    marque: string;    // La marque du véhicule
    annee: number;     // L'année de fabrication
}

// Cette fonction vérifie si un objet est un véhicule valide
// Elle retourne true si l'objet a toutes les propriétés nécessaires avec les bons types
function isVehicule(obj: any): obj is Vehicule {
    return (
        typeof obj === 'object' &&           // Vérifie que c'est un objet
        obj !== null &&                      // Vérifie que ce n'est pas null
        typeof obj.marque === 'string' &&    // Vérifie que marque est une chaîne
        typeof obj.annee === 'number'        // Vérifie que annee est un nombre
    );
}

// Cette fonction affiche les informations d'un véhicule si c'est un véhicule valide
function afficherVehicule(obj: any): void {
    if (isVehicule(obj)) {
        // Si c'est un véhicule valide, on affiche ses informations
        console.log(`Le véhicule ${obj.marque} de l'année ${obj.annee} est valide.`);
    } else {
        // Sinon, on affiche un message d'erreur
        console.log("Objet invalide pour un véhicule.");
    }
}

// On crée un véhicule valide
const voitureValide = {
    marque: "Toyota",
    annee: 2020
};

// On crée un véhicule invalide (l'année est une chaîne au lieu d'un nombre)
const voitureInvalide = {
    marque: "Honda",
    annee: "2020" // annee est une chaîne au lieu d'un nombre
};

// On teste la fonction avec les deux objets
afficherVehicule(voitureValide);
afficherVehicule(voitureInvalide); 