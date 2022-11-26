import styled from "styled-components";
import {
  InputSubmit as DefaultInputSubmit,
  Form as DefaultForm,
} from "../Login/login.styles";

import {
  DivPass as DefaultDivPass,
} from "../shared/styles";

export default styled.div`
display:flex;
margin: auto;
padding: 0;
font-family: 'Noto Kufi Arabic', sans-serif;
background: #FDFDFB;
height: 100vh;
overflow: hidden;
height: 869px;
`;


export const HeadSignup = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 12px;

width: 293px;
height: 67px;

`;

export const CreatorOrParticipant = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 18px;
gap: 3px;

width: 536px;
height: 117px;

background: #FBF9F7;
border-radius: 12px;

@media (max-width:700px) {
padding: 8px;
padding-top: 15px;
padding-bottom: 15px;
width: 286px;
height: 116px;
}
`;

export const CreatorOrParticipantDiv = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 18px;
gap: 12px;

width: 244px;
height: 81px;

border-radius: 12px;
background: #FBF9F7;

:focus {
  background: #F9EAEA;
}

@media (max-width:700px) {
padding: 18px 15px;
gap: 12px;
width: 133px;
border-radius: 12px;
}
`;


export const CreatorOrParticipantSpan = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
/* gap: 6px; */

color: none;
width: 208px;
height: 45px;

@media (max-width:700px) {
width: 112px;
height: 56px;
}
`;

export const TitleCreatorOrParticipant = styled.p`
margin: 0px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
color: #000000;

@media (max-width:700px) {
  font-size: 14px;
}
`;

export const ContentCreatorOrParticipant = styled.p`
width: 228px;
height: 17px;
margin: 0px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */

text-align: center;
color: #A79F97;

@media (max-width:700px) {
  font-size: 8px;
}
`;

export const Form = styled(DefaultForm)`
width: auto;
@media (max-width:550px) {
    width: auto;
}
/* padding: 25px; */

`;

export const InputSubmit = styled(DefaultInputSubmit)`
width:auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px 24px 21px;
gap: 10px;

width: 536px;
height: 50px;

background: #FDD561;
color: #000000;
font-weight: 700;
border-radius: 100px;
margin-top: 0.3rem;
margin-bottom: 0.5rem;

@media (max-width:500px) {
width: 219px;
height: 50px;
/* margin-top: 0.8rem; */

}
`;

export const DivPass = styled(DefaultDivPass)`
  margin-bottom: 1rem;
`;