import styled from "styled-components";
import {FormInput as DefaultFormInput}  from '../../../shared/styles'

export default styled.div`
justify-content: center;
flex-direction: column;
text-align:center;
`;

export const Divvv = styled.div`
justify-content: center;
align-items: flex-start;
display: flex;
`;


export const InputSubmit = styled.button`
justify-content: center;
align-items: flex-start;
width:8rem;
height: 3rem;
border: 1px;
background: linear-gradient(120deg, #2980b9, #2980b9);
border-radius: 1.5rem;
font-size: 1.1rem;
color: #e9f4fb;
cursor: pointer;
outline: none;
margin-top: .5rem;
:hover{
background: orange;
height: 3rem;
transition: .3s;
}
@media (max-width:500px) {
  width: 5rem;
  font-size: .7rem;
  
}
`;

export const Span = styled.div`
text-align:center;
font-family: 'Noto Kufi Arabic', sans-serif;
color: #213C64;
font-size: 1.2rem;
`;

export const FormInput = styled(DefaultFormInput)`
width: 7rem;
`;
