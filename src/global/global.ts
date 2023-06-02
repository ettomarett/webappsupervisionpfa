import g from "./hostname.json"
import { auth_response } from "./jwt";
import chair from '../imgs/chair.png';
import laptop from '../imgs/laptop.png';
import printer from '../imgs/printer.png';

export const getImage = (type: string) => {
    if (type == 'PC') {
        return laptop;
    }
    if (type == 'CHAIR') {
        return chair;
    }
    return printer;
};

export function getHostName() : String{
    return g.hostname;
}

export class Session extends Map<string,any> {
    set(id : string, value : any) {
        if (typeof value === 'object') value = JSON.stringify(value);
        sessionStorage.setItem(id, value);
        return this;
    }

    get(id : string) {
        const value = sessionStorage.getItem(id);
        if(value != null){
            return JSON.parse(value);
        }else{
            return null;
        }
    }
}

export async function Rest<T>(method : string,url : string,body : T,token : string,name : string){
    let init: Record<string, any> = {
        method: method,
        headers: {
            Authorization: 'Bearer ' + token,
            //mode: 'no-cors'
        },
    };
    if(body != ""){
        init.body = JSON.stringify(body);
    }
    if(method == "PUT" || method == "POST"){
        init.headers['Content-type'] = 'application/json; charset=UTF-8';
    }
    await fetch(getHostName() + url,init)
    .then(async (response) => {
        if (response.ok && name != "") {
            let result = (await response.json() as T);
            let session = new Session();
            session.set(name, result);
        } else {
            if (response.status === 400) {
                alert((await response.json()) as string);
            }
        }
    });
}
