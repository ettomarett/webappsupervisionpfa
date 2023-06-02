export type SentRequest = {
    numreq : number;
    commentaire : string;
    numser : number;
    etat : string;
    creationDate : string;
    responseDate : string;
    user_id : number;
    admin_id : number;
    resultat : string;
    type : string;
}

export type RequestUpdate = {
    numreq : number;
    etat : string;
    resultat : string;
}

export type DemandedRequest = {
    commentaire: string;
    numser: number;
}