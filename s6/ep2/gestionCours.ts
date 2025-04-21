enum NiveauCours {
    Debutant,
    Intermediaire,
    Avance
}

interface Etudiant {
    id: number;
    nom: string;
    niveau: string;
}

interface Cours {
    code: string;
    titre: string;
    niveau: NiveauCours;
}

interface Professeur {
    id: number;
    nom: string;
    matiere: string;
}

class GestionCours {
    private etudiants: Etudiant[] = [];
    private cours: Cours[] = [];
    private professeurs: Professeur[] = [];
    private inscriptions: Map<number, string[]> = new Map(); // idEtudiant -> codesCours

    // Méthodes pour les étudiants
    ajouterEtudiant(etudiant: Etudiant): void {
        this.etudiants.push(etudiant);
        this.inscriptions.set(etudiant.id, []);
    }

    // Méthodes pour les cours
    ajouterCours(cours: Cours): void {
        this.cours.push(cours);
    }

    // Méthodes pour les professeurs
    ajouterProfesseur(professeur: Professeur): void {
        this.professeurs.push(professeur);
    }

    // Inscription d'un étudiant à un cours
    inscrireEtudiant(idEtudiant: number, codeCours: string): boolean {
        const etudiant = this.etudiants.find(e => e.id === idEtudiant);
        const cours = this.cours.find(c => c.code === codeCours);

        if (!etudiant || !cours) {
            return false;
        }

        const inscriptions = this.inscriptions.get(idEtudiant) || [];
        if (!inscriptions.includes(codeCours)) {
            inscriptions.push(codeCours);
            this.inscriptions.set(idEtudiant, inscriptions);
            return true;
        }
        return false;
    }

    // Obtenir les cours d'un étudiant
    getCoursEtudiant(idEtudiant: number): Cours[] {
        const codesCours = this.inscriptions.get(idEtudiant) || [];
        return this.cours.filter(c => codesCours.includes(c.code));
    }

    // Obtenir les étudiants d'un cours
    getEtudiantsCours(codeCours: string): Etudiant[] {
        const etudiants: Etudiant[] = [];
        this.inscriptions.forEach((codes, id) => {
            if (codes.includes(codeCours)) {
                const etudiant = this.etudiants.find(e => e.id === id);
                if (etudiant) {
                    etudiants.push(etudiant);
                }
            }
        });
        return etudiants;
    }
}

// Test du système
const gestion = new GestionCours();

// Ajout d'étudiants
gestion.ajouterEtudiant({ id: 1, nom: "Alice", niveau: "Licence" });
gestion.ajouterEtudiant({ id: 2, nom: "Bob", niveau: "Master" });

// Ajout de cours
gestion.ajouterCours({ code: "TS101", titre: "TypeScript Débutant", niveau: NiveauCours.Debutant });
gestion.ajouterCours({ code: "TS201", titre: "TypeScript Avancé", niveau: NiveauCours.Avance });

// Ajout de professeurs
gestion.ajouterProfesseur({ id: 1, nom: "Prof. Smith", matiere: "TypeScript" });

// Inscriptions
gestion.inscrireEtudiant(1, "TS101");
gestion.inscrireEtudiant(2, "TS201");

// Affichage des résultats
console.log("Cours d'Alice:", gestion.getCoursEtudiant(1));
console.log("Étudiants du cours TS101:", gestion.getEtudiantsCours("TS101")); 