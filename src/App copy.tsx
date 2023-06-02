import styles from './App.module.scss';
import Classnames from 'classnames';
import './index.css';
import { Titre1 } from './components/titre-1/titre-1';
import { FormLogin } from './components/form-login/form-login';

function App() {
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
                <FormLogin />
            </div>
            <div className="is-wrapped">
                <Titre1 className="titre1" />
            </div>
        </div>
    );
}

export default App;
