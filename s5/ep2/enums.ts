// On crée un enum Direction qui représente les directions possibles
// Un enum est comme une liste de constantes nommées
enum Direction {
    Nord,   // Valeur 0
    Sud,    // Valeur 1
    Est,    // Valeur 2
    Ouest   // Valeur 3
}

// Cette fonction prend une direction et retourne un vecteur correspondant
// Un vecteur est représenté par un tuple de deux nombres [x, y]
function vecteurDirection(direction: Direction): [number, number] {
    switch (direction) {
        case Direction.Nord:
            return [0, 1];   // Nord = vers le haut (y augmente)
        case Direction.Sud:
            return [0, -1];  // Sud = vers le bas (y diminue)
        case Direction.Est:
            return [1, 0];   // Est = vers la droite (x augmente)
        case Direction.Ouest:
            return [-1, 0];  // Ouest = vers la gauche (x diminue)
    }
}

// On teste la fonction avec toutes les directions
console.log("Vecteur Nord:", vecteurDirection(Direction.Nord));
console.log("Vecteur Sud:", vecteurDirection(Direction.Sud));
console.log("Vecteur Est:", vecteurDirection(Direction.Est));
console.log("Vecteur Ouest:", vecteurDirection(Direction.Ouest)); 