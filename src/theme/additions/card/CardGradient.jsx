/*!

=========================================================
* Purity UI Dashboard PRO - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/purity-ui-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design by Creative Tim & Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

const CardGradient = {
  baseStyle: {
    bg:'linear-gradient(90deg, #404F67 0.01%, #162946 64.04%, #041838 100.02%);',
    boxShadow:'2px 2px 3px rgba(4, 24, 56, 0.25);',
    rounded:'2xl',
    px:'6',
    py:'5',
    color: 'white'
  },
  variants: {
    panel: (props) => ({
      bg: props.colorMode === "dark" ? "rgba(0, 0, 0, .35)" : "linear-gradient(90deg, #404F67 0.01%, #162946 64.04%, #041838 100.02%);",
    }),
  },
  defaultProps: {
    variant: "panel",
  },
};

export const CardGradientComponent = {
  components: {
    CardGradient,
  },
};
