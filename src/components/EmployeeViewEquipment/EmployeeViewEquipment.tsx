import classNames from 'classnames';
import '../../bootstrap/bootstrap.min.css';
import { useEffect, useRef, useState } from 'react';
import * as bootstrap from 'bootstrap';
import { Popover } from 'bootstrap';
import { Modalcompn } from '../modalcompn/modalcompn';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import './EmployeeViewEquipment.css';
import Office from '../office/office';
import { Rest, Session } from '../../global/global';
import { useNavigate } from 'react-router-dom';
import { auth_response } from '../../global/jwt';
import { EquipmentResponse, equipment } from '../../global/equipment';
import EmployeeSideBar from '../EmployeeSideBar/EmployeeSideBar';


export const EmployeeViewEquipment = () => {
    const myModalRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const [floor,setFloor] = useState(1);
    const [eqs,setEqs] = useState<EquipmentResponse[]>([]);

    const [salle,setSalle] = useState(1);
    const [etage,setEtage] = useState(1);

    useEffect(() => {
        const myModal = myModalRef.current;
        if (myModal) {
            const modal = new bootstrap.Modal(myModal, {});
        }
        let session = new Session();
        if(session.get("auth") != null){
            const response = (session.get("auth") as auth_response);
            const token = response.token;
            setEtage(response.etage);
            setSalle(response.salle);
            Rest("GET","/employee/get-equipements",[],token,"equipements");
            if(session.get("equipements") != null){
                setEqs(session.get("equipements")!);
            }
        }else{
            navigate("");
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

    return (
        
        //here we put JSX script. beginning of JSX code
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


            <img src="https://i.ibb.co/R7MvgQf/other-floors.png" className="floornext" />

            <div className="dr">
                <h2 className="exr">Explore Floors :</h2>

                <div className="dropdown">
                    <button
                        className={classNames(
                            'btn',
                            'btn-secondary',
                            'dropdown-toggle',
                            'floorchoose'
                        )}
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Choose floor
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                        <li onClick={e => setFloor(1)}>
                            <a className="dropdown-item" href="#">
                                Floor 1
                            </a>
                        </li>
                        <li onClick={e => setFloor(2)}>
                            <a className="dropdown-item" href="#">
                                Floor 2
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <EmployeeSideBar/>

            <div className="Floorimage-container">
                <img src="https://i.ibb.co/jz8NrqP/11.png" className="floorplan1" />
            </div>

            {/* first modal start */}
            <div>
            {floor != etage ? <></> : 
            <Office n={salle} eq={eqs
                .map((e : EquipmentResponse) : equipment => {return {
                    numser : e.numser,etat : e.etat,type : e.type,marque : e.marque,dateachat : e.dateachat,user_id : e.user_id
                }})}/>
            }
                {/* second modal */}
            </div>
           
            {/* modal start */}
        </div>

        //end of JSX code

        //another component

        //end of component 2
    );
};
