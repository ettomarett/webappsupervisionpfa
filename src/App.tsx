import styles from './App.module.scss';
import Classnames from 'classnames';
import './index.css';
import { Titre1 } from './components/titre-1/titre-1';
import { FormLogin } from './components/form-login/form-login';
import { Route, Routes } from 'react-router-dom';
import admin_map from './_codux/boards/3-rd-page.board';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import Form from './components/form/form';

function App() {

    const [willLogin,setForm] = useState(true);

    return (
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
            <div>
                {willLogin ? <FormLogin /> : <Form/>}
            </div>
            <div className="is-wrapped">
                <Titre1 className="titre1" />
            </div>
            <div className="btn-group btn-group-toggle" data-toggle="buttons" style={{left:'900px'}}>
                    <label className={`btn btn-secondary ${willLogin ? 'active' : ''}`}>
                      <input type="radio" name="options" id="option1" autoComplete="off" checked
                      onClick={e => setForm(true)}/> Sign-in
                    </label>
                    <label className={`btn btn-secondary ${willLogin ? '' : 'active'}`}>
                      <input type="radio" name="options" id="option2" autoComplete="off"
                      onClick={e => setForm(false)}/> Sign-up
                    </label>
            </div>
        </div>
    );
}

export default App;
