export type EmployeeResponse = {
    id: number;
    prenom: string;
    nom: string;
    departement: string;
    etage: number;
    salle: number;
};

export type RegisterRequest = {
    email: string;
    prenom: string;
    nom: string;
    departement: string;
    password: string;
};