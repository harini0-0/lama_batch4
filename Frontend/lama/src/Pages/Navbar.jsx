import React from "react";
import { Navbar } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { Button }from "react-bootstrap";
import { useNavigate } from "react-router";


function NavbarComponent(props){
    const navigate = useNavigate()
    // const;
    return (
        
            <Navbar className="fixed-top nav2">
        <Container>
          <Navbar.Brand href="#home">Loan Admin Management Application</Navbar.Brand>
          {props.page!=='1' && <Button variant="secondary" onClick={()=>{navigate('/');}}>Logout</Button>}
        </Container>
      </Navbar>
       
    );
};

export default NavbarComponent;