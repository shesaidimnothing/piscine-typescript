// On crée une interface Voiture qui définit la structure d'une voiture
// C'est comme une fiche technique d'une voiture avec ses caractéristiques
interface Voiture {
    marque: string;    // La marque de la voiture
    modele: string;    // Le modèle de la voiture
    annee: number;     // L'année de fabrication
}

// Cette fonction générique permet d'accéder à une propriété d'un objet de manière sûre
// T est le type de l'objet (dans notre cas Voiture)
// K est le type de la clé (dans notre cas "marque" | "modele" | "annee")
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];  // On retourne la valeur de la propriété demandée
}

// On crée une voiture
const maVoiture: Voiture = {
    marque: "Toyota",
    modele: "Corolla",
    annee: 2020
};

// On teste la fonction avec des clés valides
console.log("Marque:", getProperty(maVoiture, "marque"));  // Affiche "Toyota"
console.log("Année:", getProperty(maVoiture, "annee"));    // Affiche 2020

// Cette ligne générerait une erreur de compilation car "couleur" n'est pas une propriété de Voiture
// console.log(getProperty(maVoiture, "couleur")); // Erreur: La propriété 'couleur' n'existe pas sur le type 'Voiture' 