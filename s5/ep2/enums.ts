enum Direction {
    Nord,
    Sud,
    Est,
    Ouest
}

function vecteurDirection(direction: Direction): [number, number] {
    switch (direction) {
        case Direction.Nord:
            return [0, 1];
        case Direction.Sud:
            return [0, -1];
        case Direction.Est:
            return [1, 0];
        case Direction.Ouest:
            return [-1, 0];
    }
}

// Test
console.log("Vecteur Nord:", vecteurDirection(Direction.Nord));
console.log("Vecteur Sud:", vecteurDirection(Direction.Sud));
console.log("Vecteur Est:", vecteurDirection(Direction.Est));
console.log("Vecteur Ouest:", vecteurDirection(Direction.Ouest)); 