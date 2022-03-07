import React, { useEffect } from "react";
import { Center, Flex, Spacer, useColorMode } from "@chakra-ui/react";
import {
  IconDashboard,
  IconHome,
  IconUser,
  IconSettings,
  IconLogoPlus,
} from "../../components/molecules/Icons";
import FooterItem from "./FooterItem";

export const Footer = ({ menu }) => {
  const { colorMode, toggleColorMode } = useColorMode(); 

  return (
    <Flex
      pos="fixed"
      bottom="0"
      left="0"
      w="100%"
      h="80px"
      pb="20px"
      alignItems="self-end"
      bgColor={colorMode==='light'?'theme.light':'theme.dark'}
    >
      <Spacer />
      <FooterItem Icon={IconHome} link='/home' />
      <Spacer />
      <FooterItem Icon={IconDashboard} link='/dashboard' />
      <Spacer />
      <FooterItem Icon={IconLogoPlus} link='/addnew' mb='-10px' />
      <Spacer />
      <FooterItem Icon={IconUser} link='/user' />
      <Spacer />
      <FooterItem Icon={IconSettings} link='/setting' />
      <Spacer />
    </Flex>
  );
};
