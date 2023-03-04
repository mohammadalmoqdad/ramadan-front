import styled from "styled-components";

export default styled.div`
  display: flex;
  margin: auto;
  width: auto;
  /* height: auto; */

  background: #fbf9f7;
  border-radius: 1.5rem;

  max-width: 59.3125rem;
  @media (max-width: 90.25rem) {
    width: auto;
  }
`;

export const TopRanksAndParticipants = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0rem;
  gap: 2.625rem;
  margin: auto;
  /* margin-left: 1.5rem;
margin-right: 1.5rem; */
  margin: 1.5rem;
  width: 100%;
  /* height: 8.625rem; */
  max-width: 59.3125rem;

  @media (max-width: 90.25rem) {
    width: auto;
    align-items: flex-start;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  @media (max-width: 62.5rem) {
    flex-direction: column;
  }

  @media (max-width: 31.25rem) {
    flex-direction: column;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const ParticipantsMember = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0rem;
  gap: 0.75rem;

  width: 18.375rem;
  height: auto;

  @media (max-width: 31.25rem) {
    width: 12.5rem;
  }
`;

export const ParticipantsTitels = styled.div`
  justify-content: space-between;

  width: 100%;
  height: 1.25rem;
  display: flex;

  @media (max-width: 37.5625rem) {
  }
`;
export const TopRanksSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0rem;
  gap: 0.75rem;

  /* width: 35.5rem; */
  /* height: 8.625rem; */
  height: auto;

  @media (max-width: 87.5rem) {
    width: 18.375rem;
  }
  @media (max-width: 31.25rem) {
    width: 12.5rem;
  }
`;

export const ParticipantsNumbers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.5rem;
  gap: 1.5rem;
  width: 100%;
  background: #f9eaea;
  border-radius: 1.5rem;
  max-width: 35.4375rem;
  justify-content: flex-start;

  @media (max-width: 31.25rem) {
    padding: 0.75rem;
    gap: 0.125rem;
    justify-content: center;
  }
`;

export const ParticipantsTitelsAtHome = styled.div`
  width: 6.25rem;
  height: 1.1875rem;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: center;

  color: #000000;
  @media (max-width: 37.5625rem) {
  }
`;

export const SeeAll = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0rem;
  gap: 0.375rem;

  /* position: absolute; */
  width: 4.875rem;
  height: 1.25rem;

  @media (max-width: 37.5625rem) {
  }
`;

export const SeeAllP = styled.div`
  width: 3.25rem;
  height: 1.1875rem;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: right;

  color: #ff5367;

  @media (max-width: 37.5625rem) {
  }
`;

export const SeeAllIcon = styled.img`
  @media (max-width: 37.5625rem) {
  }
`;

export const TotalOfMembers = styled.div`
  width: 4.875rem;
  height: 3.625rem;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  line-height: 3.6875rem;

  color: #000000;
  @media (max-width: 31.25rem) {
    height: 2.1875rem;
    font-size: 2.1875rem;
    line-height: 2.1875rem;
  }
`;

export const MemberImgsAndNumNumbers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0rem;
  gap: 0.75rem;

  width: 8.875rem;
  height: 2.25rem;
  @media (max-width: 31.25rem) {
    gap: 0.125rem;
  }
`;

export const MembersImgs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0rem;
  position: relative;
  width: 6rem;
  height: 2.25rem;
  @media (max-width: 31.25rem) {
    align-items: center;
  }
`;

export const MemberNumbers = styled.div`
  width: 2.125rem;
  height: 1.0625rem;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  /* identical to box height */
  text-align: center;
  color: #a79f97;

  @media (max-width: 37.5625rem) {
  }
`;

export const MembersImg = styled.div`
  position: absolute;
  /*  */
  background: #fdd561;
  border-radius: 0.75rem;
  width: 2.25rem;
  height: 2.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  /* identical to box height */
  text-align: center;

  color: #000000;

  @media (max-width: 31.25rem) {
    border-radius: 0.5rem;
    width: 1.875rem;
    height: 1.875rem;
  }
`;

export const Top3Rank = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.4375rem 1.5rem;

  width: 35.4375rem;
  height: 6.625rem;

  background: #f9eaea;
  border-radius: 1.5rem;

  @media (max-width: 37.5625rem) {
  }
`;

export const ParticipantsNumbersRanks = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  padding: 0rem;
  @media (max-width: 87.5rem) {
    flex-direction: column;
    /* width: 100%; */
    align-items: flex-start;
    /* margin: auto; */
  }
  @media (max-width: 31.25rem) {
    justify-content: center;
  }
`;

export const Top3RankDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0rem;
  gap: 0.75rem;

  width: 11.8125rem;
  /* height: 3.75rem; */

  @media (max-width: 87.5rem) {
    margin-top: 0.3125rem;
    width: auto;
  }
  @media (max-width: 31.25rem) {
    /* gap: .125rem; */
  }
`;

export const Top1Img = styled.div`
  background: #fdd561;
  border-radius: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.0625rem;
  text-align: center;

  color: #000000;
  width: 3.75rem;
  height: 3.75rem;
  @media (max-width: 87.5rem) {
    width: 2.25rem;
    height: 2.25rem;
    font-size: 0.875rem;
    font-size: 0.875rem;
  }
`;

export const Top1Name = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25rem;

  color: #000000;
  width: 7.3125rem;
  @media (max-width: 87.5rem) {
    width: auto;
  }
`;

export const Top2Name = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  /* identical to box height */
  width: 7.3125rem;

  color: #000000;

  @media (max-width: 87.5rem) {
    /* width: auto; */
  }
`;

export const Top2Img = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  background: #fdd561;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  text-align: center;
  color: white;
  @media (max-width: 37.5625rem) {
  }
`;
