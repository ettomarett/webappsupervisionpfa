import { useEffect, useState } from "react";
import EmployeeSideBar from "../EmployeeSideBar/EmployeeSideBar";
import "bootstrap/dist/css/bootstrap.min.css"
import { Rest, Session } from "../../global/global";
import { DemandedRequest } from "../../global/request";
import { auth_response } from "../../global/jwt";
import { useNavigate } from "react-router-dom";


export function SendRequest(){

    const [numser,setNumser] = useState(0);
    const [comment,setComment] = useState("");
    const navigate = useNavigate();

    return(
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
        <div style={{position:'absolute',top:"20%",left:"30%"}}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">numser</label>
              <input type="number" className="form-control" id="exampleFormControlInput1" 
              placeholder="0"
              value={numser}
              onChange={e => setNumser(Number.parseInt(e.currentTarget.value))}/>
            </div>
            <div style={{width:"500px"}}>
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Comment</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows={10}
              value={comment}
              onChange={e => setComment(e.currentTarget.value)}
              />
            </div>
            <br/>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button id="send-request-btn" className="btn btn-success" type="button"
              onClick={e => {
                let session = new Session();
                if(session.get("auth") != null){
                  let token = (session.get("auth")! as auth_response).token;
                  Rest<DemandedRequest>("POST","/employee/add-request",{numser:numser,commentaire:comment},token,"");
                }else{
                    navigate("*");
                }
              }}
              >Send request</button>
            </div>
        </div>
        </div>
    );
}