import styled from "styled-components";
import { colors } from "styles";
export const BodyContent = styled.div`
  margin: 0;
  min-height: calc(100vh);
  background: ${colors.white};
  padding-top: 7rem;
  width: 85%;
  @media (max-width: 1000px) {
    width: 80%;
  }
  @media (max-width: 750px) {
    width: 75%;
  }
  @media (max-width: 550px) {
    width: 100%;
  }
`;
