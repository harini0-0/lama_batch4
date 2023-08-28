import { useEffect, useState } from "react";
import axios from 'axios';

import LoadingComponent from "../components/LoadingComponent";

import { Box, Button } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import ColumnsTable from "../components/itemTableComplex";
import { privateAxios } from "../services/helper";

import { itemColumnsDataComplex } from "../views/admin/default/variables/columnsData";
import { NavLink } from "react-router-dom/";

function ItemMasterPage() {
    const [loaded, setLoader] = useState(false);
    const [itemList, setItemList] = useState(null);

    const loadItemData = async () => {
        try {
            const response = await privateAxios.get("/admin/items")
            .then((response) => {
                console.log(response.data);
                setItemList(response.data);
                console.log("itemList", itemList);
                setLoader(true);
            })
        } catch(e) {
            console.log(e);
        }
    };

    useEffect(() => {
        loadItemData()
    }, [loaded, loadItemData])

    return (loaded ? 
        <div style={{padding: "10px"}}>
            <NavLink to="/"><Button>Back</Button></NavLink>
            <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
                <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
                    <ColumnsTable
                    columnsData={itemColumnsDataComplex}
                    tableData={itemList}
                    header = "Item Master Table"
                    /> 
                </SimpleGrid>
            </Box>
        </div>
        : <LoadingComponent></LoadingComponent>
    );
};

export default ItemMasterPage;