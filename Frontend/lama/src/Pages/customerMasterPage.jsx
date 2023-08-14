import React from "react";
import NavbarComponent from "./Navbar";
import { Table } from "react-bootstrap";
import employeeData from "../data";

function CustomerMasterPage(){
    return(
        <div className="App">
            <NavbarComponent></NavbarComponent>
            <div>
                <Table >
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee Name</th>
                            <th>Designation</th>
                            <th>Department</th>
                            <th>Gender</th>
                            <th>Date of Birth</th>
                            <th>Date of Joining</th>
                        </tr>
                        {Array.from({length: 10}).map((_,index)=>(
                            <tr key={index}>
                                <td>{employeeData[index].eid}</td>
                                <td>{employeeData[index].eName}</td>
                                <td>{employeeData[index].designation}</td>
                                <td>{employeeData[index].department}</td>
                                <td>{employeeData[index].gender}</td>
                                <td>{employeeData[index].dob}</td>
                                <td>{employeeData[index].doj}</td>

                            </tr>
                        ))}
                        
                    </thead>
                </Table>
            </div>
        </div>
    );
};

export default CustomerMasterPage;