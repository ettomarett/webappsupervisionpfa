import  { useState } from 'react';
import { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import AdminSidebar from '../AdminSideBar/AdminSideBar';
import { EquipmentResponse, equipment } from '../../global/equipment';
import { Rest, Session, getImage } from '../../global/global';
import { auth_response } from '../../global/jwt';
import { useNavigate } from 'react-router-dom';

export interface SearchProps {
    className?: string;
}

export const Search = () => {
    const [search,setSearch] = useState<string | number>(3);
    const [selected,setSelected] = useState("numser");
    const [eqs,setEqs] = useState<EquipmentResponse[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        let session = new Session();
        if(session.get("auth") != null){
            let token = (session.get("auth") as auth_response).token;
            Rest("GET","/admin/get-equipements",[],token,"equipements");
            if(session.get("equipements") != null){
                setEqs(session.get("equipements")!);
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
            <div className="input-group mb-3" style={{position:'absolute',left:'500px',top:'100px',width:'500px'}}>
              <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Attributes</button>
              <ul className="dropdown-menu">
                <button onClick={e => setSelected(e.currentTarget.value)} value={"numser"} className="dropdown-item">NUMSER</button>
                <button onClick={e => setSelected(e.currentTarget.value)} value={"type"} className="dropdown-item">Type</button>
                <button onClick={e => setSelected(e.currentTarget.value)} value={"marque"} className="dropdown-item">Brand</button>
                <button onClick={e => setSelected(e.currentTarget.value)} value={"etat"} className="dropdown-item">State</button>
                <button onClick={e => setSelected(e.currentTarget.value)} value={"dateachat"} className="dropdown-item">Purchase date</button>
                <button onClick={e => setSelected(e.currentTarget.value)} value={"user_id"} className="dropdown-item">Employee ID</button>
                <button onClick={e => setSelected(e.currentTarget.value)} value={"salle"} className="dropdown-item">Office</button>
                <button onClick={e => setSelected(e.currentTarget.value)} value={"etage"} className="dropdown-item">Floor</button>

              </ul>
              <input value={search} type="text" className="form-control" aria-label="Text input with dropdown button" onChange={e => setSearch(e.currentTarget.value)}/>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4" style={{position:'absolute',left:'5%',top:'150px',zIndex:-1}}>
                {eqs.sort().filter(e => (search == "" ? true : eval('e.'+selected) == search )).map(e => <div className="col">
                    <div className="card h-100">
                      <img src={getImage(e.type)} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">{e.type}</h5>
                        <p className="card-text"> NUMSER: {e.numser}</p>
                        <p className="card-text"> Brand: {e.marque}</p>
                        <p className="card-text"> State: {e.etat}</p>
                        <p className="card-text"> Purchase date: {e.dateachat.split("T")[0]}</p>
                        <p className="card-text"> Employee ID : {e.user_id}</p>
                        <p className="card-text"> Office : {e.salle}</p>
                        <p className="card-text"> Floor : {e.etage}</p>
                      </div>
                    </div>
                </div>)}
            </div>
</div>
    );
};
