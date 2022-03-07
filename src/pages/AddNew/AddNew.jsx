import { Flex, Spacer, Box, Heading, Link, VStack, Stack, Text, Input  } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React from "react";
import { CloseIcon } from '@chakra-ui/icons'
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import BodyContainer from "../../components/ui/BodyContainer";

export const AddNew = () => {
  let tab_style = { color: 'white', bg: 'red.500', py: '5', borderRadius: '15' };

  return (
    <Flex flexFlow="column" height="100vh">
      <Flex pt={7} px='5'>
        <Heading 
          size="lg"
          fontSize={"2xl"}
          color="white"
        >
          Add New Price
        </Heading>
        <Spacer />
        <Link href='/home' p='2' color="white">
          <CloseIcon w={4} h={4}/>
        </Link>
      </Flex>
      <Box mt='10'>
        <Tabs isFitted variant='unstyled' defaultIndex={3}>
          <TabList>
            <Tab _selected={tab_style} color='whiteAlpha.300'>M<br/>11</Tab>
            <Tab _selected={tab_style} color='whiteAlpha.700'>T<br/>12</Tab>
            <Tab _selected={tab_style} color='whiteAlpha.900'>W<br/>13</Tab>
            <Tab _selected={tab_style}>T<br/>14</Tab>
            <Tab _selected={tab_style} color='whiteAlpha.900'>F<br/>15</Tab>
            <Tab _selected={tab_style} color='whiteAlpha.700'>S<br/>16</Tab>
            <Tab _selected={tab_style} color='whiteAlpha.300'>S<br/>17</Tab>
          </TabList>
        </Tabs>
      </Box>
      <BodyContainer>
        <VStack align="stretch" gap='2'>
          <Card
            px={6}
            py={5}
          >
            <CardBody py='2' px='3' >
              <Text w='140px'>
                Tank Size
              </Text>
              <Text flex='1'>
                300 gal
              </Text>
            </CardBody>
          </Card>

          <Card
            px={6}
            py={5}
          >
            <CardBody py='2' px='3' >
              <Text w='140px'>
                Company
              </Text>
              <Text flex='1'>
                PropaneCo
              </Text>
            </CardBody>
          </Card>

          <Card
            px={6}
            py={5}
          >
            <CardBody py='0' px='3' >
              <Text w='140px' pt='2'>
                Price
              </Text>
              <Input flex='1' border='0' borderColor='white' px='0' placeholder='Enter Price'/>
            </CardBody>
          </Card>

          <Card
            px={6}
            py={5}
          >
            <CardBody py='0' px='3' >
              <Text w='140px' pt='2'>
              Zip Code
              </Text>
              <Input flex='1' border='0' borderColor='white' px='0' placeholder='Enter Zip Code'/>
            </CardBody>
          </Card>
          
        </VStack>
        
      </BodyContainer>
    </Flex>
  );
}