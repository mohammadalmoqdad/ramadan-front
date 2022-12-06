import styled from "styled-components";

import { RightLeftArrow as DefaultRightLeftArrow } from "../DaysSlider/DaysSlider.styles";

import {
  TopRanksAndParticipants as DefaultTopRanksAndParticipants,
  ParticipantsNumbersRanks as DefaultParticipantsNumbersRanks,
  Top1Img as DefaultTop1Img,
  Top1Name as DefaultTop1Name,
  Top2Name as DefaultTop2Name,
  Top3RankDiv as DefaultTop3RankDiv,
  ParticipantsMember as DefaultParticipantsMember,
  TopRanksSection as DefaultTopRanksSection,
  ParticipantsNumbers as DefaultParticipantsNumbers,
} from "../TopRanks/TopRanks.styles";

export default styled.div`
  margin: auto;
  margin-top: 3rem;
  width: 100%;
  border-radius: 1.5rem;
  max-width: 59.375rem;

  @media (max-width: 87.5rem) {
    width: auto;
  }
`;
export const RightLeftPastContests = styled.div`
  display: flex;
  margin: auto;
  width: auto;
  justify-content: space-between;

  @media (max-width: 62.5rem) {
    flex-direction: column;
    /* margin */
  }
`;

export const TopRank = styled.div`
  display: flex;
  margin: auto;
  width: auto;
  /* height: auto; */

  background: #fbf9f7;
  border-radius: 1.5rem;

  max-width: 59.3125rem;
  margin-top: 2rem;
  width: 90%;
  align-items: flex-start;
  /* max-width: ; */
  @media (max-width: 87.5rem) {
    width: 90%;
    align-items: flex-start;
  }
  @media (max-width: 62.5rem) {
    margin-top: 1rem;
    align-items: flex-start;
  }
`;

export const MyOngoingContestDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  @media (max-width: 87.5rem) {
  }
`;

export const VictorArrows = styled.div`
  display: flex;
  width: (10rem);
  @media (max-width: 87.5rem) {
  }
`;

export const RightLeftArrow = styled(DefaultRightLeftArrow)`
  display: flex;
  margin-left: 1rem;
  @media (max-width: 87.5rem) {
  }
`;

export const TopRanksAndParticipants = styled(DefaultTopRanksAndParticipants)`
  width: 100%;
  align-items: flex-start;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  flex-direction: column;

  @media (max-width: 87.5rem) {
  }
`;

export const ParticipantsNumbersRanks = styled(DefaultParticipantsNumbersRanks)`
  flex-direction: column;

  justify-content: center;
  width: 100%;

  @media (max-width: 87.5rem) {
  }
`;

export const ParticipantsNumbers = styled(DefaultParticipantsNumbers)`
  justify-content: space-around;

  @media (max-width: 87.5rem) {
  }
`;

export const Top1Img = styled(DefaultTop1Img)`
  width: 2.25rem;
  height: 2.25rem;
  font-size: 0.875rem;
  font-size: 0.875rem;
  @media (max-width: 87.5rem) {
  }
`;

export const Top1Name = styled(DefaultTop1Name)`
  width: auto;
  @media (max-width: 87.5rem) {
  }
`;

export const Top2Name = styled(DefaultTop2Name)`
  width: auto;
  @media (max-width: 87.5rem) {
  }
`;

export const Top3RankDiv = styled(DefaultTop3RankDiv)`
  margin-top: 0.3125rem;
  width: auto;
  @media (max-width: 87.5rem) {
  }
`;
export const ParticipantsMember = styled(DefaultParticipantsMember)`
  width: 100%;
  @media (max-width: 31.25rem) {
    width: 100%;
  }
`;

export const LeftPastContests = styled.div`
  width: 100%;
  @media (max-width: 87.5rem) {
  }
`;

export const TitelPastContests = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25rem;

  color: #a79f97;
  @media (max-width: 87.5rem) {
  }
`;

export const TopRanksSection = styled(DefaultTopRanksSection)`
  width: 100%;
  @media (max-width: 87.5rem) {
  }
`;

export const SeeContestResult = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem 1.5rem 1.3125rem;
  gap: 0.625rem;

  width: 100%;
  height: 3.75rem;

  background: #fdd561;
  border-radius: 6.25rem;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25rem;

  color: #000000;
  @media (max-width: 87.5rem) {
  }
`;
