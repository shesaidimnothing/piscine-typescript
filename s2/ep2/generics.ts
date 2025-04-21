// Cette fonction est générique mais avec une contrainte
// Le T extends { length: number } signifie que T doit avoir une propriété length qui est un nombre
// C'est comme dire "je n'accepte que les types qui ont une longueur"
function premierElement<T extends { length: number }>(tableau: T[]): T | undefined {
    if (tableau.length === 0) {
        // Si le tableau est vide, on affiche un message d'erreur et on retourne undefined
        console.log("Erreur: Le tableau est vide");
        return undefined;
    }
    return tableau[0];  // Sinon, on retourne le premier élément
}

// On teste avec un tableau non vide
const nombres: number[] = [1, 2, 3, 4, 5];
console.log("Premier nombre:", premierElement(nombres));

// On teste avec un tableau vide
const tableauVide: number[] = [];
console.log("Premier élément du tableau vide:", premierElement(tableauVide)); 