// On crée une classe générique Boite qui peut contenir n'importe quel type d'objet
// Le T est un type générique qui sera remplacé par le type réel quand on utilise la classe
class Boite<T> {
    // La boîte contient un objet de type T
    private contenu: T;

    // Le constructeur prend un objet de type T
    constructor(contenu: T) {
        this.contenu = contenu;
    }

    // Cette méthode retourne le contenu de la boîte
    obtenirContenu(): T {
        return this.contenu;
    }
}

// On crée une boîte qui contient un nombre
const boiteNombre = new Boite<number>(42);
console.log("Contenu de la boîte de nombres:", boiteNombre.obtenirContenu());

// On crée une boîte qui contient une chaîne de caractères
const boiteTexte = new Boite<string>("Bonjour");
console.log("Contenu de la boîte de texte:", boiteTexte.obtenirContenu()); 