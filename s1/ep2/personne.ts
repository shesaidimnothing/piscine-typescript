// On crée une interface Adresse qui définit la structure d'une adresse
// C'est comme un modèle pour stocker une adresse avec rue et ville
interface Adresse {
    rue: string;    // La rue doit être une chaîne de caractères
    ville: string;  // La ville doit être une chaîne de caractères
}

// On étend l'interface Personne avec plus de propriétés
// C'est comme ajouter plus d'informations à la fiche d'une personne
interface Personne {
    readonly id: number;     // L'ID est en lecture seule, on ne peut pas le modifier
    nom: string;            // Le nom de la personne
    age: number;            // L'âge de la personne
    adresse?: Adresse;      // L'adresse est optionnelle (le ? signifie qu'elle peut être undefined)
}

// Cette fonction affiche les informations d'une personne de manière plus détaillée
// Elle vérifie si la personne a une adresse et affiche un message différent selon le cas
function afficherPersonneAvancee(personne: Personne): void {
    if (personne.adresse) {
        // Si la personne a une adresse, on affiche toutes les informations
        console.log(`Bonjour, je m'appelle ${personne.nom} (ID: ${personne.id}), j'ai ${personne.age} ans et j'habite au ${personne.adresse.rue}, ${personne.adresse.ville}.`);
    } else {
        // Si la personne n'a pas d'adresse, on affiche un message plus simple
        console.log(`Bonjour, je m'appelle ${personne.nom} (ID: ${personne.id}) et j'ai ${personne.age} ans.`);
    }
}

// On crée une personne avec toutes les informations, y compris l'adresse
const personne2: Personne = {
    id: 1,
    nom: "Bob",
    age: 30,
    adresse: {
        rue: "123 rue des Champs",
        ville: "Paris"
    }
};

// On crée une personne sans adresse
const personne3: Personne = {
    id: 2,
    nom: "Charlie",
    age: 22
};

// On teste la fonction avec les deux types de personnes
afficherPersonneAvancee(personne2);
afficherPersonneAvancee(personne3); 