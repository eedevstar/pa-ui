import { Flex, Spacer, Box, Heading, Link, VStack, Stack, Text, Input, Button, useColorMode  } from "@chakra-ui/react";
import React from "react";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import BodyContainer from "../../components/ui/BodyContainer";

export const Setting = () => {
  const { colorMode, toggleColorMode } = useColorMode();  

  return (
    <Flex flexFlow="column" height="100vh">
      <Flex pt={7} px='5'>
        <Heading 
          size="lg"
          fontSize={"2xl"}
          color="white"
        >
          Setting
        </Heading>
      </Flex>
      <BodyContainer>
        <VStack align="stretch" gap='2'>
          <Button colorScheme='blue' onClick={toggleColorMode}>Switch Theme : { colorMode === "light" ? "Dark" : "Light" }</Button>
        </VStack>
        
      </BodyContainer>
    </Flex>
  );
}