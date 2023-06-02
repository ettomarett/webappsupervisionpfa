import { Nav, NavItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "./AdminSideBar.css" 
import { useState } from 'react';
import { Rest, Session } from "../../global/global";
import { auth_response } from "../../global/jwt";
import { useNavigate } from "react-router-dom";



function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    let session = new Session();
    if(session.get("auth") != null){
      let token = (session.get("auth")! as auth_response).token;
      Rest("POST","/auth/logout","",token,"");
    }
    sessionStorage.clear();
    navigate("*");
  }

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      {/* Toggle button */}
      <div className="toggle-button" style={{zIndex:5}}>
        <button onClick={toggleSidebar} className="btn btn-outline-secondary">{isOpen ? 'Show' : 'Hide'}</button>
      </div>
      {/* Sidebar content */}
      <div className="nav flex-column">
        <NavItem>
          <Nav.Link href="/admin-map">View The Map</Nav.Link>
        </NavItem>
        <hr/>
        <NavItem>
          <Nav.Link href="/equipment-management">Equipment management</Nav.Link>
        </NavItem>
        <hr/>
        <NavItem>
          <Nav.Link href="/equipment-search">Search for equipment</Nav.Link>
        </NavItem>
        <hr/>
        <NavItem>
          <Nav.Link href="/request-management">Request management</Nav.Link>
        </NavItem>
        <hr/>
        <NavItem>
          <Nav.Link href="/employee-management">Employee management</Nav.Link>
        </NavItem>
        <hr/>
        <NavItem>
          <Nav.Link href="/employee-search">Employee search</Nav.Link>
        </NavItem>
      </div>
      <div className="toggle-button" style={{zIndex:5}}>
        <button onClick={logout} className="btn btn-outline-secondary">Logout</button>
      </div>
    </div>
  );
};


export default AdminSidebar;
