// On crée une interface Personne qui définit la structure d'une personne
// C'est comme un contrat qui dit "toute personne doit avoir un nom et un âge"
interface Personne {
    nom: string;    // Le nom doit être une chaîne de caractères
    age: number;    // L'âge doit être un nombre
}

// Cette fonction prend une personne en paramètre et affiche un message
// Elle utilise les propriétés de l'objet personne pour créer le message
function afficherPersonne(personne: Personne): void {
    console.log(`Bonjour, je m'appelle ${personne.nom} et j'ai ${personne.age} ans.`);
}

// On crée un objet personne1 qui respecte l'interface Personne
// C'est comme créer une fiche pour une personne avec son nom et son âge
const personne1: Personne = {
    nom: "Alice",
    age: 25
};

// On appelle la fonction pour afficher les informations de la personne
afficherPersonne(personne1);