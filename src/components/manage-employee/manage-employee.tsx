import { useState } from 'react';
import classNames from 'classnames';
import data from './dataEquip.json';
import '../../bootstrap/bootstrap.min.css';

export interface ManageEmployeeProps {
  className?: string;
}

export const ManageEmployee = ({ className }: ManageEmployeeProps) => {
  // State variables to store input values
  const [selectedVariable, setSelectedVariable] = useState('');
  const [employeeID, setemployeeID] = useState('');
  const [newData, setNewData] = useState('');

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Find the index of the equipment with the given ID in the JSON data
    const equipmentIndex = data.findIndex((equip) => equip.IDequipment === parseInt(employeeID));

    if (equipmentIndex !== -1) {
      // Create a copy of the JSON data array
      const updatedData = [...data];

      // Update the selected variable with the new data
      switch (selectedVariable) {
        case 'Brand':
          updatedData[equipmentIndex].Brand = newData;
          break;
        case 'Type':
          updatedData[equipmentIndex].Type = newData;
          break;
        case 'PurchaseDate':
          updatedData[equipmentIndex].PurchaseDate = newData;
          break;
        case 'EquipementState':
          updatedData[equipmentIndex].EquipementState = newData;
          break;
        default:
          break;
      }

      // Update the JSON file (you can use any method to update the JSON file, such as sending a request to an API or modifying it locally)

      // Reset input values after submission
      setSelectedVariable('');
      setemployeeID('');
      setNewData('');
    }
  };

  return (
    <div className={classNames(className)}>
 <div className="row">
  <div className="col">
    <div>
      {/* First Form */}
      <form onSubmit={handleSubmit} className="m-4">
        <div className="mb-3">
          <label htmlFor="employeeID" className="form-label">
            <h5>Modify Employee Details</h5>
            Employee ID:
          </label>
          <input
            type="text"
            id="employeeID"
            className="form-control"
            value={employeeID}
            onChange={(e) => setemployeeID(e.target.value)}
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
            <option value="Floor">Floor</option>
            <option value="Office">Office</option>
            <option value="Role">Role</option>
            <option value="Score">Score</option>
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
          Modify
        </button>
      </form>
    </div>
  </div>
  <div className="col">
    <div>
      {/* Second Form */}
      <form onSubmit={handleSubmit} className="m-4">
        <div className="mb-3">
          <label htmlFor="employeeID" className="form-label">
            <h5>Assign Equipment to Employee</h5>
            Employee ID:
          </label>
          <input
            type="text"
            id="employeeID"
            className="form-control"
            value={employeeID}
            onChange={(e) => setemployeeID(e.target.value)}
          />
        </div>
        
       
        <button type="submit" className="btn btn-primary">
          Assign
        </button>
      </form>
    </div>
  </div>
  <div className="col">
    <div>
      {/* Third Form */}
      <form onSubmit={handleSubmit} className="m-4">
        <div className="mb-3">
          <label htmlFor="employeeID" className="form-label">
            <h5>Remove Equipment From Inventory</h5>
            Employee ID:
          </label>
          <input
            type="text"
            id="employeeID"
            className="form-control"
            value={employeeID}
            onChange={(e) => setemployeeID(e.target.value)}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Remove
        </button>
      </form>
    </div>
  </div>
</div>

    </div>
  );
};
