import styled from "@emotion/styled";
import { colors } from "styles";
import { css } from "@emotion/react";

export default styled.div`
  /* position: absolute; */
  /* position: relative; */
  display: flex;
  padding: 2rem;
  border-radius: 1.5rem;
  background-color: ${colors.lightGrey};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 11px;
  width: 360px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-70%, -40%);
  z-index: 1000;

  @media (max-width: 550px) {
    transform: translate(-50%, -50%);
    gap: 5px;
    width: 300px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: var(--flex-direction);
  justify-content: space-around;
`;

export const FixedTextContainer = styled.div`
  display: flex;
  flex-direction: var(--flex-direction);
  justify-content: space-around;
`;

export const TextInputField = styled.input`
  outline: transparent;
  border: none;
  border-radius: 20px;
  height: 2.5rem;
  width: 100%;
  padding: 0 15px;
  &:focus {
    border: 1px solid ${colors.red};
  }
`;

export const DropDown = styled.select`
  outline: none;
  border: none;
  border-radius: 20px;
  color: ${colors.black};
  height: 2.5rem;
  width: 100%;
  padding: 0 15px;
  border: 1px solid ${colors.red};
  width: 300px;
  margin-right: 10px;
`;

export const Option = styled.option``;

export const AddButton = styled.button`
  background-color: ${colors.red};
  color: ${colors.white};
  border-radius: 20px;
  width: 100%;
  padding: 5px;
  font-weight: bold;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.red};
  opacity: 0.3;
  z-index: 1000;
`;

export const TextArea = styled.textarea`
  outline: transparent;
  border: none;
  border-radius: 20px;
  min-height: 10rem;
  width: 100%;
  padding: 0 15px;
  &:focus {
    border: 1px solid ${colors.red};
  }
`;
