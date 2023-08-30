
import {
    Box,
    Flex,
    Icon,
    SimpleGrid,
    useColorModeValue,
  } from "@chakra-ui/react";
  // Assets
  import EmployeeButtonCard from "../../../components/card/EmployeeButtonCard";
  import IconBox from "../../../components/icons/IconBox";
  import { PeopleFill } from "../../../components/icons/Icons";
  import React from "react";
  import {MdBarChart,} from "react-icons/md";
  import { getCurrentUserDetail } from "../../../auth";
  import Banner from "../../../components/banner/Banner";
  
  export default function UserReports() {
    // Chakra Color Mode
    const brandColor = useColorModeValue("brand.500", "white");
    const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
    const id = getCurrentUserDetail();
  const route = '/user/item/'+id;
  
    return (
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <Flex
          mb={"20px"}
          flexDirection='column'
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}>
            <Banner />
          </Flex>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
          gap='20px'
          mb='20px'>
          <EmployeeButtonCard
            startContent={
              <IconBox
                w='56px'
                h='56px'
                bg={boxBg}
                icon={
                  <PeopleFill w='32px' h='32px'/>
                }
              />
            }
            name='View All Loan Card'
            buttonName = 'View'
            routeTo =  '/viewloan'
          />
          <EmployeeButtonCard
            startContent={
              <IconBox
                w='56px'
                h='56px'
                bg={boxBg}
                icon={
                  <Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />
                }
              />
            }
            name='Apply For Loan'
            buttonName = 'Apply'
            routeTo='/itemsPage'
          />
          <EmployeeButtonCard
            startContent={
              <IconBox
                w='56px'
                h='56px'
                bg={boxBg}
                icon={
                  <Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />
                }
              />
            }
            name='View Items purchased'
            buttonName = 'View'
            routeTo={route}
          />          
        </SimpleGrid>
      </Box>
    );
  }
  