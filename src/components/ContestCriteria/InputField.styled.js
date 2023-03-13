import styled from "@emotion/styled";
import { colors } from "styles";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: var(--flex-direction);
  justify-content: space-between;
  width: 100%;
`;

export const InputField = styled.input`
  &[type="number"] {
    width: 3rem;
    border-radius: 0.5rem;
    border: none;
    padding-left: 5px;
    &:focus {
      outline: transparent;
    }
  }

  &[type="checkbox"] {
    width: 20px;
    height: 20px;
    border: 1px solid ${colors.red};
    cursor: pointer;
  }
`;

export const TextLabel = styled.label`
  color: ${colors.black};
  text-align: start;
`;
