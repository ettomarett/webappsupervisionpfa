import styles from './App.module.scss';
import Classnames from 'classnames';
import './index.css';
import { Titre1 } from './components/titre-1/titre-1';
import { FormLogin } from './components/form-login/form-login';
import admin_map from './_codux/boards/3-rd-page.board';
import Login from "./App"
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/admin-sidebar/admin-sidebar'
import ModifyEquipBoard from './_codux/boards/modify-equip/modify-equip.board';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Search } from './components/search/search';
import { SearchEmployee } from './components/SearchEmployee/SearchEmployee';
import { ModifyEmployee } from './components/ModifyEmployee/ModifyEmployee';
import { RequestManagement } from './components/RequestManagement/RequestManagement';
import { EmployeeViewEquipment } from './components/EmployeeViewEquipment/EmployeeViewEquipment';
import { SendRequest } from './components/SendRequest/SendRequest';
import { ViewRequest } from './components/ViewRequest/ViewRequest';

function App() {
    return (
        <>
        <Routes>
            <Route path='*' element={<Login />}/>
            <Route path='/admin-map' element={<admin_map.Board/>} />
            <Route path='/equipment-management'element={
                <ModifyEquipBoard.Board/>
            }/>
            <Route path='/sidebar' element={<Sidebar />} />
            <Route path='/equipment-search' element={<Search/>}/>
            <Route path='/employee-search' element={<SearchEmployee/>}/>
            <Route path='/employee-management' element={<ModifyEmployee/>}/>
            <Route path='/request-management' element={<RequestManagement/>}/>
            <Route path='/employee-map' element={<EmployeeViewEquipment/>}/>
            <Route path='/send-request' element={<SendRequest/>}/>
            <Route path='/view-requests' element={<ViewRequest/>}/>
        </Routes>
        </>
    );
}

export default App;
