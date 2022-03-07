import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { CardComponent } from "./additions/card/Card";
import { CardBodyComponent } from "./additions/card/CardBody";
import { CardGradientComponent } from "./additions/card/CardGradient";
import { BodyContainerComponent } from "./additions/ui/BodyContainer";

export default extendTheme(
  globalStyles,
  CardComponent, // Card component
  CardBodyComponent, // Card Body component
  CardGradientComponent, // Card compoenent with gradient bg
  BodyContainerComponent, // Body Content component
);