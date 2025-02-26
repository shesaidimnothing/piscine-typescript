# S5 EP2 Utilisation des Enums

Apprenez à définir et utiliser des enums pour représenter un ensemble de constantes.

## Consignes

### 1 - Création de l’enum

- Dans un fichier nommé `enums.ts`, déclarez un enum `Direction` avec les valeurs suivantes :
  - `Nord`
  - `Sud`
  - `Est`
  - `Ouest`

### 2 - Fonction associant un vecteur

- Créez une fonction `vecteurDirection(direction: Direction): [number, number]` qui retourne un tuple représentant un vecteur selon la direction :
  - Par exemple :
    - `Direction.Nord` → `[0, 1]`
    - `Direction.Sud` → `[0, -1]`
    - `Direction.Est` → `[1, 0]`
    - `Direction.Ouest` → `[-1, 0]`

### 3 - Test

- Appelez la fonction avec différentes valeurs de `Direction` et affichez les résultats.

DOCUMENTATION :

- [Enums]https://www.typescriptlang.org/docs/handbook/type-compatibility.html#enums
  (https://www.typescriptlang.org/docs/handbook/enums.html)
