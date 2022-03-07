
const BodyContainer = {
  baseStyle: {
    flex: "1 1 auto",
    
    borderTopLeftRadius:"3xl",
    borderTopRightRadius:"3xl",
    pt:7,
    px:4,
    mt:7,
  },
  variants: {
    panel: (props) => ({
      bgColor: props.colorMode==='light'?'theme.light':'theme.dark',
      
    }),
  },
  defaultProps: {
    variant: "panel",
  },
};

export const BodyContainerComponent = {
  components: {
    BodyContainer,
  },
};
