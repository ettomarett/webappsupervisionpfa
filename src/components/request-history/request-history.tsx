import styles from './request-history.module.scss';
import classNames from 'classnames';

import '../../bootstrap/bootstrap.min.css';
import { useEffect, useRef } from 'react';
import * as bootstrap from 'bootstrap';
import { Popover } from 'bootstrap';
import { Modalcompn } from '../modalcompn/modalcompn';
import data from './dataEquip.json';
export interface RequestHistoryProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-request-historys-and-templates
 */
export const RequestHistory = ({ className }: RequestHistoryProps) => {

    const myModalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const myModal = myModalRef.current;
        if (myModal) {
            const modal = new bootstrap.Modal(myModal, {});
        }
    }, []);
    useEffect(() => {
        // Load first script
        const script1 = document.createElement('script');
        script1.src =
            'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js';
        script1.defer = true;
        document.head.appendChild(script1);

        // Load second script after the first script has finished loading

        // Enable popovers after both scripts have loaded
        const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
        const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => {
            return new Popover(popoverTriggerEl, {
                sanitize: false,
            });
        });

        // Cleanup function to remove the scripts from the DOM when the component unmounts
        return () => {
            document.head.removeChild(script1);
        };
    }, []);


    return <div className={classNames(styles.root, className)}>
    
    <div>

    <div style={{ padding: '80px 0 0 400px' }}>
  <h5 className="display-7" style={{ fontWeight: 'bold' }}>
    Requests History :
  </h5>
</div>
            <div className="requestdiv" style={{ padding: '30px 0 0 400px' , width: '90%' }}>
                <div className="container">
                  {/** card */}
                  <div className="card mb-3" >
    <div className="row g-0">
      <div className="col-md-4">
        <img
          src= "https://i.ibb.co/nzTB8xc/laptopx.png"
          className="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div className="col-md-8">
        <div className="card-body d-flex flex-column justify-content-between h-100">
          <div>
            <h5 className="card-title">Laptop</h5>
            <ul>
              <li><strong>ID:</strong> 102</li>
              <li><strong>Request Date:</strong> 3/6/2022</li>
              <li><strong>State:</strong> good</li>
              <li><strong>Comment:</strong> Employee's optional Comment about the maintenance.</li>

            </ul>
          </div>
          <div className="d-flex justify-content-end">
            <div style={{padding:"10px"}}><a>Status :</a></div>
            <button type="button" className="btn btn-success me-2">
              Accepted
            </button>
           
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="card mb-3" >
    <div className="row g-0">
      <div className="col-md-4">
        <img
          src= "https://i.ibb.co/SX5rG2x/printerx.png"
          className="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div className="col-md-8">
        <div className="card-body d-flex flex-column justify-content-between h-100">
          <div>
            <h5 className="card-title">Printer</h5>
            <ul>
              <li><strong>ID:</strong> 97</li>
              <li><strong>Request Date:</strong> 11/11/2022</li>
              <li><strong>State:</strong> decent</li>
              <li><strong>Comment:</strong> Employee's optional Comment about the maintenance.</li>

            </ul>
          </div>
          <div className="d-flex justify-content-end">
            <div style={{padding:"10px"}}><a>Status :</a></div>
            <button type="button" className="btn btn-danger me-2">
              Refused
            </button>
           
          </div>
        </div>
      </div>
    </div>
  </div>


                  {/** card end */}

                </div>
                  {data.map((val) => (
  <div className="card mb-3" key={val.IDequipment}>
    <div className="row g-0">
      <div className="col-md-4">
        <img
          src={val.EquipImg}
          className="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div className="col-md-8">
        <div className="card-body d-flex flex-column justify-content-between h-100">
          <div>
            <h5 className="card-title">{val.Type}</h5>
            <ul>
              <li><strong>ID:</strong> {val.IDequipment}</li>
              <li><strong>Request Date:</strong> {val.PurchaseDate}</li>
              <li><strong>State:</strong> {val.EquipementState}</li>
              <li><strong>Comment:</strong> {val.Comment}</li>

            </ul>
          </div>
          <div className="d-flex justify-content-end">
            <div style={{padding:"10px"}}><a>Status :</a></div>
            <button type="button" className="btn btn-warning me-2">
              Pending
            </button>
           
          </div>
        </div>
      </div>
    </div>
  </div>
))}



                  {/** card end */}

                </div>


    </div>
    </div>
    
    
    ;
};
