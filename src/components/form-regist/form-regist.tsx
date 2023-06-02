import styles from './form-regist.module.scss';
import classNames from 'classnames';
import '../../bulma/css/bulma.min.css';
import { useEffect } from 'react';

export interface FormRegistProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-forms-and-templates
 */
export const FormRegist = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://use.fontawesome.com/releases/v5.3.1/js/all.js';
        script.defer = true;
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (

        <form
            className={classNames('box', 'boxfoq')}
            style={{
                transform: 'scale(1.5)',
                position: 'absolute',
                bottom: -390,
                right: -1050,
                height: '270px',
            }}
        >
            <h2 className="title is-5 ">Sign in</h2>

            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input className="input is-rounded is-small" type="email" placeholder="Email" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                    </span>
                </p>
            </div>
            <div className="field">
                <p className="control has-icons-left">
                    <input
                        className="input is-rounded is-small"
                        type="password"
                        placeholder="Password"
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div className="field">
                <p className="control">
                    <button className="button is-success">Login</button>
                </p>
            </div>
            <p className="has-text-right is-size-7">
                <a href="#">Forgot password?</a>
            </p>
        </form>
    );
};

export default FormRegist;
