import React, { useEffect, useState } from "react";
// import NavbarComponent from "./Navbar";
// import { Table, Button } from "react-bootstrap";
// import employeeData from "../data";
import axios from 'axios';
import LoadingComponent from "../components/LoadingComponent";

import { Box, Button } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import ColumnsTable from "../components/employeeItemTabel";

import { customerColumnsDataComplex } from "../views/admin/default/variables/columnsData";
import { NavLink } from "react-router-dom/";
import { privateAxios } from "../services/helper";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { employeeItemColumnDataComplex } from "../views/admin/default/variables/columnsData";
//   import tableDataComplex from "./variables/tableDataComplex.json";


function EmployeeItemPage(){
    const [loaded, setLoader] = useState(false);
    const [ItemList, setItemList] = useState(null);

    const empId = useParams()
    const id = empId.id

    const loadItemData = async (id) => {

        try{
        // setLoader(false)
        const intId = parseInt(id)
        const response = await privateAxios.get("http://localhost:8181/api/v1/admin/items/employeeItems/" + intId)
        .then((response) => {
            console.log(response.data); 
            setItemList(response.data);
            setLoader(true);
            console.log("employeeList",ItemList);
        })

        // console.log("employeeList",employeeList);
        } catch(e){
            console.log(e);
        }
    };

    useEffect(() => {
        loadItemData(id)
    },[loaded,loadItemData])
    
    return(loaded ?
        
        <div style={{padding: "10px"}}>
            {/* {console.log(employeeList.length)} */}
            <NavLink to="/"><Button>Back</Button></NavLink>
            <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
                <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
                    <ColumnsTable
                    columnsData={employeeItemColumnDataComplex}
                    tableData={ItemList}
                    header = "Employee items tables"
                    /> 
                </SimpleGrid>
            </Box>
        </div>
        : <LoadingComponent></LoadingComponent>
    );
};

export default EmployeeItemPage;



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