import styled from "styled-components";
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
  margin: auto;
  width: auto;
  max-width: 42rem;
  flex-direction: row;
  gap: 0.75rem;

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
  width: 280px;
  height: auto;
  background: #f9eaea;
  border-radius: 12px;

  @media (max-width: 900px) {
  }
  @media (max-width: 500px) {
    flex-direction: column;
    width: 180px;
  }
`;

export const ParticipantsMember = styled(DefaultParticipantsMember)`
  /* height: 27rem; */
  margin: 0;
  margin-top: 2rem;
  display: flex;
  align-items: center;

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
  padding: 20px 24px 21px;
  gap: 10px;

  width: 220px;
  height: 40px;

  background: #fdd561;
  border-radius: 100px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin: auto;
  margin-top: 1rem;
  color: #000000;
  @media (max-width: 34.375rem) {
    width: 100px;
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
