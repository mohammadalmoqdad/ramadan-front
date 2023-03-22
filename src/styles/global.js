import { colors } from "styles";
import { css } from "@emotion/react/macro";

export default (theme) => {
  return css`
    // theme can be black or white / arabic or english
    :root {
      // ****************** Goal: provide variables that will be used when changing from Arabic to English + to make the styles sharable and easily changeable  ************************
      // ****************** here to add the css variables and because they are inside the root they will be applied to the whole app. ************************

      // colors:

      // backgrounds:

      --background-disabled: ${colors.lightGrey}; // just an example for the color, value can be changed.
      // Flex:
      --flex-direction: ${theme.flex.direction};
      --align-items: ${theme.flex.align};

      // Text & Font:
      --font-family-head: ${theme.fonts.fontFamilyHeading};
      --font-family-main: ${theme.fonts.fontFamilyBody};
      --text-align: ${theme.text.textAlign};

      // Global:
      /* span{
        text-align: ${theme.text.textAlign};
      } */
    }
  `;
};
