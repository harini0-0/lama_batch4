// Chakra imports
import {
  AvatarGroup,
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "./Card.js";
// Assets
import Nft1 from "../../assets/img/nfts/Nft1.png";
import Nft2 from "../../assets/img/nfts/Nft2.png";
import Nft3 from "../../assets/img/nfts/Nft3.png";
import Nft4 from "../../assets/img/nfts/Nft4.png";
import Nft5 from "../../assets/img/nfts/Nft5.png";
import Nft6 from "../../assets/img/nfts/Nft6.png";
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from "react-router-dom";
import { privateAxios } from "../../services/helper.js";
import 'react-toastify/dist/ReactToastify.css'; 
import React, { useState, useEffect } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

export default function ItemCard(props) {
  const { itemName, category, itemValuation, itemStatus, itemId, itemMake } = props;
  const imageArray = [Nft1, Nft2, Nft3, Nft4, Nft5, Nft6];
  const textColor = useColorModeValue("navy.700", "white");
  const textColorBid = useColorModeValue("brand.500", "white");
  const history = useHistory()
  const [error, setError] = useState(null)
  const [isCreated, setIsCreated] = useState(false)

  useEffect(() => {
    if(isCreated){
      toast("Item Loan Applied Successfully",
         {position: toast.POSITION.BOTTOM_CENTER})
      setIsCreated(false)
      history.push("/employee/default")
    }
    if(error){
      toast.error(error,
      {position: toast.POSITION.BOTTOM_CENTER})
      setError(null)
    }
  },[isCreated,error])
  const userToken = JSON.parse(localStorage.getItem("data"));
  const applyLoan = async (row, approveState) => {
    // e.preventDefault();
    // console.log(userToken)
    const myForm = new FormData();

    myForm.set("employeeId", userToken.id);
    myForm.set("itemId", itemId);
    myForm.set("loanType",category);
    

    const config = {
      headers: {
          "Content-Type": "application/json",
      },
  };

    await privateAxios.post(`/employee/applyloan/`, myForm, config)
    .then((response) => {
      console.log(response.data)
      setIsCreated(true)
    })
    .catch((err) => {
      console.log(err.message)
      setError(err.message)
    })
    
    // dispatch(createProduct(myForm));
  };

  return (
    <Card p='20px'>
      <Flex direction={{ base: "column" }} justify='center'>
        <Box mb={{ base: "20px", "2xl": "20px" }} position='relative'>
          <Image
            src={imageArray[itemId%6]}
            w={{ base: "100%", "3xl": "100%" }}
            h={{ base: "100%", "3xl": "100%" }}
            borderRadius='20px'
          />
        </Box>
        <Flex flexDirection='column' justify='space-between' h='100%'>
          <Flex
            justify='space-between'
            direction={{
              base: "row",
              md: "column",
              lg: "row",
              xl: "column",
              "2xl": "row",
            }}
            mb='auto'>
            <Flex direction='column'>
              <Text
                color={textColor}
                fontSize={{
                  base: "xl",
                  md: "lg",
                  lg: "lg",
                  xl: "lg",
                  "2xl": "md",
                  "3xl": "lg",
                }}
                mb='5px'
                fontWeight='bold'
                me='14px'>
                {itemName}
              </Text>
              <Text
                color='secondaryGray.600'
                fontSize={{
                  base: "sm",
                }}
                fontWeight='400'
                me='14px'>
                Category: {category}
              </Text>
              <Text
                color='secondaryGray.600'
                fontSize={{
                  base: "sm",
                }}
                fontWeight='400'
                me='14px'>
                Item Make: {itemMake}
              </Text>
            </Flex>
          </Flex>
          <Flex
            align='start'
            justify='space-between'
            direction={{
              base: "row",
              md: "column",
              lg: "row",
              xl: "column",
              "2xl": "row",
            }}
            mt='25px'>
            <Text fontWeight='700' fontSize='sm' color={textColorBid}>
              Item Valuation: {itemValuation}
            </Text>
            <Link
              href={""}
              mt={{
                base: "0px",
                md: "10px",
                lg: "0px",
                xl: "10px",
                "2xl": "0px",
              }}>
              <Button
                variant='darkBrand'
                color='white'
                fontSize='sm'
                fontWeight='500'
                borderRadius='70px'
                px='24px'
                py='5px'
                onClick={(itemId, category)=>{ }}
                >
                Apply Loan
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
