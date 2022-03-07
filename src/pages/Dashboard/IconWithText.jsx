import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const IconWithText = ({ icon, text, ...props }) => {
  return (
    <Box display='flex' {...props}>
      {icon}
      <Text ml='2'>{text}</Text>
    </Box>
  );
};
