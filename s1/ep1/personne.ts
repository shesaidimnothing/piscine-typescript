interface Personne {
    nom: string;
    age: number;
}

function afficherPersonne(personne: Personne): void {
    console.log(`Bonjour, je m'appelle ${personne.nom} et j'ai ${personne.age} ans.`);
}

const personne1: Personne = {
    nom: "Alice",
    age: 25
};

afficherPersonne(personne1); 