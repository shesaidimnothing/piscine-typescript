// On crée une classe abstraite Forme
// C'est comme un modèle de base pour toutes les formes
// Une classe abstraite ne peut pas être instanciée directement
abstract class Forme {
    // On déclare une méthode abstraite calculerSurface
    // Toutes les classes qui héritent de Forme doivent implémenter cette méthode
    abstract calculerSurface(): number;
}

// On crée une classe Rectangle qui hérite de Forme
// C'est comme dire "un rectangle est une forme"
class Rectangle extends Forme {
    // Le constructeur prend la largeur et la hauteur
    constructor(public largeur: number, public hauteur: number) {
        super();  // On appelle le constructeur de la classe parente
    }

    // On implémente la méthode calculerSurface pour les rectangles
    calculerSurface(): number {
        return this.largeur * this.hauteur;  // Surface = largeur × hauteur
    }
}

// On crée une classe Cercle qui hérite de Forme
// C'est comme dire "un cercle est une forme"
class Cercle extends Forme {
    // Le constructeur prend le rayon
    constructor(public rayon: number) {
        super();  // On appelle le constructeur de la classe parente
    }

    // On implémente la méthode calculerSurface pour les cercles
    calculerSurface(): number {
        return Math.PI * this.rayon * this.rayon;  // Surface = π × rayon²
    }
}

// On crée un rectangle de 5 par 10
const rectangle = new Rectangle(5, 10);
// On crée un cercle de rayon 3
const cercle = new Cercle(3);

// On affiche les surfaces calculées
console.log("Surface du rectangle:", rectangle.calculerSurface());
console.log("Surface du cercle:", cercle.calculerSurface()); 