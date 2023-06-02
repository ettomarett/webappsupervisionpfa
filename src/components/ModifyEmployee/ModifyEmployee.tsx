import { useState } from 'react';
import classNames from 'classnames';
import '../../bootstrap/bootstrap.min.css';
import AdminSidebar from '../AdminSideBar/AdminSideBar';
import { Rest, Session } from '../../global/global';
import { auth_response } from '../../global/jwt';
import { useNavigate } from 'react-router-dom';
import { EquipmentRequest } from '../../global/equipment';

export const ModifyEmployee = () => {
  // State variables to store input values
  const [selectedVariable, setSelectedVariable] = useState('');
  const [ID, setID] = useState('');
  const [newData, setNewData] = useState('');

  const navigate = useNavigate();
  
  const handleModify = (e : React.FormEvent) => {
      e.preventDefault();

      let session = new Session();
      if(session.get("auth") != null){
          let token = (session.get("auth") as auth_response).token;
          let toSend = `{"${selectedVariable}" : 
          "${newData}"}`;
          Rest("PUT",`/admin/change-employee?id=${ID}`,JSON.parse(toSend),token,"");
      }else{
          navigate("");
      }

    }
  const handleAssign = (e : React.FormEvent) => {
    e.preventDefault();

    let session = new Session();
    if(session.get("auth") != null){
        let token = (session.get("auth") as auth_response).token;
        Rest("PUT",`/admin/assign-equipements?id=${ID}`,'',token,"");
    }else{
        navigate("");
    }
  }

  const handleRemove = (e : React.FormEvent) => {
    e.preventDefault();

    let session = new Session();
    if(session.get("auth") != null){
        let token = (session.get("auth") as auth_response).token;
        Rest("DELETE",`/admin/remove-employee?id=${ID}`,"",token,"");
    }else{
        navigate("");
    }
  }

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
 <div className="row" style={{position:'absolute',top:'10%',left:'10%',zIndex:-1}}>
  <div className="col">
    <div>
      {/* First Form */}
      <form onSubmit={handleModify} className="m-4">
        <div className="mb-3">
          <label htmlFor="employeeID" className="form-label">
            <h5>Modify Employee Details</h5>
            ID :
          </label>
          <input
            type="text"
            id="employeeID"
            className="form-control"
            value={ID}
            onChange={(e) => setID(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="selectedVariable" className="form-label">
            Attribute to Modify:
          </label>
          <select
            id="selectedVariable"
            className="form-select"
            value={selectedVariable}
            onChange={(e) => setSelectedVariable(e.target.value)}
          >
            <option value="">-- Select Attribute --</option>
            <option value="departement">Departement</option>
            <option value="etage">Floor</option>
            <option value="salle">Office</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="newData" className="form-label">
            New Data:
          </label>
          <input
            type="text"
            id="newData"
            className="form-control"
            value={newData}
            onChange={(e) => setNewData(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  </div>
  <div className="col">
    <div>
      {/* Second Form */}
      <form onSubmit={handleAssign} className="m-4">
        <div className="mb-3">
          <label htmlFor="employeeID" className="form-label">
            <h5>Assign equipement automatically to employee</h5>
            ID:
          </label>
          <input
            type="text"
            id="employeeID"
            className="form-control"
            value={ID}
            onChange={(e) => setID(e.target.value)}
          />
        </div>
       
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  </div>
  <div className="col">
    <div>
      {/* Third Form */}
      <form onSubmit={handleRemove} className="m-4">
        <div className="mb-3">
          <label htmlFor="employeeID" className="form-label">
            <h5>Remove Employee</h5>
            ID:
          </label>
          <input
            type="text"
            id="employeeID"
            className="form-control"
            value={ID}
            onChange={(e) => setID(e.target.value)}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  </div>
</div>

    </div>
  );
};
