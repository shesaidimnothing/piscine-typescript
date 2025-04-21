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

function deplacer(point: [number, number], direction: Direction): [number, number] {
    const [dx, dy] = vecteurDirection(direction);
    return [point[0] + dx, point[1] + dy];
}

// Test
const pointInitial: [number, number] = [5, 5];

console.log("Point initial:", pointInitial);
console.log("Déplacement Nord:", deplacer(pointInitial, Direction.Nord));
console.log("Déplacement Sud:", deplacer(pointInitial, Direction.Sud));
console.log("Déplacement Est:", deplacer(pointInitial, Direction.Est));
console.log("Déplacement Ouest:", deplacer(pointInitial, Direction.Ouest)); 