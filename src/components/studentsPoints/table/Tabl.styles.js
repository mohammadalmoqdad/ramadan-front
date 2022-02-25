import styled from "styled-components";

export default styled.div`

background:white ;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;


margin: auto;
margin-top: 2rem;
border-radius: 10px;
box-shadow: 1px 3px 12px 0px #0000007a;

`;

export const DivIn = styled.div`

 margin: 1rem;
 margin-top: 2rem;
 background: white;
 display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
`;

export const InputSubmit = styled.button`
justify-content: center;
align-items: flex-start;
width:3rem;
height: 1.5rem;
border: 1px;
background: linear-gradient(120deg, #2980b9, #2980b9);
border-radius: 1.5rem;
font-size: .7rem;
color: #e9f4fb;
cursor: pointer;
outline: none;
margin-top: .5rem;
:hover{
background: orange;
height: 1.5rem;
transition: .3s;
}
@media (max-width:500px) {
  width: 2rem;
  font-size: .7rem;
  
}
`;

export const DivTxtField = styled.div`
position: relative;
/* border-bottom: 2px solid #adadad; */
margin: 1rem 0;

@media (max-width:500px) {
margin: 1rem 0;
}
`;

export const Span = styled.div`

text-align:center;
font-family: 'Noto Kufi Arabic', sans-serif;
color: #213C64;
font-size: 1.2rem;
/* font-weight: bolder; */

@media (max-width:500px) {
  font-size: .8rem;
}
`;
export const FormInput = styled.input`
width: 5rem;
padding: 0 5px;
height: 2.1rem;
font-size: 1rem;
border: none;
background: none;
outline: none;
text-align:right;
color: orange;
border-bottom: 2px solid #2691d9;
:focus{
transition: .1s;
border-bottom: 3px solid orange;
}

@media (max-width:500px) {
  width: 5rem;
  font-size: .8rem;
}
`;