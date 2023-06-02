export type equipment ={
    numser : number;
    type : string;
    etat : string;
    marque : string;
    dateachat : string;
    user_id : number;
}

export type EquipmentResponse = {
    numser: number;
    type: string;
    etat: string;
    marque: string;
    dateachat: string;
    etage : number;
    salle : number;
    user_id: number;
}

export type EquipmentRequest = {
    type: string;
    etat: string;
    marque: string;
    dateachat: string;
    user_id: number;
};