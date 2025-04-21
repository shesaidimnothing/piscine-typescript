// Cette fonction accepte soit une chaîne de caractères, soit un nombre
// Elle fait des choses différentes selon le type de la valeur
function traiterValeur(valeur: string | number): number {
    if (typeof valeur === "string") {
        // Si c'est une chaîne, on retourne sa longueur
        return valeur.length;
    } else {
        // Si c'est un nombre, on retourne son double
        return valeur * 2;
    }
}

// On teste avec une chaîne
// La fonction va compter le nombre de caractères dans "Hello" (5)
console.log("Longueur de 'Hello':", traiterValeur("Hello"));

// On teste avec un nombre
// La fonction va multiplier 5 par 2 (10)
console.log("Double de 5:", traiterValeur(5)); 