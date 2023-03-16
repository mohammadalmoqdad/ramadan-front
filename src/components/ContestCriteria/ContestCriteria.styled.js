import styled from "@emotion/styled";
import { colors } from "styles";

// main container
export default styled.div`
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

export const SectionAndCriteriaContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: space-around;
  font-size: 0.9em;

  @media (max-width: 950px) {
    flex-direction: column;
    font-size: 0.8em;
  }
`;

// for the Title + Add Button
export const HeadContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: var(--flex-direction);
`;

export const HeadText = styled.span`
  font-weight: 700;
  padding: 0 0.7rem;
`;

// for the section group
export const SectionsContainer = styled.div`
  padding: 1rem;
  width: 45%;
  @media (max-width: 950px) {
    width: 90%;
    margin: auto;
  }
`;

// for the single criteria
export const CriteriaContainer = styled.div`
  padding: 1rem;
  width: 45%;
  @media (max-width: 950px) {
    width: 90%;
    margin: auto;
  }
`;

// for the single section
export const Criteria = styled.div`
  background-color: ${colors.lightGrey};
  padding: 1rem 1.3rem;
  border-radius: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: var(--flex-direction);
  margin: 0.5rem 0;
  gap: 0.5rem;
  flex-wrap: wrap;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

// for the single section
export const Section = styled.div`
  background-color: ${colors.lightGrey};
  padding: 0.5rem 1.5rem;
  border-radius: 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: var(--flex-direction);
  margin: 0.5rem 0;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

// can be for the section an criteria
export const Wrapper = styled.div``;

export const InnerText = styled.p`
  margin: 0;
  font-weight: 600;
  /* margin-bottom: 0.5rem; */
`;

export const AddButton = styled.button`
  background: none;
  color: ${colors.red};
  font-weight: 400;
`;

export const EditButton = styled.button`
  padding: 0.6rem 0.8rem;
  border-radius: 1.125rem;
  background-color: ${colors.yellow};
  color: ${colors.black};
  height: 3rem;

  @media (max-width: 550px) {
    padding: 0.5rem 1rem;
  }
`;

export const DeleteButton = styled.button`
  padding: 0.6rem 0.8rem;
  border-radius: 1.125rem;
  background-color: ${colors.lightRed};
  color: ${colors.red};
  height: 3rem;

  @media (max-width: 550px) {
    padding: 0.5rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 550px) {
    flex-direction: var(--flex-direction);
  }
`;
