import styled, { css } from "styled-components";
import { colors } from "styles";

export default styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 3rem;
  max-width: 59.375rem;
`;

export const ContentContainer = styled.div`
  width: 92%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  gap: 1.25rem;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoldText = styled.span`
  font-weight: 700;
  font-size: medium;
  @media (max-width: 900px) {
    font-size: small;
  }
  @media (max-width: 550px) {
    font-size: smaller;
  }
`;

export const StudentSearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  color: #ff5367;
  flex-direction: var(--flex-direction);
  justify-content: flex-end;
  svg {
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 5px;
  transition: all 0.2s ease-in-out;
  width: 80%;
  padding: 0.5rem;
  &:focus-within {
    outline: none;
    background-color: ${colors.warmWheat};
    border-radius: 0.5rem;
  }

  @media only screen and (min-width: 750px) and (max-width: 900px) {
    width: 17rem;

    ${(props) =>
      props.isExpanded &&
      css`
        width: 19rem;
      `}
  }

  @media only screen and (min-width: 1024px) {
    width: 15rem;

    ${(props) =>
      props.isExpanded &&
      css`
        width: 18rem;
      `}
  }
`;

export const AddParticipantContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const AddParticipantSpan = styled.span`
  font-weight: 700;
  text-align: var(--text-align);
`;

export const SearchInputContainer = styled.div`
  width: 19.25rem;
  height: 6.875rem;
  padding: 1.5rem;
  margin: 0 auto;

  gap: 0.375rem;
  background: #fbf9f7;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const SearchContainerForm = styled.form`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const SearchIconButton = styled.button`
  position: absolute;
  align-self: center;
  overflow: hidden;
  left: 0.625rem;
  cursor: pointer;
  background: ${colors.white};
`;

export const SearchContainer = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 11.4375rem;
  height: 3.875rem;
  background-color: #ffffff;
  border: 1px solid #f9eaea;
  border-radius: 0.75rem;
  padding-left: 3.5rem;

  @media (max-width: 900px) {
    min-width: calc(100vw - 21.875rem);
  }

  @media (max-width: 550px) {
    min-width: calc(100vw - 10.9375rem);
  }
`;

export const GoBtn = styled.button`
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
`;
