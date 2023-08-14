import React from "react";
import NavbarComponent from "./Navbar";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

function AdminPage(){
    const navigate = useNavigate();
    return (
        <div className="App">
            <NavbarComponent></NavbarComponent>
            <div className="adminMenu">
                <h1>Admin Dashboard</h1>
                <div className="adminOptions">
                    <Button variant="secondary" 
                        style={{margin: "10px", color: "black"}}
                        onClick={()=>{navigate('/customermap')}}
                    >
                            Customer Data Management
                    </Button>
                    <Button variant="secondary" style={{margin: "10px", color: "black"}}>Loan Card Management</Button>
                    <Button variant="secondary" style={{margin: "10px", color: "black"}}>Items Master Data</Button>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;