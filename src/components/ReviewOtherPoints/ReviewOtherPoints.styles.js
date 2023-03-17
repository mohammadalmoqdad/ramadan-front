import styled from "styled-components";
import { DropdownDiv } from "../Students/setPasswordStudent/SetPasswordStudent.styles";
import { DropdownList as List } from "../shared/styles";

export default styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: space-around;
  font-size: 0.9em;

  @media (max-width: 950px) {
    flex-direction: column;
    font-size: 0.8em;
  }
`;

export const MainContainer = styled.textarea`
  flex-direction: column;
  display: flex;
  align-items: center;
  padding: 24px;
  margin: auto;
  width: 90%;
  max-width: 59.375rem;
  justify-content: space-between;
  @media (max-width: 37.5625rem) {
  }
`;
export const TxtArea = styled.textarea`
  width: 100%;
  direction: rtl;
  min-height: 75px;
  outline-color: #fda400;
`;
export const ContentContainer = styled(DropdownDiv)`
  width: 92%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: space-between;
  gap: 1.25rem;
  .fe {
    justify-content: flex-end;
  }
  .div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    @media (max-width: 900px) {
      justify-content: center;
    }
  }

  @media (max-width: 900px) {
    align-items: center;
    margin-top: 20px;
  }
`;

export const DropDownDiv = styled(DropdownDiv)`
  margin-top: 1rem;
`;
export const DropdownList = styled(List)`
  padding: 10px;
`;
