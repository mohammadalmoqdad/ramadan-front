import styled from "styled-components";
import {
    InputSubmit as DefaultInputSubmit,
    Form as DefaultForm,
    FormInput as DefaultFormInput
} from "../shared/styles";

export default styled.div`
display:flex;
margin: 0;
padding: 0;
font-family: 'Noto Kufi Arabic', sans-serif;
background: #FDFDFB;
height: 100vh;
overflow: hidden;
`;
export const DivCenter = styled.div`
 margin: auto;
 margin-top: 2rem;
 margin-bottom: 2rem;
 width: 608px;
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
 width: 19rem;
}
`;

export const Form = styled(DefaultForm)`
    width: auto;
@media (max-width:550px) {
    width: auto;
}
`;

export const FormInput = styled(DefaultFormInput)`
/* Frame 3 */
box-sizing: border-box;
/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 21px 24px;
gap: 12px;

width: 536px;
height: 61px;

background: #FFFFFF;
border: 1px solid #F9EAEA;
border-radius: 12px;

text-align:left;

@media (max-width:700px) {
    width: 230px;
}
:focus{
    border-bottom: 0;
}
`;


export const PageLink = styled.a`
text-decoration: none;
width: 100%;
padding: 0 5px;
height: 40px;
font-size: 16px;
border: none;
background: none;
outline: none;
color: gray;
margin-top: .3rem;
text-align: center;
`;
export const HeadLogIn = styled.div`
margin-top: 1rem;
display: flex;
font-weight: 500;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5px;
gap: 5px;
border-radius: 24px;
`;
export const TitleLogin = styled.div`
width: auto;
height: 36px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 37px;
text-align: center;

color: #000000;

`;
export const SignupNowAccount = styled.p`
width: 287px;
height: 19px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #A79F97;
`;
export const SignupNow = styled.a`
text-decoration: none;
border: none;
background: none;
outline: none;
width: 287px;
height: 19px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #000000;

:hover{
    color: #A79F97;
}

`;

export const MediaLogIn = styled.button`
/* Frame 34  */
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 18px 24px;
gap: 12px;
width: 170.67px;
height: 50px;
background: #FFFFFF;
border: 1px solid #F9EAEA;
border-radius: 12px;
flex: none;
order: 2;
flex-grow: 0;

@media (max-width:700px) {
padding: 18px 24px;
gap: 12px;
width: 75px;
height: 40px;
}
`;

export const MediaOneLine = styled.div`
/* Frame 34  */
box-sizing: border-box;
/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 12px;
background: #FFFFFF;
`;
export const OrWayToLogIn = styled.span`

width: 20px;
height: 19px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #A79F97;

`;

export const Span = styled.span`
text-align: center;
margin: .5rem;
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

@media (max-width:700px) {
width: 230px;
height: 50px;
}

`;