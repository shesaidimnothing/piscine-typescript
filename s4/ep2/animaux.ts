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
    constructor(public nom: string) {}

    // On implémente la méthode seDeplacer qui est requise par l'interface
    seDeplacer(): void {
        console.log(`L'animal ${this.nom} se déplace.`);
    }
}

// On crée une classe Chien qui hérite de Animal
// C'est comme dire "un chien est un type d'animal"
class Chien extends Animal {
    // On redéfinit la méthode seDeplacer pour les chiens
    seDeplacer(): void {
        console.log(`Le chien ${this.nom} court.`);
    }
}

// On crée une classe Chat qui hérite de Animal
// C'est comme dire "un chat est un type d'animal"
class Chat extends Animal {
    // On redéfinit la méthode seDeplacer pour les chats
    seDeplacer(): void {
        console.log(`Le chat ${this.nom} saute.`);
    }
}

// Cette fonction prend un tableau d'animaux et les fait tous se déplacer
// C'est un exemple de polymorphisme : chaque animal se déplace à sa manière
function faireSeDeplacer(animaux: IAnimal[]): void {
    animaux.forEach(animal => animal.seDeplacer());
}

// On crée un tableau avec différents types d'animaux
const animaux: IAnimal[] = [
    new Chien("Rex"),    // Un chien
    new Chat("Mimi"),    // Un chat
    new Chien("Max")     // Un autre chien
];

// On fait se déplacer tous les animaux
faireSeDeplacer(animaux); 