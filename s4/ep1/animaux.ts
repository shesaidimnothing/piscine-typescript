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

// Test
const leo = new Animal("Leo");
leo.seDeplacer(); 