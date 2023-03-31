import styled from "styled-components";
import {
  WirdMinIntroduction as DefaultWirdMinIntroduction,
  Introduction as DefaultIntroduction,
  BorderBottom as DefaultBorderBottom,
} from "../shared/styles";

export const HomeContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  margin: auto;

  @media (max-width: 700px) {
    margin: auto;
  }
  @media (max-width: 550px) {
    margin: auto;
  }
  @media (max-width: 375px) {
    margin: auto;
  }
`;

// **************** First section **********************
export const StatisticItemBody = styled.div`
  color: #2980b9 !important;
  font-weight: bold;
  text-align: center;
  padding: 2rem 0 10px 0;
  font-family: "Noto Kufi Arabic", sans-serif;
  font-size: 0.9rem;
  border-bottom: 0.1px solid silver;
  @media (max-width: 1100px) {
    font-size: 0.6rem;
    font-weight: bold;
  }
`;

export const StatisticsSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

// **************** Second section ********************** WirdMinIntroduction Introduction
export const IntroductionSection = styled.div`
  margin: auto;
  margin-top: 2rem;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  padding-bottom: 4rem;
  flex-direction: column;

  @media (max-width: 700px) {
    margin: auto;
    margin-top: 2rem;
  }

  @media (max-width: 550px) {
    margin: auto !important;
    margin-top: 2rem;
  }
`;

export const IntroductionSectionDiv = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 1000px) {
    justify-content: center;
    align-items: flex-start;
    text-align: center;
  }
  @media (max-width: 700px) {
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    margin: auto;
  }

  @media (max-width: 650) {
    margin: auto;
    margin-right: auto;

    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const IntroductionDiv = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;

  @media (max-width: 1100px) {
    margin-right: 5rem;
  }

  @media (max-width: 1000px) {
    margin: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1000px) {
    margin: auto;
    justify-content: center;
    align-items: flex-start;
  }
`;
export const WirdLogoInHome = styled.div`
  justify-content: center;
  align-items: flex-start;
  > img {
    @media (max-width: 1100px) {
      width: 150;
    }
  }
  @media (max-width: 1000px) {
    margin: auto;
    justify-content: center;
  }
  @media (max-width: 550px) {
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
  }
`;

export const Wird = styled.h1`
  min-height: 55px;
  margin-top: 2rem;
  text-align: center;
  font-family: "Noto Kufi Arabic", sans-serif;
  font-size: 1.5rem;
  color: orange;
  @media (max-width: 1100px) {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const WirdMinIntroduction = styled(DefaultWirdMinIntroduction)`
  @media (max-width: 1100px) {
    font-size: 1.4rem;
    font-weight: bold;
  }

  @media (max-width: 1000px) {
    margin: auto;
    text-align: center;
  }
  @media (max-width: 900px) {
    margin: auto;
    padding-right: 0rem;
  }
  @media (max-width: 650px) {
    padding-right: 0rem;

    margin: auto;
    margin-top: 2rem;
    text-align: center;
  }
  @media (max-width: 550px) {
    margin: auto;
    margin-top: 2rem;
  }
`;

export const Introduction = styled(DefaultIntroduction)`
  @media (max-width: 1100px) {
    font-size: 1rem;
    margin-top: 1rem;
  }
  @media (max-width: 1000px) {
    text-align: center;
  }
  @media (max-width: 700px) {
    margin-left: 1rem;
  }
  @media (max-width: 650px) {
    margin: auto;
    margin-top: 1rem;
  }
  @media (max-width: 600px) {
    width: 17rem;
  }
`;

export const BorderBottom = styled(DefaultBorderBottom)`
  width: 80%;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  @media (max-width: 650px) {
    margin-top: 2rem;
  }
`;

// **************** Third section **********************
export const VideoSection = styled.div`
  width: 90%;
  height: 20rem;
  background-color: silver;
  margin: auto;
  margin-left: 2rem;
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  margin-top: 3rem;
  @media (max-width: 650px) {
    justify-content: center;
    align-items: flex-start;
    display: flex;
    margin: auto;
    margin-top: 2rem;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`;
