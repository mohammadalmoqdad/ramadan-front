import styled from "styled-components";
import { colors, spacing } from "styles";
import { DropdownList, Span } from "../Admins/Admins.styles";

export const TopStudentsDropdownList = styled(DropdownList)`
  width: 35rem;
  @media (max-width: 500px) {
    margin: 10px 0;
    width: 100%;
    .dropdown-scroll-container {
      max-height: 350px;
    }
  }
`;

export const TopStudentsSpan = styled(Span)`
  text-align: center;
  /* display: inline-flex;
  align-items: center;
  justify-content: center; */
`;

export const LeaderBoardContainer = styled.div`
  width: 80%;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
`;

export const StudentPointsWrapper = styled.div`
  align-items: center;
  background-color: ${colors.warmWheat};
  display: flex;
  justify-content: space-evenly;
  padding: ${spacing.s};
  flex-direction: var(--flex-direction);
  /* width: 100%; */
`;

export const SecondaryWrapper = styled.div`
  display: flex;
`;

export const AverageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  p:first-child {
    font-size: small;
  }
  p:nth-child(2) {
    font-size: medium;
  }
`;
