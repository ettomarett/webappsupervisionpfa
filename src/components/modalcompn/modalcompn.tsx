import styles from './modalcompn.module.scss';
import classNames from 'classnames';
import { Popover } from 'bootstrap';
import { useEffect, useRef } from 'react';
import * as bootstrap from 'bootstrap';
import '../../bootstrap/bootstrap.min.css';

export interface ModalcompnProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-modalcompns-and-templates
 */
export const Modalcompn = ({ className }: ModalcompnProps) => {
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
    script1.onload = () => {
        const script2 = document.createElement('script');
        script2.src = 'https://use.fontawesome.com/releases/v5.3.1/js/all.js';
        script2.defer = true;
        document.head.appendChild(script2);

        // Enable popovers after both scripts have loaded
        const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
        const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => {
            return new Popover(popoverTriggerEl, {
                sanitize: false,
            });
        });
    };

    // Cleanup function to remove the scripts from the DOM when the component unmounts
    return () => {
        document.head.removeChild(script1);
    };
}, []);
  return (
    <div >
        <a href="#" className="btn btn-primary">click me</a>

  <button type="button" className=" btn btn-omar" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Office 01
  </button>

  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" ref={myModalRef} data-bs-backdrop="false">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title text-white" id="exampleModalLabel">Office 01 equipment inventory.</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
       
          {/* cards code here */}
          
                        {/* card */}

                        <div
                            className="d-flex justify-content-between"
                            style={{ margin: '0 -10px' }}
                        >
                            <div className="card" style={{ width: '20rem', margin: '0 10px' }}>
                                <img
                                    src="https://i.ibb.co/nzTB8xc/laptopx.png"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h6 className="card-title">Laptop</h6>
                                    
                                    <div>
                                        <ul>
                                            <li>ID: 0001</li>
                                            <li>Brand: Apple</li>
                                            <li>State: Good</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card" style={{ width: '20rem', margin: '0 10px' }}>
                                <img
                                    src="https://i.ibb.co/85PKCXm/chairx.png"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h6 className="card-title">Chair</h6>
                                    
                                    <div>
                                        <ul>
                                            <li>ID: 0002</li>
                                            <li>Brand: MARKUS</li>
                                            <li>State: Bad</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card" style={{ width: '20rem', margin: '0 10px' }}>
                                <img
                                    src="https://i.ibb.co/SX5rG2x/printerx.png"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h6 className="card-title">Print</h6>
                                    
                                    <div>
                                        <ul>
                                            <li>ID: 0003</li>
                                            <li>Brand: Dell</li>
                                            <li>State: Decent</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

          {/* cards code here */}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         
        </div>
      </div>
    </div>
  </div>
</div>

  );
};