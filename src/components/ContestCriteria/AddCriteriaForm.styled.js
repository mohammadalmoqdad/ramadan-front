import styled from "@emotion/styled";
import { colors } from "styles";
import { css } from "@emotion/react";

export default styled.div`
  /* position: absolute; */
  /* position: relative; */
  display: flex;
  flex-wrap: nowrap;
  padding: 2rem;
  border-radius: 1.5rem;
  background-color: ${colors.lightGrey};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 11px;
  width: 22.5rem;
  max-height: 39rem;
  overflow: auto;

  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-70%, -40%);
  z-index: 1000;

  &::-webkit-scrollbar {
    width: 4px;
    max-height: 90%;
    height: 90%;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${colors.lightGrey};
    border-radius: 10px;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.red};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${colors.red};
  }

  @media (max-width: 550px) {
    transform: translate(-50%, -50%);
    gap: 0.3125rem;
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
  border-radius: 1.25rem;
  height: 2.5rem;
  width: 100%;
  padding: 0 0.9375rem;
`;

export const DropDown = styled.select`
  outline: none;
  border: none;
  border-radius: 1.25rem;
  color: ${colors.black};
  padding: 0.7rem;
  width: 100%;
`;

export const Option = styled.option``;

export const AddButton = styled.button`
  background-color: ${colors.red};
  color: ${colors.white};
  border-radius: 1.25rem;
  width: 100%;
  padding: 0.3125rem;
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
