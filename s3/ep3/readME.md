# S3 EP3 Garde-type Personnalisé

Créez un garde-type personnalisé pour vérifier qu’un objet correspond à une interface donnée.

## Consignes

### 1 - Création de l'interface

- Dans un fichier nommé `vehicule.ts`, déclarez une interface `Vehicule` avec :
  - `marque`: de type `string`
  - `annee`: de type `number`

### 2 - Implémentation du typeguard

- Écrivez une fonction `isVehicule(obj: any): obj is Vehicule` qui retourne `true` si :
  - L’objet possède une propriété `marque` de type `string`
  - L’objet possède une propriété `annee` de type `number`

### 3 - Fonction d’utilisation

- Créez une fonction `afficherVehicule(obj: any)` qui :
  - Utilise `isVehicule` pour vérifier si l’objet est bien un `Vehicule`.
  - Si c’est le cas, affiche :  
    `"Le véhicule [marque] de l'année [annee] est valide."`
  - Sinon, affiche :  
    `"Objet invalide pour un véhicule."`

### 4 - Test

- Créez au moins un objet valide et un objet invalide, puis testez la fonction `afficherVehicule`.

DOCUMENTATION :

- [Type Guards](https://www.typescriptlang.org/fr/docs/handbook/2/narrowing.html#gardes-de-types-typeof)
