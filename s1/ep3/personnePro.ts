interface Employe {
    nom: string;
    poste: string;
}

interface Client {
    nom: string;
    entreprise: string;
}

type PersonnePro = Employe | Client;

function afficherInfoProfessionnelle(personne: PersonnePro): void {
    if ('poste' in personne) {
        console.log(`Employé: ${personne.nom} travaille comme ${personne.poste}.`);
    } else if ('entreprise' in personne) {
        console.log(`Client: ${personne.nom} est associé à l'entreprise ${personne.entreprise}.`);
    }
}

const employe1: Employe = {
    nom: "Jean",
    poste: "Développeur"
};

const client1: Client = {
    nom: "Marie",
    entreprise: "TechCorp"
};

afficherInfoProfessionnelle(employe1);
afficherInfoProfessionnelle(client1); 