import React from "react";
import NavbarComponent from "./Navbar";
import { Button } from "react-bootstrap";

function AdminPage(){
    return (
        <div className="App">
            <NavbarComponent></NavbarComponent>
            <div className="adminMenu">
                <h1>Admin Dashboard</h1>
                <div className="adminOptions">
                    <Button variant="secondary" style={{margin: "10px"}}>Customer Data Management</Button>
                    <Button variant="secondary" style={{margin: "10px"}}>Loan Card Management</Button>
                    <Button variant="secondary" style={{margin: "10px"}}>Items Master Data</Button>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;