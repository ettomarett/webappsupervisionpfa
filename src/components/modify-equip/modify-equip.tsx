import { useState } from 'react';
import classNames from 'classnames';
import '../../bootstrap/bootstrap.min.css';
import AdminSidebar from '../AdminSideBar/AdminSideBar';
import { Rest, Session } from '../../global/global';
import { auth_response } from '../../global/jwt';
import { useNavigate } from 'react-router-dom';
import { EquipmentRequest } from '../../global/equipment';

export interface ModifyEquipProps {
  className?: string;
}

export const ModifyEquip = ({ className }: ModifyEquipProps) => {
  // State variables to store input values
  const [selectedVariable, setSelectedVariable] = useState('');
  const [equipmentID, setEquipmentID] = useState('');
  const [newData, setNewData] = useState('');

  const [newEqu,setNewEqu] = useState<EquipmentRequest>({type:"PC",etat:"FULLY_FUNCTIONING",marque:"HP",dateachat:"2022-01-01",user_id:0});

  const navigate = useNavigate();
  
  const handleModify = (e : React.FormEvent) => {
      e.preventDefault();

      let session = new Session();
      if(session.get("auth") != null){
          let token = (session.get("auth") as auth_response).token;
          let toSend = `{"${selectedVariable}" :
           ${selectedVariable == "user_id" ? newData : '"'+newData+'"'}}`;
          Rest("PUT",`/admin/change-equipement?numser=${equipmentID}`,JSON.parse(toSend),token,"");
      }else{
          navigate("");
      }
    }
  const handleCreate = (e : React.FormEvent) => {
    e.preventDefault();

    let session = new Session();
    if(session.get("auth") != null){
        let token = (session.get("auth") as auth_response).token;
        Rest("POST","/admin/add-equipement",newEqu,token,"");
    }else{
        navigate("");
    }
  }

  const handleRemove = (e : React.FormEvent) => {
    e.preventDefault();

    let session = new Session();
    if(session.get("auth") != null){
        let token = (session.get("auth") as auth_response).token;
        Rest("DELETE",`/admin/remove-equipement?numser=${equipmentID}`,"",token,"");
    }else{
        navigate("");
    }
  }

  return (
    <div className={classNames(className)}>
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
          <label htmlFor="equipmentID" className="form-label">
            <h5>Modify Equipment Details</h5>
            Equipment ID:
          </label>
          <input
            type="text"
            id="equipmentID"
            className="form-control"
            value={equipmentID}
            onChange={(e) => setEquipmentID(e.target.value)}
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
            <option value="marque">Brand</option>
            <option value="type">Type</option>
            <option value="dateachat">Purchase Date</option>
            <option value="etat">Equipment State</option>
            <option value="user_id">Employee ID</option>
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
            onChange={(e) => setNewData(e.currentTarget.value)}
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
      <form onSubmit={handleCreate} className="m-4">
        <div className="mb-3">
          <label htmlFor="equipmentID" className="form-label">
            <h5>Add New Equipment</h5>
            Equipment State:
          </label>
          <input
            type="text"
            id="equipmentID"
            className="form-control"
            value={newEqu.etat}
            onChange={(e) => setNewEqu(eq => ({...eq,...{etat:e.target.value}}))}
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">
            Type:
          </label>
          <input
            type="text"
            className="form-control"
            value={newEqu.type}
            onChange={(e) => setNewEqu(eq => ({...eq,...{type:e.target.value}}))}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newData" className="form-label">
            Brand:
          </label>
          <input
            type="text"
            id="newData"
            className="form-control"
            value={newEqu.marque}
            onChange={(e) => setNewEqu(eq => ({...eq,...{marque:e.target.value}}))}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newData" className="form-label">
            Purchase date:
          </label>
          <input
            type="text"
            id="newData"
            className="form-control"
            value={newEqu.dateachat.split("T")[0]}
            onChange={(e) => setNewEqu(eq => ({...eq,...{dateachat:e.target.value}}))}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newData" className="form-label">
            Owner ID:
          </label>
          <input
            type="text"
            id="newData"
            className="form-control"
            value={newEqu.user_id}
            onChange={(e) => setNewEqu(eq => ({...eq,...{user_id:Number.parseInt(e.target.value)}}))}
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
          <label htmlFor="equipmentID" className="form-label">
            <h5>Remove Equipment From Inventory</h5>
            Equipment ID:
          </label>
          <input
            type="text"
            id="equipmentID"
            className="form-control"
            value={equipmentID}
            onChange={(e) => setEquipmentID(e.target.value)}
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
