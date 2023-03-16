import styled from "styled-components";
import { colors } from "styles";

export default styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  margin: auto;
  width: 90%;
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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  width: 100%;

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
  justify-content: center;
  align-items: center;
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

// New Content
export const MainContainer = styled.div`
  position: relative;
  padding: 24px;
  margin: auto;
  width: 90%;
  height: ${(props) => (props.openContests ? props.containerHeight : "110px")};
  overflow-y: hidden;
  background: #fbf9f7;
  border-radius: 24px;
  transition: all 0.5s;
`;

export const NormalDiv = styled.div`
  width: ${(props) => props.width};
  width: ${(props) => (props.competition ? "90%" : "")};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  @media (max-width: 750px) {
    width: 80%;
  }
`;

export const ContestIconDescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OpenIconContainer = styled.div`
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  width: 30px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  cursor: pointer;
  z-index: 1;
  transform: ${(props) => (props.openContests ? "rotate(0.5turn)" : "")};
  &:hover {
    background: ${colors.yellow};
  }
  @media (max-width: 750px) {
    right: 10px;
  }
`;

export const FormsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const JoinAndCreateInputContainer = styled.div`
  width: 350px;
  height: 110px;
  padding: 24px;
  margin: 0 auto 20px 0;
  background: ${colors.lightGrey};
  border-radius: 20px;
  box-shadow: 1px 5px 15px ${colors.darkGrey};
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 750px) {
    width: 100%;
    min-width: 250px;
  }
`;

export const DefaultForm = styled.form`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const SearchIconButton = styled.button`
  position: absolute;
  align-self: center;
  overflow: hidden;
  /* left: 0.3rem; */
  cursor: pointer;
  background: ${colors.white};
`;

export const SearchContainer = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  min-width: 130px;
  height: 3.875rem;
  background-color: #ffffff;
  border: 1px solid #f9eaea;
  border-radius: 0.75rem;
  padding-left: 1rem;
  margin-right: 20px;
  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const ActionBtn = styled.button`
  width: 4.4375rem;
  height: 3.75rem;
  padding: 1.5rem;
  border-radius: 0.75rem;
  background-color: ${colors.yellow};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 700;
  @media (max-width: 750px) {
    width: calc(4.4375rem / 1.2);
    height: calc(3.75rem / 1.2);
    border-radius: calc(0.75rem / 1.2);
  }
`;
