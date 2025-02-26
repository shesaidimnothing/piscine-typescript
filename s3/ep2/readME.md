# S3 EP2 Utilisation de instanceof pour des Classes

Utilisez l’opérateur `instanceof` pour identifier le type d’une instance et adapter le comportement en conséquence.

## Consignes

### 1 - Création des classes

- Dans un fichier nommé `formes.ts`, créez deux classes :
  - **Rectangle** :
    - Propriétés : `largeur` et `hauteur` (de type `number`).
    - Méthode `calculerSurface()` qui retourne `largeur * hauteur`.
  - **Cercle** :
    - Propriété : `rayon` (de type `number`).
    - Méthode `calculerSurface()` qui retourne `Math.PI * rayon * rayon`.

### 2 - Fonction de traitement

- Créez une fonction `afficherSurface(forme: Rectangle | Cercle): void` qui :
  - Utilise `instanceof` pour déterminer si `forme` est une instance de `Rectangle` ou de `Cercle`.
  - Affiche dans la console :
    - Pour un rectangle : `"Ceci est un rectangle de surface [surface]."`
    - Pour un cercle : `"Ceci est un cercle de surface [surface]."`

### 3 - Test

- Créez une instance de `Rectangle` et une instance de `Cercle`, puis appelez `afficherSurface` pour chacune.

DOCUMENTATION :

- [Instanceof](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing)
