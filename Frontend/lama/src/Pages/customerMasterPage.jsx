import React, { useEffect, useState } from "react";
// import NavbarComponent from "./Navbar";
// import { Table, Button } from "react-bootstrap";
// import employeeData from "../data";
import axios from 'axios';
import LoadingComponent from "../components/LoadingComponent";

import { Box, Button } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import ColumnsTable from "../components/tableComplex";

import { customerColumnsDataComplex } from "../views/admin/default/variables/columnsData";
import { NavLink } from "react-router-dom/";
//   import tableDataComplex from "./variables/tableDataComplex.json";


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
    },[loaded, loadEmployeeData])
    
    return(loaded ?
        
        <div style={{padding: "10px"}}>
            <NavLink to="/"><Button>Back</Button></NavLink>
            <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
                <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
                    <ColumnsTable
                    columnsData={customerColumnsDataComplex}
                    tableData={employeeList}
                    header = "Customer Master Table"
                    /> 
                </SimpleGrid>
            </Box>
        </div>
        : <LoadingComponent></LoadingComponent>
    );
};

export default CustomerMasterPage;



// {/* <NavbarComponent page="1"></NavbarComponent> */}
// <div>
// <Table >
//     <thead>
//         <tr>
//             <th>Employee Id</th>
//             <th>Employee Name</th>
//             <th>Designation</th>
//             <th>Department</th>
//             <th>Gender</th>
//             <th>Date of Birth</th>
//             <th>Date of Joining</th>
//             <th>Options</th>
//         </tr>
        
//         {Array.from({length: 2}).map((_,index)=>(
//             <tr key={index}>
//                 <td>{employeeList[index].employeeId}</td>
//                 <td>{employeeList[index].employeeName}</td>
//                 <td>{employeeList[index].designation}</td>
//                 <td>{employeeList[index].department}</td>
//                 <td>{employeeList[index].gender}</td>
//                 <td>{employeeList[index].dateOfBirth}</td>
//                 <td>{employeeList[index].dateOfJoining}</td>
//                 <td>
                    // <Button variant="secondary" style={{margin:"5px"}}><Trash3Fill onClick={()=>{console.log("clicked trash")}}></Trash3Fill></Button>
                    // <Button variant="secondary" style={{margin:"5px"}}><PencilFill></PencilFill></Button>
//                 </td>
//             </tr>
//         ))}
        
//     </thead>
// </Table>
// </div>