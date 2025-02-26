# S5 EP3 Combinaison de Tuples et Enums (30 minutes)

Intégrez l’utilisation de tuples et d’enums pour modifier des coordonnées.

## Consignes

### 1 - Création de la fonction de déplacement

- Dans le fichier `enums.ts` (ou dans un nouveau fichier), écrivez une fonction :
  ```ts
  function deplacer(
    point: [number, number],
    direction: Direction
  ): [number, number] {
    const [dx, dy] = vecteurDirection(direction);
    return [point[0] + dx, point[1] + dy];
  }
  ```

### 2 - Test

- Définissez un point initial (par exemple, [5, 5]).
- Appliquez la fonction deplacer avec différentes valeurs de Direction (par exemple, Direction.Nord, Direction.Est, etc.) et affichez les nouveaux points obtenus dans la console.

DOCUMENTATION :

- [Enums]https://www.typescriptlang.org/docs/handbook/type-compatibility.html#enums
  (https://www.typescriptlang.org/docs/handbook/enums.html)
- [Tuples](https://www.typescriptlang.org/docs/handbook/variable-declarations.html#tuple-destructuring)
