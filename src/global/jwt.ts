import { Session, getHostName } from "./global";

export interface auth_interface{
    email : string;
    password : string;
}

export interface auth_response{
    token : string;
    isadmin : boolean;
    etage : number;
    salle : number;
}

export const getJwtToken = async (auth : auth_interface) => {
    await fetch(getHostName() + '/auth/login', {
        method: 'POST',
        body: JSON.stringify(auth),
        headers: { 'Content-type': 'application/json; charset=UTF-8'},
    })
    .then(async (response) => {
        if(response.ok){
            let result = await response.json() as auth_response;
            let session = new Session();
            session.set("auth",result);
        }else{
            if(response.status === 400){
                alert(await response.json() as string);
            }else{
                alert("unauthorised access !");
            }
        }
    });
}
