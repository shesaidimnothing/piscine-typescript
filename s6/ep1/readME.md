# S6 EP1 Création d’un Fichier de Déclaration (45 minutes)

Apprenez à créer et utiliser un fichier de déclaration (.d.ts) pour typer un module externe fictif.

## Consignes

### 1 - Création du module fictif

- Dans un dossier nommé `mon-module`, créez un fichier `index.js` contenant :

  ```js
  function alerter(message) {
    console.log("Alerte:", message);
  }

  function logger(message) {
    console.log("Log:", message);
  }

  module.exports = { alerter, logger };
  ```

### 2 - Création du fichier de déclaration

- Dans le même dossier, créez un fichier mon-module.d.ts qui déclare :

```ts
declare module "mon-module" {
  export function alerter(message: string): void;
  export function logger(message: string): void;
}
```

### 3 - Utilisation dans le projet

- Dans un fichier testModule.ts, importez le module :

```ts
import { alerter, logger } from "mon-module";
```

- Appelez alerter("Test alerte") et logger("Test log") pour vérifier que le typage fonctionne.

### 4 - Compilation

- Vérifiez que votre configuration tsconfig.json inclut ce fichier de déclaration et compilez le projet.

DOCUMENTATION :

- [Declaration File](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html#what-do-type-declarations-look-like)
