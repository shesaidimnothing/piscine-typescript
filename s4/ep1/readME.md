# S4 EP1 Classes et Implémentation d’Interfaces

Créez une classe qui implémente une interface et affichez les informations de l’objet.

## Consignes

### 1 - Création de l'interface et de la classe de base

- Dans un fichier nommé `animaux.ts`, déclarez une interface `IAnimal` avec :
  - `nom`: de type `string`
  - Méthode `seDeplacer(): void`
- Créez une classe `Animal` qui implémente `IAnimal`. Dans le constructeur, initialisez la propriété `nom`.
- Implémentez la méthode `seDeplacer()` pour afficher :  
  `"L'animal [nom] se déplace."`

### 2 - Test

- Créez une instance de `Animal` (par exemple, avec le nom "Leo") et appelez la méthode `seDeplacer()`.

DOCUMENTATION :

- [Classes en TypeScript](https://www.typescriptlang.org/docs/handbook/2/classes.html)
