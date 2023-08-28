/* eslint-disable */
import React, { useEffect, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { doLogout } from '../../../auth';
import { useHistory } from 'react-router-dom';
import userContext from '../../../contexts/userContext';
// chakra imports
import { Box, Button, Flex, HStack, Text, useColorModeValue } from "@chakra-ui/react";

export function SidebarLinks(props) {
  //   Chakra color mode
  let location = useLocation();
  let activeColor = useColorModeValue("gray.700", "white");
  let inactiveColor = useColorModeValue(
    "secondaryGray.600",
    "secondaryGray.600"
  );
  let activeIcon = useColorModeValue("brand.500", "white");
  let textColor = useColorModeValue("secondaryGray.500", "white");
  let brandColor = useColorModeValue("brand.500", "brand.400");

  const { routes } = props;
  const userToken = JSON.parse(localStorage.getItem("data"));
  // useEffect(()=>{
    
  // },[])

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };
  const handleRouteClick = (routeLayout) => {
    const userContextData = useContext(userContext)
    const history = useHistory()
    if(routeLayout === "/auth"){
      console.log("logout enters")
		  doLogout(() => {
			//logged out
			// setLogin(false)
			userContextData.setUser({
				data: null,
				login: false
			})
  
			history.push("/auth/sign-in")
		})
    }
  }

  // this function creates the links from the secondary accordions (for example auth -> sign-in -> default)
  const createLinks = (routes) => {

    console.log(routes)
    return routes.map((route, index)=>{
      return <NavLink key={index} to={route.layout + route.path} >
             {/* {route.icon ? ( */}
             {/* <div onClick={handleRouteClick(route.layout)}>  */}
             <div>
              <Box>
                <HStack
                  spacing={
                    activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
                  }
                  py='5px'
                  ps='10px'>
                  <Flex w='100%' alignItems='center' justifyContent='center'>
                    <Box
                      color={
                        activeRoute(route.path.toLowerCase())
                          ? activeIcon
                          : textColor
                      }
                      me='18px'>
                      {route.icon}
                    </Box>
                    <Text
                      me='auto'
                      color={
                        activeRoute(route.path.toLowerCase())
                          ? activeColor
                          : textColor
                      }
                      fontWeight={
                        activeRoute(route.path.toLowerCase())
                          ? "bold"
                          : "normal"
                      }>
                      {route.name}
                    </Text>
                  </Flex>
                  <Box
                    h='36px'
                    w='4px'
                    bg={
                      activeRoute(route.path.toLowerCase())
                        ? brandColor
                        : "transparent"
                    }
                    borderRadius='5px'
                  />
                </HStack>
              </Box>
              </div>
            {/* )} */}
      </NavLink>
      // return <h1>Hii</h1>
    })
    // return routes.map((route, index) => {
    //   if (route.category) {
    //     return (
    //       <>
    //         <Text
    //           fontSize={"md"}
    //           color={activeColor}
    //           fontWeight='bold'
    //           mx='auto'
    //           ps={{
    //             sm: "10px",
    //             xl: "16px",
    //           }}
    //           pt='18px'
    //           pb='12px'
    //           key={index}>
    //           {route.name}
    //         </Text>
    //         {createLinks(route.items)}
    //       </>
    //     );
    //   } else if (
    //     route.layout === "/admin" ||
    //     route.layout === "/employee" ||
    //     route.layout === "/auth" ||
    //     route.layout === "/rtl"
    //   ) {
    //     return (
    //       <NavLink key={index} to={route.layout + route.path}>
    //         {route.icon ? (
    //           <Box>
    //             <HStack
    //               spacing={
    //                 activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
    //               }
    //               py='5px'
    //               ps='10px'>
    //               <Flex w='100%' alignItems='center' justifyContent='center'>
    //                 <Box
    //                   color={
    //                     activeRoute(route.path.toLowerCase())
    //                       ? activeIcon
    //                       : textColor
    //                   }
    //                   me='18px'>
    //                   {route.icon}
    //                 </Box>
    //                 <Text
    //                   me='auto'
    //                   color={
    //                     activeRoute(route.path.toLowerCase())
    //                       ? activeColor
    //                       : textColor
    //                   }
    //                   fontWeight={
    //                     activeRoute(route.path.toLowerCase())
    //                       ? "bold"
    //                       : "normal"
    //                   }>
    //                   {route.name}
    //                 </Text>
    //               </Flex>
    //               <Box
    //                 h='36px'
    //                 w='4px'
    //                 bg={
    //                   activeRoute(route.path.toLowerCase())
    //                     ? brandColor
    //                     : "transparent"
    //                 }
    //                 borderRadius='5px'
    //               />
    //             </HStack>
    //           </Box>
    //         ) : (
    //           <Box>
    //             <HStack
    //               spacing={
    //                 activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
    //               }
    //               py='5px'
    //               ps='10px'>
    //               <Text
    //                 me='auto'
    //                 color={
    //                   activeRoute(route.path.toLowerCase())
    //                     ? activeColor
    //                     : inactiveColor
    //                 }
    //                 fontWeight={
    //                   activeRoute(route.path.toLowerCase()) ? "bold" : "normal"
    //                 }>
    //                 {route.name}
    //               </Text>
    //               <Box h='36px' w='4px' bg='brand.400' borderRadius='5px' />
    //             </HStack>
    //           </Box>
    //         )}
    //       </NavLink>
    //     );
    //   }
    // });
  };
  //  BRAND
  return createLinks(routes);
}

export default SidebarLinks;
