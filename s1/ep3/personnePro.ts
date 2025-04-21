// On crée une interface Employe qui définit la structure d'un employé
// C'est comme une fiche pour un employé avec son nom et son poste
interface Employe {
    nom: string;        // Le nom de l'employé
    poste: string;      // Le poste de l'employé
}

// On crée une interface Client qui définit la structure d'un client
// C'est comme une fiche pour un client avec son nom et son entreprise
interface Client {
    nom: string;            // Le nom du client
    entreprise: string;     // Le nom de l'entreprise du client
}

// On crée un type PersonnePro qui peut être soit un Employe soit un Client
// C'est comme dire "une personne pro peut être soit un employé, soit un client"
type PersonnePro = Employe | Client;

// Cette fonction affiche les informations professionnelles d'une personne
// Elle vérifie si c'est un employé ou un client et affiche le message approprié
function afficherInfoProfessionnelle(personne: PersonnePro): void {
    if ('poste' in personne) {
        // Si la personne a une propriété 'poste', c'est un employé
        console.log(`Employé: ${personne.nom} travaille comme ${personne.poste}.`);
    } else if ('entreprise' in personne) {
        // Si la personne a une propriété 'entreprise', c'est un client
        console.log(`Client: ${personne.nom} est associé à l'entreprise ${personne.entreprise}.`);
    }
}

// On crée un employé
const employe1: Employe = {
    nom: "Jean",
    poste: "Développeur"
};

// On crée un client
const client1: Client = {
    nom: "Marie",
    entreprise: "TechCorp"
};

// On teste la fonction avec un employé et un client
afficherInfoProfessionnelle(employe1);
afficherInfoProfessionnelle(client1); 