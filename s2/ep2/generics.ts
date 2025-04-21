function premierElement<T extends { length: number }>(tableau: T[]): T | undefined {
    if (tableau.length === 0) {
        console.log("Erreur: Le tableau est vide");
        return undefined;
    }
    return tableau[0];
}

// Test avec un tableau non vide
const nombres: number[] = [1, 2, 3, 4, 5];
console.log("Premier nombre:", premierElement(nombres));

// Test avec un tableau vide
const tableauVide: number[] = [];
console.log("Premier élément du tableau vide:", premierElement(tableauVide)); 