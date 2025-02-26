# S1 EP3 Unions, Intersections et Narrowing

Apprendre à combiner des types à l’aide des unions et intersections, et utiliser le narrowing pour distinguer les types.

## Consignes :

### 1 - Création de deux interfaces :

Dans un fichier personnePro.ts, déclarez :

- Une interface Employe avec :
  - nom: string
  - poste: string
- Une interface Client avec :
  - nom: string
  - entreprise: string

### 2 - Définition d’un type union :

Déclarez un type PersonnePro qui est soit un Employe soit un Client (aide : Employe | Client;)

### 3 - Fonction avec Narrowing :

- Créez une fonction afficherInfoProfessionnelle qui prend un paramètre de type PersonnePro.

- Dans la fonction, utilisez le narrowing (par exemple, avec l'opérateur in) pour :

  - Vérifier si l’objet possède la propriété poste et afficher :
    - "Employé: [nom] travaille comme [poste]."
    - Sinon, vérifier s’il possède la propriété entreprise et afficher : "Client: [nom] est associé à l'entreprise [entreprise]."

### 4 - Test :

Créez un objet employe1 et un objet client1 respectant chacune des interfaces, et appelez la fonction pour les deux.

DOCUMENTATION :

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types
