# S2 EP3 Utilisation de keyof avec Generics (40 minutes)

Apprendre à manipuler dynamiquement les propriétés d’un objet avec les generics.

## Consignes

### 1- Création de la fonction getProperty :

Dans generics.ts, créez une fonction générique :

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

### 2 - Test de la fonction :

- Déclarez une interface, par exemple :

```ts
interface Voiture {
  marque: string;
  modele: string;
  annee: number;
}
```

- Créez un objet maVoiture respectant cette interface.

- Utilisez la fonction getProperty pour récupérer la valeur de marque et de annee, puis affichez ces valeurs.

### 3 - Vérification :

Assurez-vous que la fonction ne permet pas de passer une clé inexistante de l’objet (la compilation TypeScript doit lever une erreur).

DOCUMENTATION :

https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
