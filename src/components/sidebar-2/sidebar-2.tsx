/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-sidebar-2s-and-templates
 */
import React, { useState } from 'react';

import styles from './sidebar-2.module.scss';
import '../../bootstrap/bootstrap.min.css';
import { useEffect, useRef } from 'react';
import * as bootstrap from 'bootstrap';
import { Popover } from 'bootstrap';
import { Modalcompn } from '../modalcompn/modalcompn';

import classNames from 'classnames';
import '../../index.css'

import data from './dataEquip.json';

export interface Sidebar2Props {
    className?: string;
}

export const Sidebar2 = ({ className }: Sidebar2Props) => {
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
    const [searchTerm, setSearchTerm] = useState('');
    return (
        //here we put JSX script. beginning of JSX code
        <div>
            <div>
                <nav className="navbar bg-dark fixed-top " data-bs-theme="dark">
                    <div className="container-fluid justify-content-center text-center">
                        <a className="navbar-brand text-white" href="#">
                            <img
                                src="https://i.ibb.co/WW9fRBM/eyesupervision.png"
                                alt="Logo"
                                width="55"
                                height="36"
                                className="logox d-inline-block align-text-top"
                            />
                            EyeON Supervision
                        </a>
                    </div>
                </nav>
            </div>
            <div
                className="offcanvas offcanvas-start show"
                tabIndex={-1}
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
            >
                <div
                    className="offcanvas-body d-flex flex-column text-bg-dark flex-shrink-0 p-3"
                    style={{ width: '280px' }}
                >
                    <a
                        href="/"
                        className="d-flex align-items-center mb-md-0 me-md-auto text-decoration-none mb-3 text-white"
                    >
                        <svg className="bi pe-none me-2" width="40" height="32">
                            <use xlinkHref="#bootstrap"></use>
                        </svg>
                        <span className="fs-4">Dashboard</span>
                    </a>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <a href="" className="nav-link " aria-current="page">
                                <svg className="bi pe-none me-2" width="16" height="60">
                                    <use xlinkHref="#home"></use>
                                </svg>
                                View The Map
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link ">
                                <svg className="bi pe-none me-2" width="16" height="60">
                                    <use xlinkHref="#speedometer2"></use>
                                </svg>
                                Equipment management
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link ">
                                <svg className="bi pe-none me-2" width="16" height="60">
                                    <use xlinkHref="#table"></use>
                                </svg>
                                Search for equipment
                            </a>
                        </li>

                        <li>
                            <a href="#" className="nav-link ">
                                <svg className="bi pe-none me-2" width="16" height="60">
                                    <use xlinkHref="#people-circle"></use>
                                </svg>
                                Request management
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link ">
                                <svg className="bi pe-none me-2" width="16" height="60">
                                    <use xlinkHref="#people-circle"></use>
                                </svg>
                                Employee management
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link ">
                                <svg className="bi pe-none me-2" width="16" height="60">
                                    <use xlinkHref="#people-circle"></use>
                                </svg>
                                Employee search
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown">
                        <a
                            href="#"
                            className="d-flex align-items-center text-decoration-none dropdown-toggle text-white"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src="https://github.com/mdo.png"
                                alt=""
                                width="32"
                                height="32"
                                className="rounded-circle me-2"
                            />
                            <strong>Jhon Smith</strong>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                            <li>
                                <a className="dropdown-item" href="#">
                                    New project...
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Profile
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="search-container">
    <div className="search-bar">
        <input
            type="text"
            placeholder="Search here..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className={classNames('search-input','form-control' , 'searchsolution')}
        />
    </div>
    <div className={classNames('search-result', 'searchbar')}>
        <div className="card-container">
            {data
                .filter((val) => {
                    if (searchTerm === '') {
                      return val;
                    } else if (
                      val.Brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      val.Type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      val.PurchaseDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      val.EquipementState.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      val.IDequipment.toString().toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  
                .map((val) => {
                    return (
                        <div key={val.IDequipment} className="card2">
                            <img
                                src={val.EquipImg}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h6 className="card-title">{val.Brand}</h6>
                                <ul>
                                    <li>ID: {val.IDequipment}</li>
                                    <li>Type: {val.Type}</li>
                                    <li>Purchase Date: {val.PurchaseDate}</li>
                                    <li>State: {val.EquipementState}</li>
                                </ul>
                            </div>
                        </div>
                    );
                })}
        </div>
    </div>
</div>


            {/* first modal start */}
            {/* modal start */}
        </div>

        //end of JSX code

        //another component

        //end of component 2
    );
};
