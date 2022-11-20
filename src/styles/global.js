import { css } from "styled-components";
import { colors } from "styles";

export default (theme) => {
  console.log(theme);
  return css`
    // theme can be black or white / arabic or english
    :root {
      // ****************** Goal: provide variables that will be used when changing from Arabic to English + to make the styles sharable and easily changeable  ************************
      // ****************** here to add the css variables and because they are inside the root they will be applied to the whole app. ************************

      // colors:

      // backgrounds:
      --background-disabled: ${colors.lightGrey}; // just an example for the color, value can be changed.

      --flex-direction: ${theme.flex.direction};
    }
  `;
};
