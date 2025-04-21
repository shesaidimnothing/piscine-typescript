// Cette fonction divise deux nombres
// Elle peut lever une erreur si le diviseur est zéro
function diviser(a: number, b: number): number {
    if (b === 0) {
        // On lève une erreur si on essaie de diviser par zéro
        throw new Error("Division par zéro impossible!");
    }
    return a / b;
}

// On essaie d'exécuter du code qui peut lever une erreur
try {
    // On appelle la fonction avec des valeurs valides
    const resultat1 = diviser(10, 2);
    console.log("10 / 2 =", resultat1);
    
    // On essaie de diviser par zéro (cela va lever une erreur)
    const resultat2 = diviser(10, 0);
    console.log("10 / 0 =", resultat2);
} catch (erreur) {
    // Si une erreur est levée, on la capture ici
    console.error("Une erreur s'est produite:", erreur.message);
} finally {
    // Ce bloc s'exécute toujours, qu'il y ait une erreur ou non
    console.log("Fin du calcul");
} 