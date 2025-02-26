# S4 EP3 Classes Abstraites et Méthodes Abstraites

Utilisez une classe abstraite pour définir un modèle commun et imposez l’implémentation de méthodes dans les classes dérivées.

## Consignes

### 1 - Création de la classe abstraite

- Dans un fichier nommé `formes.ts`, créez une classe abstraite `Forme` avec une méthode abstraite `calculerSurface(): number`.

### 2 - Implémentation des classes concrètes

- Créez une classe `Rectangle` qui étend `Forme` :
  - Ajoutez les propriétés `largeur` et `hauteur` (de type `number`).
  - Implémentez `calculerSurface()` pour retourner `largeur * hauteur`.
- Créez une classe `Cercle` qui étend `Forme` :
  - Ajoutez la propriété `rayon` (de type `number`).
  - Implémentez `calculerSurface()` pour retourner `Math.PI * rayon * rayon`.

### 3 - Test

- Instanciez un `Rectangle` et un `Cercle` avec des valeurs définies, puis affichez la surface calculée pour chacun.

DOCUMENTATION :

- [Classes abstraites](https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes-and-members)
