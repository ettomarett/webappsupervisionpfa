import styles from './maintenance-form.module.scss';
import classNames from 'classnames';
import '../../bootstrap/bootstrap.min.css';
import { FormEvent, useEffect, useRef ,useState} from 'react';
import * as bootstrap from 'bootstrap';
import { Popover } from 'bootstrap';

export interface MaintenanceFormProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-maintenance-forms-and-templates
 */

  

export const MaintenanceForm = ({ className }: MaintenanceFormProps) => {  
    
    const [equipmentId, setEquipmentId] = useState('');
const [maintenanceComment, setMaintenanceComment] = useState('');

const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  // Perform actions with the form data (e.g., send request)
  console.log('Equipment ID:', equipmentId);
  console.log('Maintenance Comment:', maintenanceComment);
  // Reset form fields
  setEquipmentId('');
  setMaintenanceComment('');
};


    return <div className={classNames(styles.root, className)}>
    
    <div>
   
   
    <form onSubmit={handleSubmit} className="row g-3">
      <div className="col-12">
        <label htmlFor="equipmentId" className="form-label">
          Equipment ID
        </label>
        <input
          type="text"
          className="form-control"
          id="equipmentId"
          value={equipmentId}
          onChange={(e) => setEquipmentId(e.target.value)}
          required
        />
      </div>
      <div className="col-12">
        <label htmlFor="maintenanceComment" className="form-label">
          Maintenance Comment
        </label>
        <textarea
          className="form-control"
          id="maintenanceComment"
          rows={5}
          value={maintenanceComment}
          onChange={(e) => setMaintenanceComment(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Send Request
        </button>
      </div>
    </form>


    </div>
    </div>;
};
