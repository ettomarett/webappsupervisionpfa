import styles from './form.module.scss';
import classNames from 'classnames';
import '../../bulma/css/bulma.min.css';
import { useEffect, useState } from 'react';
import { Rest, getHostName } from '../../global/global';
import { RegisterRequest } from '../../global/employee';

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-forms-and-templates
 */
export const Form = () => {
    const [reg,setReg] = useState<RegisterRequest>({email: "",prenom: "",nom: "",departement: "",password: ""});


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
            onSubmit={e => {
                e.preventDefault();
                fetch(getHostName() + "/auth/register",{
                    method: "POST",
                    body: JSON.stringify(reg),
                    headers: {'Content-type':'application/json; charset=UTF-8'}
                }).then(async (response) => {
                    if (response.status === 400) {
                        alert((await response.json()) as string);
                    }
                })
            }}
            className={classNames('box', 'boxfoq')}
            style={{
                transform: 'scale(1.5)',
                position: 'absolute',
                bottom: -460,
                right: -1050,
                height: '350px',
            }}
        >
            <h2 className="title is-4 ">Sign up</h2>
            {/** input start */}
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input className="input is-rounded is-small" 
                    value={reg.email}
                    onChange={e => setReg((r) => ({...r,...{email: e.target.value}}))}
                    type="email" placeholder="Email" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                    </span>
                </p>
            </div>
            {/** input end */}

            {/** input start */}
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input
                        value={reg.prenom}
                        onChange={e => setReg((r) => ({...r,...{prenom: e.target.value}}))}
                        className="input is-rounded is-small"
                        type="firstname"
                        placeholder="First name"
                    />
                </p>
            </div>
            {/** input end */}
                {/** input start */}
                <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input
                        value={reg.nom}
                        onChange={e => setReg((r) => ({...r,...{nom: e.target.value}}))}
                        className="input is-rounded is-small"
                        type="lastname"
                        placeholder="Last name"
                    />
                </p>
            </div>
            {/** input end */}
                {/** input start */}
                <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input
                        value={reg.departement}
                        onChange={e => setReg((r) => ({...r,...{departement: e.target.value}}))}
                        className="input is-rounded is-small"
                        type="department"
                        placeholder="Department"
                    />
                </p>
            </div>
            {/** input end */}
            <div className="field">
                <p className="control has-icons-left">
                    <input
                        value={reg.password}
                        onChange={e => setReg((r) => ({...r,...{password: e.target.value}}))}
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
                    <button type='submit' id="submit_btn"className="button is-success">Sign-up</button>
                </p>
            </div>
         
        </form>
    );
};

export default Form;
