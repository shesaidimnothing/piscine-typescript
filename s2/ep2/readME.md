# S2 EP2 Generics avec Contraintes

Introduire les contraintes sur les types génériques pour s’assurer de la présence de propriétés spécifiques.

## Consignes

### 1 - Modification de la fonction générique :

- Dupliquez dans S2 EP2 le fichier generic.ts de la S2 EP1, modifiez la fonction premierElement pour accepter uniquement des tableaux qui ne sont pas vides.
- Utilisez une contrainte sur le type générique en vous appuyant sur le concept de types possédant une propriété length.

### 2 - Ajout d'une vérification :

Avant de retourner le premier élément, vérifiez si la longueur du tableau est supérieure à 0. Sinon, affichez un message d’erreur ou retournez undefined.

### 3 - Test :

Testez avec un tableau non vide et un tableau vide pour vérifier le comportement.

DOCUMENTATION :

https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
