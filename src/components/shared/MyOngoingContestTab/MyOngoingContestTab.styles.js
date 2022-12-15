import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  margin: auto;
  width: 90%;
  /* height: 108px; */
  max-width: 59.375rem;

  justify-content: space-between;
  background: #fbf9f7;
  border-radius: 24px;
  @media (max-width: 37.5625rem) {
  }
`;

export const MyOngoingContestIn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  /* width: 90%; */
  /* height: 60px; */

  @media (max-width: 37.5625rem) {
  }
`;

export const DropdownIcon = styled.img`
  display: flex;
  color: #000000;
  flex-direction: row-reverse;

  @media (max-width: 37.5625rem) {
  }
`;

export const DropDownContainer = styled.div`
  @media (max-width: 37.5625rem) {
  }
`;
export const DropDownHeader = styled.div`
  @media (max-width: 37.5625rem) {
  }
`;

export const DropDownListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 24px;
  gap: 24px;

  width: auto;
  height: 405px;
  margin: auto;
  margin-top: 32rem;

  background: #fbf9f7;
  border-radius: 24px;

  @media (max-width: 37.5625rem) {
  }
`;
export const DropDownList = styled.div`
  @media (max-width: 37.5625rem) {
  }
`;
export const ListItem = styled.div`
  @media (max-width: 37.5625rem) {
  }
`;

export const MyOngoingContests = styled.div`
  width: 60px;
  height: 60px;
  display: flex;

  background: #f9eaea;
  border-radius: 12px;
  @media (max-width: 670px) {
    /* width: 35px;
    height: 35px; */
  }
  @media (max-width: 400px) {
    width: 35px;
    height: 35px;
  }
`;
export const MyOngoingContestsIcon = styled.img`
  color: #000000;
  margin: auto;

  @media (max-width: 37.5625rem) {
  }
`;

export const MyOngoingContestsDescribtion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 6px;

  width: auto;
  /* height: 54px; */
  margin-left: 1rem;
  @media (max-width: 37.5625rem) {
  }
`;

export const MyOngoingContestsTitel = styled.div`
  height: 29px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  @media (max-width: 670px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const MyOngoingContestsCodes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 18px;

  width: auto;
  /* height: 19px; */
  @media (max-width: 938px) {
    flex-direction: column;
    gap: 0px;
  }
`;

export const MyOngoingContestsLabels = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 37.5625rem) {
  }
`;

export const MyOngoingContestsLabel = styled.div`
  width: auto;
  height: 19px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  color: #000000;

  @media (max-width: 670px) {
    display: none;
  }
`;

export const ContestsCode = styled.div`
  color: #a79f97;

  @media (max-width: 37.5625rem) {
  }
`;

export const ContestsCopyIcon = styled.img`
  @media (max-width: 670px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
`;
