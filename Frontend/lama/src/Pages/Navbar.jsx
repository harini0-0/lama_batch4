import React from "react";
import { Navbar } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { Button }from "react-bootstrap";
import {NavLink } from "react-router-dom";
import { doLogout } from "../auth";
import { useHistory } from "react-router-dom";


function NavbarComponent(props){
  const userContextData = useContext(userContext)
    const history = useHistory()
    const [login, setLogin] = useState(false)

    const handleLogout = () => {
      console.log("logout enters")
        doLogout(() => {
          //logged out
          setLogin(false)
          userContext.setUser({
              data: null,
              login: false
          })

          history.push("/auth")
      })
    }

    return (
        
            <Navbar className="fixed-top nav2">
              <Container>
                <Navbar.Brand href="#home">Loan Employee Management Application</Navbar.Brand>
                {props.page === '1' && <Button variant="secondary" onClick={handleLogout} >Logout</Button>}
              </Container>
      </Navbar>
       
    );
};

export default NavbarComponent;