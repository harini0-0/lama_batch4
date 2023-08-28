import React, {useEffect, useState} from "react";
import axios from 'axios';
import LoadingComponent from "../components/LoadingComponent";

import { Box, Button } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import ColumnsTable from "../components/tableComplex";

import { pendingLoansDataComplex } from "../views/admin/default/variables/columnsData";
import { NavLink } from "react-router-dom/";
import { privateAxios } from "../services/helper";


export default function PendingLoansAdmin(){
    const [loaded, setLoader] = useState(false);
    const [pendingLoansList, setLoanList] = useState(null);
 

    const loadPendingData = async () => {

        try{
        // setLoader(false)
        const response = await privateAxios.get("/admin/issues/unapproved")
        .then((response) => {
            console.log(response.data); 
            setLoanList(response.data);
            setLoader(true);
            // console.log("employeeList",employeeList);
        })
        // loadPendingData();
        // console.log("employeeList",employeeList);
        } catch(e){
            console.log(e);
        }
        ;
    };

    useEffect(() => {
        loadPendingData()
    },[loaded,loadPendingData])
    
    return (loaded ?
        
        <div style={{padding: "10px"}}>
            {/* {console.log(employeeList.length)} */}
            <NavLink to="/"><Button>Back</Button></NavLink>
            <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
                <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
                    <ColumnsTable
                    columnsData={pendingLoansDataComplex}
                    tableData={pendingLoansList}
                    header = "Pending Loans Table"
                    flagUnapproved= {true}
                    /> 
                </SimpleGrid>
            </Box>
        </div>
        : <LoadingComponent></LoadingComponent>

    )
}