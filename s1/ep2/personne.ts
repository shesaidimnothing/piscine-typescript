interface Adresse {
    rue: string;
    ville: string;
}

interface Personne {
    readonly id: number;
    nom: string;
    age: number;
    adresse?: Adresse;
}

function afficherPersonneAvancee(personne: Personne): void {
    if (personne.adresse) {
        console.log(`Bonjour, je m'appelle ${personne.nom} (ID: ${personne.id}), j'ai ${personne.age} ans et j'habite au ${personne.adresse.rue}, ${personne.adresse.ville}.`);
    } else {
        console.log(`Bonjour, je m'appelle ${personne.nom} (ID: ${personne.id}) et j'ai ${personne.age} ans.`);
    }
}

const personne2: Personne = {
    id: 1,
    nom: "Bob",
    age: 30,
    adresse: {
        rue: "123 rue des Champs",
        ville: "Paris"
    }
};

const personne3: Personne = {
    id: 2,
    nom: "Charlie",
    age: 22
};

afficherPersonneAvancee(personne2);
afficherPersonneAvancee(personne3); 