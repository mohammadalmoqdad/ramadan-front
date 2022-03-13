import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  /* justify-content: center; */
align-items: flex-start;
  /* flex-direction: row-reverse; */
`;
export const Div = styled.div`
  display: flex;
  width: 100%;
  /* justify-content: center; */
  /* align-items: flex-start; */
  flex-direction: column;

  /* flex-direction: row-reverse; Div*/
`;

// **************** First section **********************
export const StatisticsSection = styled.div`

  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const StatisticsContainer = styled.div`
  padding: 1rem;
  min-width: 8rem;
  max-height: 10rem;
  border: 5px solid black;
  border-radius: 6rem;
  text-align: center;
`;

export const StatisticsNumber = styled.p``;

export const StatisticsTitle = styled.p``;

export const StatiticsNote = styled.p`
  font-size: small;
`;

// **************** Second section **********************
export const IntroductionSection = styled.section``;

// **************** Third section **********************
export const VideoSection = styled.section``;
