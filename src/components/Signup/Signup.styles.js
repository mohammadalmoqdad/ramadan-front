import styled from "styled-components";
// import login from "../Login/login.styles"
import {
  InputSubmit as DefaultInputSubmit,
  Form as DefaultForm
} from "../shared/styles";

export default styled.div`
display:flex;
margin: auto;
padding: 0;
font-family: 'Noto Kufi Arabic', sans-serif;
background: #FDFDFB;
/* background: #dddddd; */
height: 100vh;
overflow: hidden;


position: relative;
/* width: 1440px; */
height: 969px;
/* overflow-y: scroll; */

/* background: #FDFDFB; */
/* border-radius: 24px; */
`;

export const DivCenter = styled.div`
 margin: auto;

 /* width: 408px; */
 width: 608px;
height: 758px;
 background: white;
 border-radius: 10px;

 display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 36px;
gap: 20px;

background: #FFFFFF;
border-radius: 24px;

@media (max-width:700px) {
 width: 18rem;
 /* height: 60rem; */
 /* margin-top: 3rem;  */

}
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

export const TitleSignup = styled.div`
width: 109px;
height: 36px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 37px;
text-align: center;

color: #000000;
`;

export const CreatorOrParticipant = styled.div`
display: flex;
margin-top: 2rem;
flex-direction: row;
align-items: flex-start;
padding: 18px;
gap: 12px;

width: 536px;
height: 117px;

background: #FBF9F7;
border-radius: 12px;
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

`;

export const TitleCreatorOrParticipant = styled.p`
/* width: 102px;
height: 22px; */
margin: 0px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
/* identical to box height */
color: #000000;

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