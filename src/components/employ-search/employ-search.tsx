import styles from './employ-search.module.scss';

import React, { useState } from 'react';
import classNames from 'classnames';
import data from './dataEmployee.json';


import '../../bootstrap/bootstrap.min.css';
import { useEffect, useRef } from 'react';
import * as bootstrap from 'bootstrap';
import { Popover } from 'bootstrap';
import { Modalcompn } from '../modalcompn/modalcompn';
import { ModifyEquip } from '../modify-equip/modify-equip';
import { ManageEmployee } from '../manage-employee/manage-employee';


export interface EmploySearchProps {
    className?: string;
}

export const EmploySearch = ({ className }: EmploySearchProps) => {
    const [searchTerm, setSearchTerm] = useState('');
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
        <div className={classNames(styles.root, className)}>
            <input
                type="text"
                placeholder="Search here..."
                onChange={(e) => setSearchTerm(e.target.value)}
                className="searchbar"
            />
            <div className="searchresult">
                <div style={{ width: '70%' }}>
                   <div className={classNames(styles.templateContainer, 'd-flex flex-wrap')}>
    {data
        .filter((val) => {
            if (searchTerm === '') {
                return val;
            } else if (
                val.employeeID.toString().includes(searchTerm.toLowerCase()) ||
                val.Role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.Score.toString().includes(searchTerm.toLowerCase()) ||
                val.Floor.toString().includes(searchTerm.toLowerCase())
            ) {
                return val;
            }
        })
        .map((val) => {
            return (
                <div
                    className={styles.template}
                    key={val.employeeID}
                    style={{ flexBasis: '33.33%' }}
                >
                    <div className={`card ${styles.card}`} style={{ width: '100%' }}>
                    <img
                                                src={val.EquipImg}
                                                className="card-img-top"
                                                alt="..."
                                                style={{ width: '100px' }}
                                            />
                                            <div className="card-body">
                                                <h6 className="card-title">{val.Role}</h6>
                                                <ul>
                                                    <li>ID: {val.employeeID}</li>
                                                    <li>Role: {val.Role}</li>
                                                    <li>Floor: {val.Floor}</li>
                                                    <li>Office: {val.Office}</li>
                                                    <li>Score: {val.Score}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
            );
        })}
</div>
                </div>
            </div>
        </div>
    );
};
