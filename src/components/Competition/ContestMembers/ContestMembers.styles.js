import styled from "styled-components";

export default styled.div`
  display: flex;
  margin: auto;
  width: auto;
  margin-top: 2rem;

  border-radius: 1.5rem;
  justify-content: center;

  max-width: 59.3125rem;
  @media (max-width: 90.25rem) {
  }
`;

export const TopRanksAndParticipants = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0rem;
  gap: 2.625rem;
  margin: auto;

  margin: 1.5rem;
  width: 100%;
  max-width: 59.3125rem;

  @media (max-width: 90.25rem) {
    width: auto;
    align-items: flex-start;
    gap: 1.625rem;
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

  width: 100%;
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
  /* background: #f9eaea; */
  background: #fbf9f7;

  border-radius: 1.5rem;
  max-width: 35.4375rem;
  justify-content: flex-start;

  @media (max-width: 500px) {
    padding: 0.75rem;
    gap: 0.125rem;
    justify-content: center;
  }
`;

export const ParticipantsTitelsAtHome = styled.div`
  /* width: 6.25rem; */
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
  /* width: 4.875rem; */
  height: 1.25rem;

  @media (max-width: 37.5625rem) {
  }
`;

export const SeeAllP = styled.div`
  /* width: 3.25rem; */
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
  flex-direction: row-reverse;
  justify-content: space-around;

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
