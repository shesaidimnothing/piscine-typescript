// On crée une interface IAnimal qui définit ce que doit faire un animal
// C'est comme un contrat que tous les animaux doivent respecter
interface IAnimal {
    nom: string;        // Tous les animaux doivent avoir un nom
    seDeplacer(): void; // Tous les animaux doivent pouvoir se déplacer
}

// On crée une classe Animal qui implémente l'interface IAnimal
// C'est comme créer un animal de base qui respecte le contrat
class Animal implements IAnimal {
    // Le constructeur prend le nom en paramètre
    // Le mot-clé 'public' crée automatiquement la propriété nom
    constructor(public nom: string) {}

    // On implémente la méthode seDeplacer qui est requise par l'interface
    seDeplacer(): void {
        console.log(`L'animal ${this.nom} se déplace.`);
    }
}

// On crée un animal nommé Leo
const leo = new Animal("Leo");
// On fait se déplacer Leo
leo.seDeplacer(); 