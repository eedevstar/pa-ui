import { Center, Box, Heading, Text, VStack, Flex, Spacer, Divider, Link } from "@chakra-ui/react";
import React, { Component } from "react";
import { IconChart, IconCalendar, IconTank, IconCompany } from "../../components/molecules/Icons";
import { IconWithText } from "./IconWithText";
import { CloseIcon, ChevronRightIcon } from '@chakra-ui/icons'

import LineChart from "../../components/charts/LineChart";
import BubbleChart from "../../components/charts/BubbleChart";
import BodyContainer from "../../components/ui/BodyContainer";
import Card from "../../components/Card/Card";
import CardGradient from "../../components/Card/CardGradient";
import CardBody from "../../components/Card/CardBody";

import {
  bubbleChartData,
  bubbleChartOptions,
  lineChartDataCharts2,
  lineChartOptionsCharts2
} from "./Data/ChartData";

export const Dashboard = () => {
  return (
    <Flex flexFlow="column" height="100vh">
      <Heading 
          size="lg"
          fontSize={"2xl"}
          pt={7} 
          px='5'
          color="white"
        >
        Dashboard
        <Text fontSize='xs' fontWeight="normal">Data Graphs</Text>
      </Heading>
      <BodyContainer>
        <VStack align="stretch" gap='2'>
          <Card
            px={6}
            py={5}
          >
            <CardBody py='2' px='3' >
              <IconWithText icon={<IconChart />} text='Contributions' />
              <Spacer />
              <IconWithText icon={<IconChart />} text='Price' opacity='0.4'/>
            </CardBody>
          </Card>

          <Box>
            <BubbleChart
              chartData={bubbleChartData}
              chartOptions={bubbleChartOptions}
            />
          </Box>

          <Card
            px={6}
            py={5}
          >
            <CardBody py='2' px='3' >
              <IconWithText icon={<IconCalendar />} text='Dates' />
              <Spacer />
              <IconWithText icon={<IconTank />} text='Tank Size' />
              <Spacer />
              <IconWithText icon={<IconCompany />} text='Company' />
            </CardBody>
          </Card>

          <CardGradient
            px={6}
            py={5}
          >
            <Flex py='2' px='3'>
              <Text opacity='0.4'>Lowest Price</Text>
              <Spacer />
              <Text>1.5$/gal</Text>
            </Flex>
            <Divider />
            <Flex py='2' px='3'>
              <Text opacity='0.4'>Company</Text>
              <Spacer />
              <Text>PropaneCo</Text>
            </Flex>
          </CardGradient>
          
          <Card
            px={6}
            py={5}
          >
            <CardBody py='2' px='3' >
              <Text>Compare Companies</Text>
              <Spacer />
              <Link href='#'>
                <CloseIcon w={4} h={4}/>
              </Link>
            </CardBody>
          </Card>

          <Box> 
            <LineChart
                chartData={lineChartDataCharts2}
                chartOptions={lineChartOptionsCharts2}
              />
          </Box>

          <Card
            px={6}
            py={5}
          >
            <CardBody py='2' px='3' >
              <Spacer />
              <Text color='#CF2D2D'>PropaneCo</Text>
              <ChevronRightIcon w='5' h='6' />
              <Spacer />
              <Text color='#003A58'>GasCompany</Text>
              <ChevronRightIcon w='5' h='6' />
              <Spacer />
            </CardBody>
          </Card>

          <Card
            px={6}
            py={5}
          >
            <CardBody py='2' px='3' >
              <Spacer />
              <IconWithText icon={<IconCalendar />} text='Dates' />
              <Spacer />
              <IconWithText icon={<IconTank />} text='Tank Size' />
              <Spacer />
            </CardBody>
          </Card>

          <CardGradient
            px={6}
            py={5}
          >
            <Flex py='2' px='3'>
              <Text opacity='0.4'>PropaneCo Average</Text>
              <Spacer />
              <Text>1.5$/gal</Text>
            </Flex>
            <Divider />
            <Flex py='2' px='3'>
              <Text opacity='0.4'>GasCompany Average</Text>
              <Spacer />
              <Text>1.9$/gal</Text>
            </Flex>
          </CardGradient>

          <Box h='20'> 
          </Box>
        </VStack>
      </BodyContainer>
    </Flex>
  );
}