// Cette fonction est générique, ce qui signifie qu'elle peut travailler avec n'importe quel type
// Le <T> est comme une variable de type qui sera remplacée par le type réel quand on utilise la fonction
function premierElement<T>(tableau: T[]): T {
    return tableau[0];  // On retourne simplement le premier élément du tableau
}

// On crée différents types de tableaux pour tester la fonction
const nombres: number[] = [1, 2, 3, 4, 5];  // Un tableau de nombres
const chaines: string[] = ["a", "b", "c", "d"];  // Un tableau de chaînes de caractères
const objets: { id: number, nom: string }[] = [  // Un tableau d'objets
    { id: 1, nom: "objet1" },
    { id: 2, nom: "objet2" }
];

// On teste la fonction avec les différents types de tableaux
// TypeScript comprend automatiquement le type T en fonction du tableau qu'on lui passe
console.log("Premier nombre:", premierElement(nombres));  // T devient number
console.log("Première chaîne:", premierElement(chaines));  // T devient string
console.log("Premier objet:", premierElement(objets));  // T devient { id: number, nom: string } 