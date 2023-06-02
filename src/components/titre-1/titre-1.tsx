import styles from './titre-1.module.scss';
import classNames from 'classnames';

export interface Titre1Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-titre-1s-and-templates
 */
export const Titre1 = ({ className }: Titre1Props) => {
    return <div className={classNames(styles.root, className)}>
        
        <img src="https://i.ibb.co/WW9fRBM/eyesupervision.png" alt="Logo" width="100" height="65" className="logox d-inline-block align-text-top"/>

        Welcome to EyeON Supervision</div>;
};
