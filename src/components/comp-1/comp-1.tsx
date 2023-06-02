import styles from './comp-1.module.scss';
import classNames from 'classnames';

export interface Comp1Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-comp-1s-and-templates
 */
export const Comp1 = ({ className }: Comp1Props) => {
    return <div className={classNames(styles.root, className)}>Comp1</div>;
};
