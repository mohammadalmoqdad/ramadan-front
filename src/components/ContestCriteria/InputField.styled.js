import styled from "@emotion/styled";
import { colors } from "styles";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: var(--flex-direction);
  justify-content: space-between;
  width: 100%;
  margin: 0.5rem 0;
  align-items: center;
`;

export const InputField = styled.input`
  &[type="number"] {
    width: 3rem;
    border-radius: 0.5rem;
    border: none;
    padding-left: 0.3125rem;
    text-align: center;
    height: 2rem;
    &:focus {
      outline: transparent;
    }
  }

  &[type="checkbox"] {
    width: 3rem;
    height: 1.25rem;
    border: 1px solid ${colors.red};
    cursor: pointer;
  }
`;

export const TextLabel = styled.label`
  color: ${colors.black};
  text-align: start;
`;
