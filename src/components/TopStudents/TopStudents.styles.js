import styled from "styled-components";
import { colors, spacing } from "styles";
import { DropdownList, Span } from "../Admins/Admins.styles";
import {
  Top3RankDiv as DefaultTop3RankDiv,
  Top2Img as DefaultTop2Img,
  Top2Name,
} from "../Home/TopRanks/TopRanks.styles";

export const TopStudentsDropdownList = styled(DropdownList)`
  width: 35rem;
  @media (max-width: 500px) {
    margin: 10px 0;
    /* width: 100%; */
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
  width: 30px;
  height: 19px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  color: #000000;
`;

export const LeaderBoardContainer = styled.div`
  width: auto;
  display: flex;
  margin: auto;
  /* align-items: center; */
  gap: 12px;

  justify-content: center;
  flex-direction: column;
`;

export const StudentPointsWrapper = styled.div`
  align-items: center;
  background-color: ${colors.warmWheat};
  display: flex;
  justify-content: space-between;
  padding: ${spacing.s};
  flex-direction: var(--flex-direction);

  /* padding: 23px 24px; */
  width: auto;
  height: 106px;
  border-radius: 24px;
  max-width: 961px;
  margin: auto;
`;

export const SecondaryWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const WarbSlider = styled.div`
  display: flex;
  margin-left: 1rem;
  align-items: center;
  width: auto;
  gap: 12px;
  white-space: nowrap;
  overflow-x: scroll;
  &::-webkit-slider-track {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #4caf50;
    cursor: pointer;
  }
  /* overflow: hidden; */
  /* cursor: grab; */
`;

export const AverageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p:first-child {
    font-size: small;
  }
  p:nth-child(2) {
    font-size: medium;
  }
`;

// ameen edite html *************************

export const LeaderBoardMain = styled(DefaultTop3RankDiv)`
  /* display: flex; */
  margin: auto;
  width: auto;
  flex-direction: column;
  max-width: 961px;
  align-items: flex-start;
`;
export const LeaderBoardMainTitel = styled(DefaultTop3RankDiv)`
  height: 19px;
  width: auto;
  margin: auto;
  margin-left: 0;
  align-items: flex-start;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  color: #000000;
`;

export const Top3RankDiv = styled(DefaultTop3RankDiv)`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const Top2Img = styled(DefaultTop2Img)`
  width: 60px;
  height: 60px;
`;
export const DayInAverageWrapper = styled.div`
  width: 87px;
  height: 17px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #a79f97;
`;
export const PAverageWrapper = styled.div`
  width: auto;
  height: 17px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #a79f97;
`;
export const AverageParsents = styled.div`
  width: 55px;
  height: 19px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  color: #000000;
`;
export const DivLine = styled.div`
  border-left: 1px solid #ffbac2;
  height: 60px;
`;
