import React, { useEffect, useState } from "react";
import axios from 'axios';
import LoadingComponent from "../components/LoadingComponent";
import {privateAxios} from '../services/helper';
import { Box, Button } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import ColumnsTable from "../components/employeeLoanTable";

import { loanColumnsDataComplex } from "../views/admin/default/variables/columnsData";
import { NavLink } from "react-router-dom/";

function LoanMasterPage(){
    const [loaded, setLoader] = useState(false);
    const [loanList, setLoanList] = useState(null);
 

    const loadLoanData = async () => {

        try{
        // setLoader(false)
        const response = await privateAxios.get("http://localhost:8181/api/v1/admin/loan/")
        .then((response) => {
            // console.log(response.data); 
            setLoanList(response.data);
            setLoader(true);
            // console.log("loanList", loanList);
        })

        // console.log("employeeList",employeeList);
        } catch(e){
            console.log(e);
        }
    };

    useEffect(() => {
        loadLoanData()
    },[loaded,loadLoanData])
    
    return(loaded ?
        
        <div style={{padding: "10px"}}>
            {/* {console.log(loanList.length)} */}
            <NavLink to="/employee/default"><Button>Back</Button></NavLink>
            <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
                <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
                    <ColumnsTable
                    columnsData={loanColumnsDataComplex}
                    tableData={loanList}
                    header = "Loan Master Table"
                    /> 
                </SimpleGrid>
            </Box>
        </div>
        : <LoadingComponent></LoadingComponent>
    );
};

export default LoanMasterPage;