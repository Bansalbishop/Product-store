import { Container, Flex, Text, HStack, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { FaPlusSquare } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { Link } from 'react-router-dom';
;

const Navbar = () => {
    const { colorMode, toggleColorMode}=useColorMode();

  


  return (
    <Container maxW={"1140px"} px={4} >
    <Flex h={16} alignItems={"center"} justifyContent={"space-between"}
    flexDir={{
        base:"column",
        sm:"row"
    }}>

    <Text fontSize={{
        base:"22",
        sm:"28"
    }} 
    fontWeight={"bold"}
    textTransform={"uppercase"}
    textAlign={"center"}
    bgGradient={"linear(to-r, cyan.400, blue.500)"}
    bgClip={"text"}
    >
        <Link to={"/"} >Product Store</Link>
    </Text>
    <HStack spacing={2} alignItems={"center"}>
        <Link to={"/create"}>
            <Button>
                <FaPlusSquare size={"20"} />
            </Button>
        </Link>
        <Button onClick={toggleColorMode} >
            {colorMode === "light"? <FaSun size={"20"} /> :<FaMoon size={"20"} />}

        </Button>
    </HStack>

    </Flex>

      
    </Container>
  )
}

export default Navbar
