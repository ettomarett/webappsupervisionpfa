import styles from './top-off-canvass.module.scss';
import classNames from 'classnames';
import '../../bootstrap/bootstrap.min.css';
import { useEffect } from 'react';
import * as bootstrap from 'bootstrap';

export interface TopOffCanvassProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-top-off-canvasss-and-templates
 */

export const TopOffCanvass = ({ className }: TopOffCanvassProps) => {
    useEffect(() => {
        // Load first script
        const script0 = document.createElement('script');
        script0.src =
            'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js';
        script0.defer = true;
        document.head.appendChild(script0);

        // Load second script after the first script has finished loading
        script0.onload = () => {
            const script2 = document.createElement('script');
            script2.src = 'https://use.fontawesome.com/releases/v5.3.1/js/all.js';
            script2.defer = true;
            document.head.appendChild(script2);
        };

        // Cleanup function to remove the scripts from the DOM when the component unmounts
        return () => {
            document.head.removeChild(script0);
        };
    }, []);

    // additional function for popover
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(
        (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
    );
    // end of function for popover

    return (
        <div className={classNames(styles.root, className)}>
            <div />
            <div className="offcanz">
                <button
                    className="btn btn-primary rounded-circle"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasTop"
                    aria-controls="offcanvasTop"
                >
                    Toggle top offcanvas
                </button>

                <div
                    className="offcanvas offcanvas-top"
                    tabIndex={-1}
                    id="offcanvasTop"
                    aria-labelledby="offcanvasTopLabel"
                >
                    <div className="offcanvas-header">
                        <h6 className="offcanvas-title" id="offcanvasTopLabel">
                            Inventory of equipment for Office 01
                        </h6>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        {/* offcanvas body  */}

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
                                    <p className="card-text">State : Good</p>
                                    <div>
                                        <ul>
                                            <li>Type: Laptop</li>
                                            <li>Brand: Apple</li>
                                            <li>State: New</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card" style={{ width: '20rem', margin: '0 10px' }}>
                                <img
                                    src="https://i.ibb.co/nzTB8xc/laptopx.png"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h6 className="card-title">Tablet</h6>
                                    <p className="card-text">State : Excellent</p>
                                    <div>
                                        <ul>
                                            <li>Type: Tablet</li>
                                            <li>Brand: Lenovo</li>
                                            <li>State: New</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card" style={{ width: '20rem', margin: '0 10px' }}>
                                <img
                                    src="https://i.ibb.co/nzTB8xc/laptopx.png"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h6 className="card-title">Desktop</h6>
                                    <p className="card-text">State : Used</p>
                                    <div>
                                        <ul>
                                            <li>Type: Desktop</li>
                                            <li>Brand: Dell</li>
                                            <li>State: Decent</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* END OF cards */}
                    </div>
                </div>
            </div>
        </div>
    );
};
