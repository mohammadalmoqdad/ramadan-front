import styled from "styled-components";
import { colors } from "styles";

export default styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 48px;
  max-width: 950px;
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

export const SearchContainer = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 183px;
  height: 62px;
  background-color: #ffffff;
  border: 1px solid #f9eaea;
  border-radius: 12px;
  padding-left: 56px;

  @media (max-width: 900px) {
    min-width: calc(100vw - 350px);
  }

  @media (max-width: 550px) {
    min-width: calc(100vw - 175px);
  }
`;

export const AddModeratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: 900px) {
    width: 100%;
  }
`;
// export const SearchContainerDiv = styled.div`
//   position: relative;
//   &::before {
//     content: url("assets/icons/search.svg");
//     position: absolute;
//     font-size: 14px;
//     font-weight: 900;
//     left: 15px;
//     top: 50%;
//     transform: translateY(-50%);
//     color: #a79f97;
//   }
// `;

export const SearchIconButton = styled.button`
  position: absolute;
  align-self: center;
  overflow: hidden;
  left: 10px;
  cursor: pointer;
  background: ${colors.white};
`;
export const SearchContainerForm = styled.form`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

export const LightText = styled.span`
  font-size: medium;
  @media (max-width: 900px) {
    font-size: small;
  }
  @media (max-width: 550px) {
    font-size: smaller;
  }
`;

export const ModeratorSearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ff5367;
`;

export const SearchInputContainer = styled.div`
  width: 19.25rem;
  height: 110px;
  padding: 24px;
  margin: 0 auto;

  gap: 6px;
  background: #fbf9f7;
  border-radius: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const GoContainer = styled.button`
  width: 4.4375rem;
  height: 60px;
  padding: 24px;
  border-radius: 12px;
  background-color: #fdd561;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  font-weight: 700;
`;
