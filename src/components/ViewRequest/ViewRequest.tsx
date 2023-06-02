import { useState } from 'react';
import { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Rest, Session, getImage } from '../../global/global';
import { auth_response } from '../../global/jwt';
import { useNavigate } from 'react-router-dom';
import { RequestUpdate, SentRequest } from '../../global/request';
import EmployeeSideBar from '../EmployeeSideBar/EmployeeSideBar';

export const ViewRequest = () => {
    const [rqs,setRqs] = useState<SentRequest[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        let session = new Session();
        if(session.get("auth") != null){
            let token = (session.get("auth") as auth_response).token;
            Rest("GET","/employee/get-requests","",token,"requests");
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

<EmployeeSideBar/>

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
            <p className="card-text">Admin ID: {r.admin_id}</p>
            <p className="card-text">Equipment ID: {r.numser}</p>
            <p className="card-text">State: {r.etat}</p>
            <p className="card-text">Creation date: {r.creationDate}</p>
            <p className="card-text">Response date: {r.responseDate}</p>
            <p className="card-text">Resultat: {r.resultat}</p>
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
