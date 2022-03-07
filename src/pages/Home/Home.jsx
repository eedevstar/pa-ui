import { Center, Box, Heading, Text, VStack, Button, Flex, theme } from "@chakra-ui/react";
import React from "react";
import { IconLogo } from "../../components/molecules/Icons";
import BodyContainer from "../../components/ui/BodyContainer";

export const Home = () => {

  return (
    <Flex flexFlow="column" height="100vh">
      <Center pt={7} flex="0 1 auto" color="white">
        <VStack>
          <IconLogo />
          <Heading
            size="lg"
            fontSize={"2xl"}
            textTransform="uppercase"
          >
            Propan Pal
          </Heading>
          <Text fontSize={"md"} pt={6} px={5}>
            Welcome, PropanePal is a crowdsourced platform to help you find the
            cheapest propane - No more endless hours spent searching. <br />
            <br />
            Contribute to the database when you buy propane and help the
            community.
          </Text>
        </VStack>
      </Center>
      <BodyContainer>
        <VStack align="stretch">
          <Box
            bg="linear-gradient(90deg, #CF2D2D 2272%, #962121 22845%);"
            boxShadow={"2px 2px 3px rgba(4, 24, 56, 0.24);"}
            rounded={"2xl"}
            px={5}
            pt={2}
            pb={5}
            mb={2}
            color="white"
          >
            <Text align="center" fontSize={"lg"}>
              Todays Lowest price
            </Text>
            <Center mt={3} fontSize={"lg"}>
              <Text align="center">2.58 $/gal</Text>
              <Box borderLeft="1px solid white" h={6} mx={5} />
              <Text align="center">PropaneCo</Text>
            </Center>
          </Box>

          <Box
            bg="linear-gradient(90deg, #CF2D2D 0%, #962121 100%);"
            boxShadow={"2px 2px 3px rgba(4, 24, 56, 0.25);"}
            rounded={"2xl"}
            px={6}
            py={5}
            color="white"
          >
            <Center fontSize={"lg"}>
              <Text pr="10">Total contributed prices</Text>
              <Text>12 437</Text>
            </Center>
          </Box>
        </VStack>
      </BodyContainer>
    </Flex>
  );
};
