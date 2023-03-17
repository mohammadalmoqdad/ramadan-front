import styled from "styled-components";
import { colors } from "styles";
import {
  TitleLogin as DefaultTitleLogin,
  DivCenter as DefaultDivCenter,
} from "../../Login/login.styles";

import {
  DivPass as DefaultDivPass,
  Form as DefaultForm,
} from "../../shared/styles";

import {
  ParticipantsNumbers as DefaultParticipantsNumbers,
  ParticipantsMember as DefaultParticipantsMember,
  ParticipantsTitels as DefaultParticipantsTitels,
  SeeAllP as DefaultSeeAllP,
} from "../ContestMembers/ContestMembers.styles";

export default styled.div``;

export const Form = styled(DefaultForm)`
  /* margin: auto; */
  width: auto;
  /* max-width: 42rem; */
  flex-direction: row;
  /* gap: 0.75rem; */

  @media (max-width: 56.25rem) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ParticipantsNumbers = styled(DefaultParticipantsNumbers)`
  flex-direction: column;
  font-size: 14px;
  max-width: 20rem;
  @media (max-width: 34.375rem) {
  }
`;

export const TypeSpace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  width: 18rem;
  height: auto;
  background: #f9eaea;
  border-radius: 12px;
  margin-bottom: ${(props) => (props.inside ? "20px" : "")};

  @media (max-width: 900px) {
  }
  @media (max-width: 500px) {
    flex-direction: column;
    width: 12rem;
  }
`;

// New Content
export const TextAreaSpace = styled.textarea`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: none;
  /* padding: 24px; */
  width: 250px;
  height: 300px;
  background: #f9eaea;
  border-radius: 12px;
  text-align: start;

  @media (max-width: 900px) {
  }
  @media (max-width: 500px) {
    flex-direction: column;
    width: 10rem;
  }
`;
//

export const ParticipantsMember = styled(DefaultParticipantsMember)`
  /* height: 27rem; */
  margin: 0;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  @media (max-width: 34.375rem) {
  }
`;

export const ParticipantsMember2 = styled(DefaultParticipantsMember)`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 34.375rem) {
  }
`;

export const ParticipantsTitels = styled(DefaultParticipantsTitels)`
  max-width: 20rem;
  @media (max-width: 34.375rem) {
  }
`;

export const PublishedDate = styled.div`
  margin: auto;
  margin-top: 1rem;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  color: #a79f97;
  @media (max-width: 34.375rem) {
  }
`;
export const OverflowScrolling = styled.div`
  max-height: 27rem;
  overflow-y: scroll;
  @media (max-width: 34.375rem) {
  }
`;

export const Br = styled.div`
  height: 10.2px;
  width: 2rem;
  @media (max-width: 34.375rem) {
  }
`;

export const ButtonStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 0.625rem;

  width: 13.75rem;
  height: 2.5rem;

  background: #fdd561;
  border-radius: 6.25rem;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  /* line-height: 1.25rem; */
  margin: auto;
  margin-top: 1rem;
  cursor: pointer;
  color: ${colors.black};
  @media (max-width: 34.375rem) {
    width: 6.7rem;
    /* font-size: 12px; */
  }
`;

export const SeeAllP = styled(DefaultSeeAllP)`
  @media (max-width: 34.375rem) {
    font-size: 13px;
    display: none;
  }
`;
// ReadOnly
export const ReadOnly = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  margin: auto;
  width: 60%;
  height: 108px;

  background: #fbf9f7;
  border-radius: 24px;
  @media (max-width: 500px) {
  }
`;
