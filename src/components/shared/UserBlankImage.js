import styled from "@emotion/styled";
import { blankUserBackgroundColors, colors } from "styles";

export const UserBlankImage = styled.div`
  background-color: ${blankUserBackgroundColors[
    Math.floor(Math.random() * blankUserBackgroundColors.length)
  ]};
  padding: 1rem;
  border-radius: 1rem;
  color: ${colors.white};
  @media (max-width: 38rem) {
    font-size: x-small;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
  @media (min-width: 38rem) {
    font-size: small;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
`;
