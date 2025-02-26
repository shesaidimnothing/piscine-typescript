# S6 EP2 Projet Final « Gestion de Cours »

Intégrez toutes les notions vues (types, interfaces, generics, narrowing, classes, tuples, enums et fichiers de déclaration) pour créer une application de gestion universitaire.

## Consignes

### 1 - Contexte du projet

- Créez un fichier nommé `gestionCours.ts`.
- Vous allez simuler l’inscription d’étudiants à des cours.

### 2 - Définition des structures de données

- Déclarez les interfaces suivantes :
  - **Etudiant :**
    ```ts
    interface Etudiant {
      id: number;
      nom: string;
      niveau: string; // ex: "Licence", "Master"
    }
    ```
  - **Cours :**
    ```ts
    interface Cours {
      code: string;
      titre: string;
      niveau: NiveauCours; // Utilisation d'un enum
    }
    ```
  - **Professeur :**
    ```ts
    interface Professeur {
      id: number;
      nom: string;
      matiere: string;
    }
    ```
- Déclarez un enum `NiveauCours` :

  ```ts
  enum NiveauCours {
    Debutant,
    Intermediaire,
    Avance,
  }
  ```

### 3 - Création de la classe de gestion

- Créez une classe GestionCours qui contient :
  - Une propriété etudiants (tableau d’Etudiant).
  - Une propriété cours (tableau de Cours).
  - Une méthode inscrireEtudiant(coursCode: string, etudiant: Etudiant): void qui :
    - Vérifie si le cours existe (vous pouvez utiliser une fonction générique pour rechercher le cours par code).
    - Utilise le narrowing pour valider le type de l’objet récupéré.
  - Une méthode afficherInscriptions(): void qui affiche les inscriptions (vous pouvez définir une structure interne liant étudiants et cours).

### 4 - Intégration d’un module externe

- Utilisez le module fictif créé en EP1 de cette saison (pour loguer ou notifier une inscription).

### 5 - Test complet

- Dans un fichier principal (ex. index.ts), créez quelques étudiants, cours et inscriptions.
- Appelez les méthodes de GestionCours et affichez les résultats dans la console.

DOCUMENTATION :

- [Modules](https://www.typescriptlang.org/fr/docs/handbook/2/modules.html)
