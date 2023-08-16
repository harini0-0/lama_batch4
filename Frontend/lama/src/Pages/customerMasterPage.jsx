import React, { useEffect, useState } from "react";
import NavbarComponent from "./Navbar";
import { Table } from "react-bootstrap";
import employeeData from "../data";
import axios from 'axios';

function CustomerMasterPage(){

    const [employeeList, setEmployeeList] = useState([])
 
    useEffect(() => {
        loadEmployeeData()
    },[])

    const loadEmployeeData = async () => {
        const data = await axios.get("http://localhost:8181/api/v1/admin/employee/")
        .then((response) => {
            console.log(response.data); setEmployeeList(response.data)
        })


        console.log("employeeList",employeeList)
    }

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
                        <h1>{employeeList[0].employeeId}</h1>
                        
                        {/* {Array.from({length: 2}).map((_,index)=>(
                            <tr key={index}>
                                <td>{employeeList[index].employeeId}</td>
                                <td>{employeeData[index].eid}</td>
                                <td>{employeeData[index].eName}</td>
                                <td>{employeeData[index].designation}</td>
                                <td>{employeeData[index].department}</td>
                                <td>{employeeData[index].gender}</td>
                                <td>{employeeData[index].dob}</td>
                                <td>{employeeData[index].doj}</td>

                            </tr>
                        ))} */}
                        
                    </thead>
                </Table>
            </div>
        </div>
    );
};

export default CustomerMasterPage;