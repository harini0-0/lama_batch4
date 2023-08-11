import React from "react";
import { Navbar } from "react-bootstrap";
import Container from 'react-bootstrap/Container';


function NavbarComponent(){
    return (
        
            <Navbar className="fixed-top nav2">
        <Container>
          <Navbar.Brand href="#home">Loan Admin Management Application</Navbar.Brand>
        </Container>
      </Navbar>
       
    );
};

export default NavbarComponent;