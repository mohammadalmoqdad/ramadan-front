import styled from "styled-components";
import { spacing } from "styles";

const Button = styled.button`
  align-items: center;
  background: ${(props) => props.background || "red"};
  border: ${(props) =>
    props.border ? `0.0125rem solid ${props.borderColor} || red` : "none"};
  border-radius: 0.3rem;
  color: ${props.color || "white"};
  cursor: pointer;
  display: flex;
  font-size: 0.75rem;
  justify-content: center;
  outline: none;
  padding: 0 ${spacing.m};

  &[disabled] {
    background-color: var(--background-disabled);
    border: ${(props) => props.border && "var(--border)"};
    color: var(--text-disabled);
    cursor: not-allowed;
  }
`;
