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
height: 54.3125rem;
`;


export const HeadSignup = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0rem;
gap: .75rem;

width: 18.3125rem;
height: 4.1875rem;

`;

export const CreatorOrParticipant = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 1.125rem;
gap: .1875rem;

width: 33.5rem;
height: 7.3125rem;

background: #FBF9F7;
border-radius: .75rem;

@media (max-width:43.75rem) {
padding: .5rem;
padding-top: .9375rem;
padding-bottom: .9375rem;
width: 17.875rem;
height: 7.25rem;
}
`;

export const CreatorOrParticipantDiv = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 1.125rem;
gap: .75rem;

width: 15.25rem;
height: 5.0625rem;

border-radius: .75rem;
background: #F9EAEA;

/* :focus {
  background: #FBF9F7;
} */

@media (max-width:43.75rem) {
padding: 1.125rem .9375rem;
gap: .75rem;
width: 8.3125rem;
border-radius: .75rem;
}
`;

export const CreatorOrParticipantSpan = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0rem;
/* gap: .375rem; */

color: none;
width: 13rem;
height: 2.8125rem;

@media (max-width:43.75rem) {
width: 7rem;
height: 3.5rem;
}
`;

export const TitleCreatorOrParticipant = styled.p`
margin: 0rem;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 1.125rem;
line-height: 1.375rem;
color: #000000;

@media (max-width:43.75rem) {
  font-size: .875rem;
}
`;

export const ContentCreatorOrParticipant = styled.p`
width: 14.25rem;
height: 1.0625rem;
margin: 0rem;

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: .875rem;
line-height: 1.0625rem;
/* identical to box height */

text-align: center;
color: #A79F97;

@media (max-width:43.75rem) {
  font-size: .5rem;
}
`;

export const Form = styled(DefaultForm)`
width: auto;
@media (max-width:34.375rem) {
    width: auto;
}
/* padding: 1.5625rem; */

`;

export const InputSubmit = styled(DefaultInputSubmit)`
width:auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1.25rem 1.5rem 1.3125rem;
gap: .625rem;

width: 33.5rem;
height: 3.125rem;

background: #FDD561;
color: #000000;
font-weight: 700;
border-radius: 6.25rem;
margin-top: 4.8px;
margin-bottom: 8px;

@media (max-width:31.25rem) {
width: 13.6875rem;
height: 3.125rem;
/* margin-top: 0.8rem; */

}
`;

export const DivPass = styled(DefaultDivPass)`
  margin-bottom: 1rem;
`;