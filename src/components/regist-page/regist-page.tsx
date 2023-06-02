import styles from './regist-page.module.scss';
import classNames from 'classnames';


import React from 'react';
import Classnames from 'classnames';
import { Form } from '../form/form';
import '../../index.css';
import { Titre1 } from '../titre-1/titre-1';

export interface RegistPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-logins-and-templates
 */
export const RegistPage = ({ className }: RegistPageProps) => {
    return (
        <div className={Classnames(styles.root, className)}>
            <div className={styles.App}>
                <div>
                    <img
                        src="https://media.discordapp.net/attachments/1105326678336618567/1105475298516021309/NTX_a_3d_office_that_has_equipments_inside_with_an_eye_watching_ba32c94f-0c1a-41cb-baee-32e4aef93eae.png"
                        className="bgg"
                    />
                    <img
                        src="https://i.ibb.co/0tgsMzV/NTX-a-3d-office-that-has-equipments-inside-with-an-eye-watching-ba32c94f-0c1a-41cb-baee-32e4aef93eae.png"
                        className={Classnames('nicebg', 'rounddd')}
                    />
                    <div>
                        <img src="https://i.ibb.co/VtRtd7J/Ensias-logo.png" className="logoens" />
                    </div>
                </div>
                <Form />
                <div className="is-wrapped">
                    <Titre1 className="titre1" />
                </div>
            </div>
        </div>
    );
};

export default RegistPage;