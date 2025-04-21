// On crée une classe Rectangle qui représente un rectangle
// Elle a une largeur et une hauteur
class Rectangle {
    // Le constructeur prend la largeur et la hauteur en paramètres
    // Le mot-clé 'public' crée automatiquement les propriétés
    constructor(public largeur: number, public hauteur: number) {}

    // Cette méthode calcule la surface du rectangle
    calculerSurface(): number {
        return this.largeur * this.hauteur;  // Surface = largeur × hauteur
    }
}

// On crée une classe Cercle qui représente un cercle
// Elle a un rayon
class Cercle {
    // Le constructeur prend le rayon en paramètre
    constructor(public rayon: number) {}

    // Cette méthode calcule la surface du cercle
    calculerSurface(): number {
        return Math.PI * this.rayon * this.rayon;  // Surface = π × rayon²
    }
}

// Cette fonction prend une forme (Rectangle ou Cercle) et affiche sa surface
function afficherSurface(forme: Rectangle | Cercle): void {
    if (forme instanceof Rectangle) {
        // Si c'est un Rectangle, on affiche sa surface
        console.log(`Ceci est un rectangle de surface ${forme.calculerSurface()}.`);
    } else if (forme instanceof Cercle) {
        // Si c'est un Cercle, on affiche sa surface
        console.log(`Ceci est un cercle de surface ${forme.calculerSurface()}.`);
    }
}

// On crée un rectangle de 5 par 10
const rectangle = new Rectangle(5, 10);
// On crée un cercle de rayon 3
const cercle = new Cercle(3);

// On teste la fonction avec les deux formes
afficherSurface(rectangle);
afficherSurface(cercle); 