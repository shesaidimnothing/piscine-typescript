# S4 EP2 Héritage et Polymorphisme

Utilisez l’héritage pour créer des classes spécifiques et exploitez le polymorphisme pour gérer un ensemble d’objets.

## Consignes

### 1 - Création des classes dérivées

- Dupliquez le fichier `animaux.ts`, créez deux classes :
  - **Chien** :
    - Étend `Animal`
    - Redéfinit la méthode `seDeplacer()` pour afficher :  
      `"Le chien [nom] court."`
  - **Chat** :
    - Étend `Animal`
    - Redéfinit la méthode `seDeplacer()` pour afficher :  
      `"Le chat [nom] saute."`

### 2 - Fonction de traitement

- Créez une fonction `faireSeDeplacer(animaux: IAnimal[])` qui prend un tableau d’objets de type `IAnimal` et appelle `seDeplacer()` pour chacun.

### 3 - Test

- Créez un tableau contenant des instances de `Chien` et `Chat`, puis passez-le à la fonction `faireSeDeplacer`.

DOCUMENTATION :

- [Héritage et classes dérivées](https://www.typescriptlang.org/docs/handbook/2/classes.html#class-heritage)
