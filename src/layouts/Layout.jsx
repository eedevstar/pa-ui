import React from "react";

import { Routes } from "../routes";

import { Container } from "@chakra-ui/react";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <Container px="0">
      <Routes />
      <Footer />
    </Container>
  );
};
