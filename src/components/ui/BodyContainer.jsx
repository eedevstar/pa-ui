import { Box, useStyleConfig } from "@chakra-ui/react";
function BodyContainer(props) {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("BodyContainer", { variant });
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export default BodyContainer;