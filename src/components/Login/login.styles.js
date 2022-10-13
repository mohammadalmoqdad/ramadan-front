import styled from "styled-components";
import {
    InputSubmit as DefaultInputSubmit,
    Form as DefaultForm
} from "../shared/styles";

export default styled.div`
display:flex;
margin: 0;
padding: 0;
font-family: 'Noto Kufi Arabic', sans-serif;
background: linear-gradient(120deg, #2980b9, #2980b9);
height: 100vh;
overflow: hidden;
`;
export const DivCenter = styled.div`
 margin: auto;
 width: 400px;
 background: white;
 border-radius: 10px;
`;

export const Form = styled(DefaultForm)`
width: auto;
@media (max-width:550px) {
    width: auto;
}
padding: 25px;
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
export const TitleLogin = styled.div`
margin-top: 1.5rem;
text-align: center;
padding: 0 0 10px 0;
font-family: 'Noto Kufi Arabic', sans-serif;
font-size: 2rem;
`;

export const H3Login = styled.h3`
text-align: center;
padding: 0 0 1.1rem 0;
border-bottom: 1px solid silver;
font-family: 'Noto Kufi Arabic', sans-serif;
font-size: 1.5rem;
color: #213C64;
`;

export const Span = styled.span`
text-align: center;
margin: .5rem;
`;

export const InputSubmit = styled(DefaultInputSubmit)`
width:auto;
`;