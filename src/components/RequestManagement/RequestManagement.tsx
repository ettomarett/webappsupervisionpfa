import { useState } from 'react';
import { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import AdminSidebar from '../AdminSideBar/AdminSideBar';
import { Rest, Session, getImage } from '../../global/global';
import { auth_response } from '../../global/jwt';
import { useNavigate } from 'react-router-dom';
import { RequestUpdate, SentRequest } from '../../global/request';

export const RequestManagement = () => {
    const [rqs,setRqs] = useState<SentRequest[]>([]);
    const navigate = useNavigate();
    let session = new Session();

    const handleAccept = (e : React.MouseEvent<HTMLInputElement,MouseEvent>,uprq : RequestUpdate) => {
      if(e.currentTarget.checked){
        let spec = e.currentTarget.id.split('_')[1];
        (document.getElementById("btnradio2_"+spec) as HTMLInputElement).disabled = true;
        (document.getElementById("btnradio3_"+spec) as HTMLInputElement).disabled = true;
        if(sessionStorage.getItem("auth") != null){
          let token = (session.get("auth") as auth_response).token;
          Rest("PUT","/admin/send-response",uprq,token,"");
        }else{
          navigate("");
        }
      }
    }

    const handleRefuse = (e : React.MouseEvent<HTMLInputElement,MouseEvent>,uprq : RequestUpdate) => {
      if(e.currentTarget.checked){
        let spec = e.currentTarget.id.split('_')[1];
        (document.getElementById("btnradio1_"+spec) as HTMLInputElement).disabled = true;
        (document.getElementById("btnradio3_"+spec) as HTMLInputElement).disabled = true;
        if(sessionStorage.getItem("auth") != null){
          let token = (session.get("auth") as auth_response).token;
          Rest("PUT","/admin/send-response",uprq,token,"");
        }else{
          navigate("");
        }
      }
    }

    useEffect(() => {
        let session = new Session();
        if(session.get("auth") != null){
            let token = (session.get("auth") as auth_response).token;
            Rest("GET","/admin/get-requests","",token,"requests");
            if(session.get("requests") != null){
              setRqs(session.get("requests"));
            }
        }else{
            navigate("");
        }
    },[]);

    return (
        <div>
            <div>
  <nav className="navbar bg-dark fixed-top " data-bs-theme="dark" >
    <div className="container-fluid justify-content-center text-center">
      <a className="navbar-brand text-white" href="#">
      <img src="https://i.ibb.co/WW9fRBM/eyesupervision.png" alt="Logo" width="55" height="36" className="logox d-inline-block align-text-top"/>
        EyeON Supervision</a>
    </div>
  </nav>
</div>

<AdminSidebar/>

    <div className="card mb-3" style={{position:'absolute',top:'10%',left:'5%',zIndex:-1}}>
      {rqs.map(r => 
      <div>
        <div className="row g-0">
        <div className="col-md-4">
          <img src={getImage(r.type)} className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Mantainance Request</h5>
            <p className="card-text">Comment : {r.commentaire}</p>
            <p className="card-text">Employee ID: {r.user_id}</p>
            <p className="card-text">Equipment ID: {r.numser}</p>
            <p className="card-text">State: {r.etat}</p>
            <p className="card-text">Creation date: {r.creationDate}</p>
            <p className="card-text">Response date: {r.responseDate}</p>
            {r.resultat != "PENDING" ? 
            <p className="card-text">Resultat: {r.resultat}</p>
            :
                <div className="btn-group" role="group" aria-label="Basic radio toggle button group" >
                  <input type="radio" className="btn-check" name={"btnradios"+r.numreq} id={"btnradio1_"+r.numreq} autoComplete="off" 
                  onClick={e => handleAccept(e,{numreq:r.numreq,etat:r.etat,resultat:"ACCEPTED"})}/>
                  <label className="btn btn-outline-success" id={"label1_"+r.numreq} htmlFor={"btnradio1_"+r.numreq}>Accept</label>

                  <input type="radio" className="btn-check" name={"btnradios"+r.numreq} id={"btnradio2_"+r.numreq} autoComplete="off" checked={r.resultat == "PENDING"}/>
                  <label className="btn btn-outline-warning" id={"label2_"+r.numreq} htmlFor={"btnradio2_"+r.numreq}>Pending</label>

                  <input type="radio" className="btn-check" name={"btnradios"+r.numreq} id={"btnradio3_"+r.numreq} autoComplete="off" 
                  onClick={e => handleRefuse(e,{numreq:r.numreq,etat:r.etat,resultat:"REFUSED"})}/>
                  <label className="btn btn-outline-danger" id={"label3_"+r.numreq} htmlFor={"btnradio3_"+r.numreq}>Refuse</label>
                </div>
            }
          </div>
        </div>
      </div>
      <hr/>
      </div>
      )}
    </div>
            
</div>
    );
};
