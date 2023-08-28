import React from "react";
import NavbarComponent from "./Navbar";
import { Button } from "react-bootstrap";

function EmployeePage(){
    return (
        <div className="App">
            <NavbarComponent></NavbarComponent>
            <div className="employeeMenu">
                <h1>Employee Dashboard</h1>
                <div className="employeeOptions">
                    <Button variant="secondary" style={{margin: "10px"}}>View All Loan Cards</Button>
                    <Button variant="secondary" style={{margin: "10px"}}>Apply for loan</Button>
                    <Button variant="secondary" style={{margin: "10px"}}>View Items Purchased</Button>
                </div>
            </div>
        </div>
    );
};


export default EmployeePage;