import React, { useEffect, useState } from "react";
import NavbarComponent from "./Navbar";
import { Table, Button } from "react-bootstrap";
// import employeeData from "../data";
import axios from 'axios';
import LoadingComponent from "../Components/LoadingComponent";
import { PencilFill, Trash3Fill } from "react-bootstrap-icons";


function CustomerMasterPage(){
    const [loaded, setLoader] = useState(false);
    const [employeeList, setEmployeeList] = useState(null);
 

    const loadEmployeeData = async () => {
        try{
        const response = await axios.get("http://localhost:8181/api/v1/admin/employee/")
        .then((response) => {
            console.log(response.data); 
            setEmployeeList(response.data);
            console.log("employeeList",employeeList);
        })

        // console.log("employeeList",employeeList);
        setLoader(true);
        } catch(e){
            console.log(e);
        }
    };

    useEffect(() => {
        loadEmployeeData()
    },[loaded])
    
    return(loaded ?
        
        <div className="App">
            <NavbarComponent page="1"></NavbarComponent>
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
                            <th>Options</th>
                        </tr>
                        
                        {Array.from({length: 2}).map((_,index)=>(
                            <tr key={index}>
                                <td>{employeeList[index].employeeId}</td>
                                <td>{employeeList[index].employeeName}</td>
                                <td>{employeeList[index].designation}</td>
                                <td>{employeeList[index].department}</td>
                                <td>{employeeList[index].gender}</td>
                                <td>{employeeList[index].dateOfBirth}</td>
                                <td>{employeeList[index].dateOfJoining}</td>
                                <td>
                                    <Button variant="secondary" style={{margin:"5px"}}><Trash3Fill onClick={()=>{console.log("clicked trash")}}></Trash3Fill></Button>
                                    <Button variant="secondary" style={{margin:"5px"}}><PencilFill></PencilFill></Button>
                                </td>
                            </tr>
                        ))}
                        
                    </thead>
                </Table>
            </div>
        </div>
        : <LoadingComponent></LoadingComponent>
    );
};

export default CustomerMasterPage;