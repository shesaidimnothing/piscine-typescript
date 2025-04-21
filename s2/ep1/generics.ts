function premierElement<T>(tableau: T[]): T {
    return tableau[0];
}

// Test avec différents types de tableaux
const nombres: number[] = [1, 2, 3, 4, 5];
const chaines: string[] = ["a", "b", "c", "d"];
const objets: { id: number, nom: string }[] = [
    { id: 1, nom: "objet1" },
    { id: 2, nom: "objet2" }
];

console.log("Premier nombre:", premierElement(nombres));
console.log("Première chaîne:", premierElement(chaines));
console.log("Premier objet:", premierElement(objets)); 