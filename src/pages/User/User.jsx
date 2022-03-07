import { Flex, Spacer, Box, Heading, Link, VStack, Stack, Text, Input  } from "@chakra-ui/react";
import React from "react";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import BodyContainer from "../../components/ui/BodyContainer";

export const User = () => {

  return (
    <Flex flexFlow="column" height="100vh">
      <Flex pt={7} px='5'>
        <Heading 
          size="lg"
          fontSize={"2xl"}
          color="white"
        >
          User
        </Heading>
      </Flex>
      <BodyContainer>
        <VStack align="stretch" gap='2'>
          <Card
            px={6}
            py={5}
          >
            <CardBody py='2' px='3' >
              <Text w='140px'>
                User
              </Text>
              <Text flex='1'>
                User
              </Text>
            </CardBody>
          </Card>
          
        </VStack>
        
      </BodyContainer>
    </Flex>
  );
}