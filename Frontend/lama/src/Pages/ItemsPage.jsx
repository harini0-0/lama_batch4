
import {
    Avatar,
    Box,
    Button,
    Flex,
    FormLabel,
    Icon,
    Text,
    SimpleGrid,
    useColorModeValue,
  } from "@chakra-ui/react";
  import MiniStatistics from "../components/card/MiniStatistics";
  import MiniButtonCards from "../components/card/MiniButtonCards";
  import EmployeeButtonCard from "../components/card/EmployeeButtonCard";
  import IconBox from "../components/icons/IconBox";
  import { PeopleFill } from "../components/icons/Icons";
  import { privateAxios } from "../services/helper";
  import React, {useState, useEffect} from "react";
  import {
    MdAddTask,
    MdAttachMoney,
    MdBarChart,
    MdFileCopy,
  } from "react-icons/md";
  import axios from "axios";
  import { NavLink } from "react-router-dom/";
import LoadingComponent from "../components/LoadingComponent";
import ItemCard from "../components/card/ItemCard";
  
  export default function ItemsPage() {
    // Chakra Color Mode
    const brandColor = useColorModeValue("brand.500", "white");
    const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
    const [loaded, setLoader] = useState(false);
    const [itemList, setItemList] = useState(null);
    
    
    const loadItemData = async () => {

        try{
        // setLoader(false)
        const response = await privateAxios.get("/admin/items")
        .then((response) => {
            // console.log(response.data); 
            setItemList(response.data);
            setLoader(true);
            // console.log("employeeList",employeeList);
        })

        // console.log("employeeList",employeeList);
        } catch(e){
            console.log(e);
        }
    };

    useEffect(() => {
        loadItemData()
    },[loaded,loadItemData])
    const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");

    return (loaded?
      <Box ms='24px' pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <NavLink to="/"><Button>Back</Button></NavLink>
        <Text 
              mb='20px' 
              mt='40px'
              color={textColor} fontSize='2xl'  fontWeight='700'>
                ITEMS LIST
        </Text>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 5, "2xl": 6 }}
          gap='20px'
          mr='20px'
          ml="20px"
          mt="20px"
          mb='20px'>
            {
                itemList.map(data=>{
                    return <ItemCard
                    itemName={data.itemDescription}
                    category ={data.itemCategory}
                    itemValuation = {data.itemValuation}
                    itemStatus = {data.itemStatus}
                    // image={Nft1}
                    itemMake = {data.itemMake}
                    
                    itemId = {data.itemId}

                  />
                })
            }
        </SimpleGrid>
      </Box>:
      <LoadingComponent></LoadingComponent>
    );
  }
  