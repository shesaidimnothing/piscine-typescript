// Cette fonction crée un tuple qui contient un nom de joueur et son score
// Un tuple est comme un tableau où chaque position a un type spécifique
// Ici, la première position est une chaîne (nom) et la deuxième est un nombre (score)
function creerScore(): [string, number] {
    return ["Joueur1", 100];  // On retourne un tuple avec un nom et un score
}

// Cette fonction prend un tuple score et affiche un message formaté
// Le tuple est décomposé en deux parties : nom et score
function afficherScore(score: [string, number]): void {
    console.log(`Le joueur ${score[0]} a un score de ${score[1]}.`);
}

// On crée un score
const score = creerScore();
// On affiche le score
afficherScore(score); 