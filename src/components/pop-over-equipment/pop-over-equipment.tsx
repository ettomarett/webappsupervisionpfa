import styles from './pop-over-equipment.module.scss';
import classNames from 'classnames';
import { useEffect } from 'react';
import '../../bootstrap/bootstrap.min.css';

import * as bootstrap from 'bootstrap';

export interface PopOverEquipmentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-pop-over-equipments-and-templates
 */
export const PopOverEquipment = ({ className }: PopOverEquipmentProps) => {
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
                return new bootstrap.Popover(popoverTriggerEl, {
                    sanitize: false
                });
            });
        };

        // Cleanup function to remove the scripts from the DOM when the component unmounts
        return () => {
            document.head.removeChild(script1);
        };
    }, []);

    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-toggle="popover"
                    data-bs-placement="right"
                    data-bs-custom-class="custom-popover"
                    data-bs-title="Equipment details"
                    data-bs-content={`
                        Type:
                        <ul>
                            <li>Laptop</li>
                            <li>Tablet</li>
                            <li>Smartphone</li>
                        </ul>
                    `}
                >
                    See Details
                </button>
                <a href="#">Click me</a>
            </div>
        </div>
    );
};
