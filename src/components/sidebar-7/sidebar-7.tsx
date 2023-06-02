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

export interface Sidebar7Props {
    className?: string;
}

export const Sidebar7 = ({ className }: Sidebar7Props) => {
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
                                Send Maintenance Request
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link ">
                                <svg className="bi pe-none me-2" width="16" height="60">
                                    <use xlinkHref="#table"></use>
                                </svg>
                                View Requests History
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
                                src="https://media.licdn.com/dms/image/C5603AQHvFZn8oxfU8w/profile-displayphoto-shrink_800_800/0/1517880399749?e=2147483647&v=beta&t=mWKqdoNIko4GMPwyKRQJ8yQ2eOBQ_bFjr1PZV9EmOXg"
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

            <div className="Floorimage-container">
                <img src="https://i.ibb.co/jz8NrqP/11.png" className="floorplan1" />
            </div>

            {/* first modal start */}
            <div className="office01">
                <div>
                    <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                        ref={myModalRef}
                        data-bs-backdrop="false"
                    >
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title text-white" id="exampleModalLabel">
                                        Office 02 equipment inventory.
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <div
                                        className="d-flex justify-content-between"
                                        style={{ margin: '0 -10px' }}
                                    >
                                        <div
                                            className="card"
                                            style={{ width: '20rem', margin: '0 10px' }}
                                        >
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
                                        <div
                                            className="card"
                                            style={{ width: '20rem', margin: '0 10px' }}
                                        >
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
                                        <div
                                            className="card"
                                            style={{ width: '20rem', margin: '0 10px' }}
                                        >
                                            <img
                                                src="https://i.ibb.co/SX5rG2x/printerx.png"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <h6 className="card-title">Printer</h6>

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
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* second modal */}
                <div className="office02">
                    <button
                        type="button"
                        className={classNames('btn', 'btn-omar', 'officeunique')}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                    >
                        Office 02
                    </button>

                    <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                        ref={myModalRef}
                        data-bs-backdrop="false"
                    >
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">
                                        Office 02 equipment inventory.
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <div
                                        className="d-flex justify-content-between"
                                        style={{ margin: '0 -10px' }}
                                    >
                                        <div
                                            className="card"
                                            style={{ width: '20rem', margin: '0 10px' }}
                                        >
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
                                        <div
                                            className="card"
                                            style={{ width: '20rem', margin: '0 10px' }}
                                        >
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
                                        <div
                                            className="card"
                                            style={{ width: '20rem', margin: '0 10px' }}
                                        >
                                            <img
                                                src="https://i.ibb.co/SX5rG2x/printerx.png"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <h6 className="card-title">Printer</h6>

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
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* second modal */}

                {/* second modal */}
                <div className="office03">
                    <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                        ref={myModalRef}
                        data-bs-backdrop="false"
                    >
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">
                                        Office 03 equipment inventory.
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <div
                                        className="d-flex justify-content-between"
                                        style={{ margin: '0 -10px' }}
                                    >
                                        <div
                                            className="card"
                                            style={{ width: '20rem', margin: '0 10px' }}
                                        >
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
                                        <div
                                            className="card"
                                            style={{ width: '20rem', margin: '0 10px' }}
                                        >
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
                                        <div
                                            className="card"
                                            style={{ width: '20rem', margin: '0 10px' }}
                                        >
                                            <img
                                                src="https://i.ibb.co/SX5rG2x/printerx.png"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <h6 className="card-title">Printer</h6>

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
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* second modal */}

                {/* second modal */}
                <div className="office04">
                    <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                        ref={myModalRef}
                        data-bs-backdrop="false"
                    >
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">
                                        Office 04 equipment inventory.
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <div
                                        className="d-flex justify-content-between"
                                        style={{ margin: '0 -10px' }}
                                    >
                                        <div
                                            className="card"
                                            style={{ width: '20rem', margin: '0 10px' }}
                                        >
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
                                        <div
                                            className="card"
                                            style={{ width: '20rem', margin: '0 10px' }}
                                        >
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
                                        <div
                                            className="card"
                                            style={{ width: '20rem', margin: '0 10px' }}
                                        >
                                            <img
                                                src="https://i.ibb.co/SX5rG2x/printerx.png"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <h6 className="card-title">Printer</h6>

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
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* second modal */}
            </div>
        </div>

        //end of JSX code

        //another component

        //end of component 2
    );
};
