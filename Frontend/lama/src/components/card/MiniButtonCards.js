// Chakra imports
// Chakra imports
import {
    Flex,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
    
    Text,
    Button,
  } from "@chakra-ui/react";
  // Custom components
  import Card from "./Card.js";
  // Custom icons
  import React from "react";
import { NavLink } from "react-router-dom";
  
  export default function Default(props) {
    const { startContent, endContent, name, growth, routeTo, routeToAdd, flagLoan } = props;
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const textColorSecondary = "secondaryGray.600";
  
    return (
      <Card py='15px'>
        <Flex
          my='auto'
          h='100%'
          align={{ base: "center", xl: "start" }}
          justify={{ base: "center", xl: "center" }}>
          {startContent}
  
          <Stat my='auto' ms={startContent ? "18px" : "0px"}>
            <StatLabel
              lineHeight='100%'
              color={textColorSecondary}
              fontSize={{
                base: "xl",
              }}>
              {name}
            </StatLabel>
            <div style={{margin:"5px", padding:"5px"}}>
              {
                flagLoan==="Y"? <div>
                  <NavLink to={routeToAdd} ><Button style={{margin:"5px", padding:"5px"}} size="lg" onClick={()=>{console.log("clicked add")}}>View All Loans</Button></NavLink>
                  <NavLink to={routeTo} ><Button style={{margin:"5px", padding:"5px"}} size="lg" onClick={()=>{console.log("clicked add")}}>View Pending</Button></NavLink>
                </div>:
              
                <div>
                  <NavLink to={routeToAdd} ><Button style={{margin:"5px", padding:"5px"}} size="lg" onClick={()=>{console.log("clicked add")}}>Add</Button></NavLink>
                  <NavLink to={routeTo} ><Button style={{margin:"5px", padding:"5px"}} size="lg" onClick={()=>{console.log("clicked add")}}>View</Button></NavLink>
                </div>
              }
            </div>
            {growth ? (
              <Flex align='center'>
                <Text color='green.500' fontSize='xs' fontWeight='700' me='5px'>
                  {growth}
                </Text>
                <Text color='secondaryGray.600' fontSize='xs' fontWeight='400'>
                  since last month
                </Text>
              </Flex>
            ) : null}
          </Stat>
          <Flex ms='auto' w='max-content'>
            {endContent}
          </Flex>
        </Flex>
      </Card>
    );
  }
  