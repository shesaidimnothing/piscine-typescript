abstract class Forme {
    abstract calculerSurface(): number;
}

class Rectangle extends Forme {
    constructor(public largeur: number, public hauteur: number) {
        super();
    }

    calculerSurface(): number {
        return this.largeur * this.hauteur;
    }
}

class Cercle extends Forme {
    constructor(public rayon: number) {
        super();
    }

    calculerSurface(): number {
        return Math.PI * this.rayon * this.rayon;
    }
}

// Test
const rectangle = new Rectangle(5, 10);
const cercle = new Cercle(3);

console.log("Surface du rectangle:", rectangle.calculerSurface());
console.log("Surface du cercle:", cercle.calculerSurface()); 