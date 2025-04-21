function traiterValeur(valeur: string | number): number {
    if (typeof valeur === "string") {
        return valeur.length;
    } else {
        return valeur * 2;
    }
}

// Test avec une chaîne
console.log("Longueur de 'Hello':", traiterValeur("Hello"));

// Test avec un nombre
console.log("Double de 5:", traiterValeur(5)); 