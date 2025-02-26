# S3 EP1 Narrowing avec Types Primitifs

Maîtrisez le narrowing pour distinguer les types primitifs dans une union.

## Consignes

### 1 - Création du fichier

- Créez un fichier nommé `narrowing.ts`.

### 2 - Définition de la fonction

- Écrivez une fonction `traiterValeur` qui accepte un paramètre de type `string | number`.
- Dans la fonction :
  - Si le paramètre est de type `string` (utilisez `typeof param === "string"`), retournez sa longueur.
  - Sinon, retournez le double du nombre.

### 3 - Test

- Appelez `traiterValeur` avec une chaîne (ex : `"Hello"`) et un nombre (ex : `5`) et affichez les résultats dans la console.

DOCUMENTATION :

- [Type Guards](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards)
