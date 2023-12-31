
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
import React, { useEffect } from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import CheckTable from "./components/CheckTable";
import ComplexTable from "./components/ComplexTable";
import DailyTraffic from "./components/DailyTraffic";
import PieCard from "./components/PieCard";
import Tasks from "./components/Tasks";
import TotalSpent from "./components/TotalSpent";
import WeeklyRevenue from "./components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "./variables/columnsData";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";
import axios from "axios";
import { privateAxios } from "../../../services/helper";
import { useState } from "react";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");


  let [approvedRequests, setApprovedRequests] = useState(0);
  let [allRequests, setAllRequests] = useState(0);
  

  const loanCount = async() => {
    await privateAxios.get("/dashboard/")
      .then((response) => {
        setApprovedRequests(response.data[0])
        setAllRequests(response.data[1])
        console.log(response.data)
        console.log("Approved Requests", approvedRequests)
        console.log("All Requests", allRequests)
      })
      .catch((err) => {
        console.log(err.message)
    })
  }

  useEffect(() => {
    loanCount();
  },[allRequests, loanCount, approvedRequests])
  
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
        <MiniButtonCards
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
          name='Customer Data Management'
          routeTo='/customermap'
          routeToAdd='/user/add'
          flagLoan = "N"
          // value='$350.4'
        />
        <MiniButtonCards
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
          name='Items Master Data'
          routeTo='/itemmap'
          routeToAdd='/item/add'
          flagLoan ="N"
        />
        <MiniButtonCards
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
          name='Loan Card Management'
          routeTo='/loanmap'
          routeToAdd='/loan/add'
          flagLoan = "N"
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
          name='Total no of Loans'
          value={allRequests}
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
          value={approvedRequests}
        />
        <MiniButtonCards
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
          name='Applied Loans'
          routeToAdd='/loanviewmap'
          flagLoan = "Y"
          routeTo="/pendingLoans"
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 1 }} gap='20px' mb='20px'>
        {/* <TotalSpent />
        <WeeklyRevenue /> */}
        <PieCard />
      </SimpleGrid>
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
