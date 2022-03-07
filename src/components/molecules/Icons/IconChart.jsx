import React from "react";
import { Icon } from "@chakra-ui/react";

export const IconChart = ({ ...props }) => {
  return (
    <Icon
      width="20px"
      height="20px"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 12.9V5.20001" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M4.89999 12.9V7.70001" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M8.79999 12.9V1" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M12.6 12.9V2.79999" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round"/>
    </Icon>
  );
};
