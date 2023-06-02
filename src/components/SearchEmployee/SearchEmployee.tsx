import { useState } from 'react';
import { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import AdminSidebar from '../AdminSideBar/AdminSideBar';
import { Rest, Session } from '../../global/global';
import { auth_response } from '../../global/jwt';
import { useNavigate } from 'react-router-dom';
import { EmployeeResponse } from '../../global/employee';
import empImg from '../../imgs/employee.png';

export const SearchEmployee = () => {
    const [search,setSearch] = useState<string | number>(3);
    const [selected,setSelected] = useState("id");
    const [eps,setEps] = useState<EmployeeResponse[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        let session = new Session();
        if(session.get("auth") != null){
            let token = (session.get("auth") as auth_response).token;
            Rest("GET","/admin/get-employees",[],token,"employees");
            if(session.get("employees") != null){
                setEps(session.get("employees")!);
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
                <button onClick={e => setSelected(e.currentTarget.value)} value={"id"} className="dropdown-item">ID</button>
                <button onClick={e => setSelected(e.currentTarget.value)} value={"prenom"} className="dropdown-item">First name</button>
                <button onClick={e => setSelected(e.currentTarget.value)} value={"nom"} className="dropdown-item">Last Name</button>
                <button onClick={e => setSelected(e.currentTarget.value)} value={"departement"} className="dropdown-item">Departement</button>
                <button onClick={e => setSelected(e.currentTarget.value)} value={"salle"} className="dropdown-item">Office</button>
                <button onClick={e => setSelected(e.currentTarget.value)} value={"etage"} className="dropdown-item">Floor</button>
              </ul>
              <input value={search} type="text" className="form-control" aria-label="Text input with dropdown button" onChange={e => setSearch(e.currentTarget.value)}/>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4" style={{position:'absolute',left:'5%',top:'150px',zIndex:-1}}>
                {eps.sort().filter(e => (search == "" ? true : eval('e.'+selected) == search) ).map(e => <div className="col">
                    <div className="card h-100">
                      <img src={empImg} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">Employee </h5>
                        <p className="card-text"> ID: {e.id}</p>
                        <p className="card-text"> First name: {e.prenom}</p>
                        <p className="card-text"> Last name: {e.nom}</p>
                        <p className="card-text"> Departement : {e.departement}</p>
                        <p className="card-text"> Office : {e.salle}</p>
                        <p className="card-text"> Floor : {e.etage}</p>
                      </div>
                    </div>
                </div>)}
            </div>
</div>
    );
};
