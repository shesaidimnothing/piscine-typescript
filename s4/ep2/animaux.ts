interface IAnimal {
    nom: string;
    seDeplacer(): void;
}

class Animal implements IAnimal {
    constructor(public nom: string) {}

    seDeplacer(): void {
        console.log(`L'animal ${this.nom} se déplace.`);
    }
}

class Chien extends Animal {
    seDeplacer(): void {
        console.log(`Le chien ${this.nom} court.`);
    }
}

class Chat extends Animal {
    seDeplacer(): void {
        console.log(`Le chat ${this.nom} saute.`);
    }
}

function faireSeDeplacer(animaux: IAnimal[]): void {
    animaux.forEach(animal => animal.seDeplacer());
}

// Test
const animaux: IAnimal[] = [
    new Chien("Rex"),
    new Chat("Mimi"),
    new Chien("Max")
];

faireSeDeplacer(animaux); 