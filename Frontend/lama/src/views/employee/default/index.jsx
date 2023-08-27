
import {
    Avatar,
    Box,
    Flex,
    FormLabel,
    Icon,
    Select,
    SimpleGrid,
    useColorModeValue,
  } from "@chakra-ui/react";
  // Assets
  import Usa from "../../../assets/img/dashboards/usa.png";
  // Custom components
  import MiniCalendar from "../../../components/calendar/MiniCalendar";
  import MiniStatistics from "../../../components/card/MiniStatistics";
  import MiniButtonCards from "../../../components/card/MiniButtonCards";
  import EmployeeButtonCard from "../../../components/card/EmployeeButtonCard";
  import IconBox from "../../../components/icons/IconBox";
  import { PeopleFill } from "../../../components/icons/Icons";
  import React from "react";
  import {
    MdAddTask,
    MdAttachMoney,
    MdBarChart,
    MdFileCopy,
  } from "react-icons/md";

  import TotalSpent from "../../admin/default/components/TotalSpent";

  import {
    columnsDataCheck,
    columnsDataComplex,
  } from "../../admin/default/variables/columnsData";
  import tableDataCheck from "../../admin/default/variables/tableDataCheck.json";
  import tableDataComplex from "../../admin/default/variables/tableDataComplex.json";
  import { getCurrentUserDetail } from "../../../auth";
  
  export default function UserReports() {
    // Chakra Color Mode
    const brandColor = useColorModeValue("brand.500", "white");
    const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
    const id = getCurrentUserDetail();
 //  const route = '/user/item/'+id;
  
    return (
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
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
                  // <Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />
                  <PeopleFill w='32px' h='32px'/>
                }
              />
            }
            name='View All Loan Card'
            buttonName = 'View'
            routeTo =  '/viewloan'
          
            // routeToAdd='/employee/add'
            // value='$350.4'
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
            routeTo='/loan/apply'
            //routeToAdd='/loan/apply'
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
            routeTo=""
            //routeToAdd='/loan/add'
            // value='$350.4'
          />
          {/* <MiniStatistics
            startContent={
              <IconBox
                w='56px'
                h='56px'
                bg={boxBg}
                icon={
                  <Icon w='32px' h='32px' as={MdAttachMoney} color={brandColor} />
                }
              />
            }
            name='Spend this month'
            value='$642.39'
          />
          <MiniStatistics growth='+23%' name='Sales' value='$574.34' /> */}
          <MiniStatistics
            startContent={
              <IconBox
                w='56px'
                h='56px'
                bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
                icon={<Icon w='28px' h='28px' as={MdAddTask} color='white' />}
              />
            }
            name='Total Loans Taken'
            value='19'
          />
          <MiniStatistics
            startContent={
              <IconBox
                w='56px'
                h='56px'
                bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
                icon={<Icon w='28px' h='28px' as={MdAddTask} color='white' />}
              />
            }
            name='Approved Loans'
            value='8'
          />
          <MiniStatistics
            startContent={
              <IconBox
                w='56px'
                h='56px'
                bg={boxBg}
                icon={
                  <Icon w='32px' h='32px' as={MdFileCopy} color={brandColor} />
                }
              />
            }
            name='Unapproved'
            value='9'
          />
        </SimpleGrid>
  
        {/* <SimpleGrid columns={{ base: 1, md: 2, xl: 1 }} gap='20px' mb='20px'>
          <TotalSpent />
          <WeeklyRevenue />
        </SimpleGrid> */}
        {/* <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
          <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
            <DailyTraffic />
            <PieCard />
          </SimpleGrid>
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
          <ComplexTable
            columnsData={columnsDataComplex}
            tableData={tableDataComplex}
          /> */}
          {/* <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
            <Tasks />
            <MiniCalendar h='100%' minW='100%' selectRange={false} />
          </SimpleGrid> */}
        {/* </SimpleGrid> */}
      </Box>
    );
  }
  