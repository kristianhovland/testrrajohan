import { NavLink, useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Nav from "react-bootstrap/Nav";
import { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../img/logo.png";


function NavMenu() {
	const [auth, setAuth] = useContext(AuthContext);

	const history = useHistory();

	function logout() {
		setAuth(null);
		history.push("/");
	}

	return (



		<Navbar bg="transparent" variant="dark" expand="lg">
  		    <Navbar.Brand href="#home"><img src={logo} width="75px" alt="Logo" /></Navbar.Brand>
    	    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    	    <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
        		    <NavLink to="/" exact className="nav-link">
         	 	  	  Home
          		    </NavLink>
					<NavLink to="/housing" exact className="nav-link">
         	 	  	  Accomodations
          		    </NavLink>
					<NavLink to="/contact" exact className="nav-link">
         	 	  	  Contact
          		    </NavLink> 

				{auth ? (
						<>
					<NavLink to="/admin" className="nav-link">Admin</NavLink>  <button className="NavBtn" onClick={logout}>Log out</button>
						</>
				) : (
					<NavLink to="/login" className="nav-link">Login</NavLink>
				)}

			

           </Nav>
           </Navbar.Collapse>
    	   </Navbar>

);
}

export default NavMenu;