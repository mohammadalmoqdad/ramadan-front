import styled from "styled-components";
import { colors } from "styles";
import {
  DropdownDivSelect as DefaultDropdownDivSelect,
  DivForDropdownList as DefaultDropdownList,
  FormInput,
} from "../shared/styles";

// Old Content

export const Span = styled.div`
  text-align: center;
  font-family: "Noto Kufi Arabic", sans-serif;
  color: #213c64;
  font-size: 1.2rem;
`;

export const DropdownDivSelect = styled(DefaultDropdownDivSelect)`
  margin-top: 1rem;
  display: block;
`;

export const DropdownList = styled(DefaultDropdownList)`
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const I = styled.i``;

export const DivMultiselect = styled.div`
  margin-top: 1rem;
`;

const Btn = styled.button`
  position: relative;
  float: right;
  width: 30px;
  height: 30px;
  @media (max-width: 400px) {
    width: 22px;
    height: 22px;
    top: 10px;
  }
  margin: 1px;
  border: none;
  font-size: 15px;
  font-weight: bold;
  padding: 1px;
  color: white;
  border-radius: 5px;
  :hover {
    background: orange;
    transition: 0.3s;
  }
`;

export const AddBtn = styled(Btn)`
  background-color: cornflowerblue;
`;

export const RemoveBtn = styled(Btn)`
  background-color: #e94f57;
`;

export const AnnouncementsFormInput = styled(FormInput)`
  direction: rtl;
  width: 80%;
  float: right;
`;

// New Content

export default styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 3rem;
  max-width: 59.375rem;
`;

export const GroupsTitleLine = styled.div`
  position: relative;
  width: 90%;
  margin: auto;
  margin-bottom: -50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GroupCard = styled.div`
  position: relative;
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
  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NormalDiv = styled.div`
  position: ${(props) => (props.deleteFailed ? "absolute" : "")};
  top: ${(props) => (props.deleteFailed ? "100px" : "")};
  left: ${(props) => (props.deleteFailed ? "10px" : "")};
  @media (max-width: 750px) {
    width: ${(props) => (props.mobileChange ? "90%" : "")};
    top: ${(props) => (props.deleteFailed ? "295px" : "")};
    left: ${(props) => (props.deleteFailed ? "15px" : "")};
  }
`;

export const AddEditFormContainer = styled.div`
  padding: 20px;
  border: 1px solid ${colors.darkGrey};
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  background-color: ${colors.lightGrey};
  border-radius: 15px;
  z-index: 3;
  @media (max-width: 750px) {
    top: ${(props) => props.topMobile};
    right: ${(props) => props.rightMobile};
  }
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 750px) {
    justify-content: ${(props) => (props.mobileChange ? "space-evenly" : "")};
  }
`;

export const IconBox = styled.div`
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
    /* width: 35px; */
    /* height: 35px; */
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.center ? "center" : "flex-start")};
  @media (max-width: 750px) {
    margin: ${(props) => (props.center ? "20px" : "")};
  }
`;

export const BoldText = styled.span`
  font-weight: 700;
  font-size: medium;
  /* @media (max-width: 900px) {
    font-size: small;
  }
  @media (max-width: 550px) {
    font-size: smaller;
  } */
`;

export const LightText = styled.span`
  font-size: medium;
  color: ${colors.darkGrey};
  /* @media (max-width: 900px) {
    font-size: small;
  }
  @media (max-width: 550px) {
    font-size: smaller;
  } */
`;

export const MembersImg = styled.div`
  background: #ff5367;
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

  /* @media (max-width: 31.25rem) {
    border-radius: 0.5rem;
    width: 1.875rem;
    height: 1.875rem;
  } */
`;

export const ActionButton = styled.button`
  background: ${(props) => props.backGround || "none"};
  color: ${(props) => props.color};
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : "88px")};
  height: 47px;
  border-radius: 18px;
  margin: 5px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: ${(props) =>
      props.name === "delete" || props.name === "quit"
        ? "red"
        : props.name === "add"
        ? colors.yellow
        : "yellow"};
    color: ${(props) =>
      props.name === "delete" || props.name === "quit" ? "white" : ""};
  }
  @media (max-width: 750px) {
    width: ${(props) => (props.mobileChange ? "100%" : "")};
    margin: ${(props) => (props.mobileChange ? "10px 0" : "")};
  }
`;
