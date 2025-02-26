# S1 EP2 Interfaces Avancées et Types Complexes

Utiliser des propriétés optionnelles, en lecture seule et imbriquées dans les interfaces.

## Consignes :

### 1 - Extension de l'interface Personne :

Reprenez le fichier personne.ts de la S1 EP1 et ajouter le dans le fichier de la S1 EP2, modifiez l’interface Personne pour ajouter :

- Une propriété en lecture seule id de type number.
- Une propriété optionnelle adresse qui est elle-même un objet. Déclarez une interface Adresse avec :
  - rue : string
  - ville : string

### 2 - Fonction d'affichage avancée :

- Créez une fonction afficherPersonneAvancee qui accepte un objet de type Personne et affiche toutes les informations.
- La fonction doit vérifier (avec une condition if) si l’adresse est définie. Si oui, afficher :

"Bonjour, je m'appelle [nom] (ID: [id]), j'ai [age] ans et j'habite au [rue], [ville]."
Sinon, afficher :
"Bonjour, je m'appelle [nom] (ID: [id]) et j'ai [age] ans."

### 3 - Test :

Créez deux objets :

- personne2 avec toutes les propriétés (y compris adresse).
- personne3 sans la propriété adresse.

Appelez afficherPersonneAvancee pour chacun des objets.

DOCUMENTATION :

https://www.typescriptlang.org/docs/handbook/2/objects.html#readonly-properties
https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
https://www.typescriptlang.org/docs/handbook/2/objects.html
