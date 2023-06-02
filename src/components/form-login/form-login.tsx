import styles from './form.module.scss';
import classNames from 'classnames';
import '../../bulma/css/bulma.min.css';
import { useEffect, useState } from 'react';
import { auth_response, getJwtToken } from '../../global/jwt';
import { Session } from '../../global/global';
import { useNavigate } from 'react-router-dom';

export interface FormLoginProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-forms-and-templates
 */
export const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

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
            onSubmit={(e) => {
                e.preventDefault();
                getJwtToken({ email: email, password: password });
                let session = new Session();
                if(session.get("auth") != null){
                    const auth = session.get("auth") as auth_response;
                    if(auth.isadmin){
                        navigate("/admin-map",{replace : true});
                    }else{
                        navigate("/employee-map",{replace : true});
                    }
                }
            }}
            className={classNames('box', 'boxfoq')}
            style={{
                transform: 'scale(1.5)',
                position: 'absolute',
                bottom: -400,
                right: -1050,
                height: '250px',
            }}
        >
            <h2 className="title is-4 ">Sign in</h2>
            {/** input start */}
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input
                        className="input is-rounded is-small"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div className="field">
                <p className="control">
                    <button className="button is-success" type="submit">
                        Login
                    </button>
                </p>
            </div>
        </form>
    );
};

export default FormLogin;
