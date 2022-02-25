import styled from "styled-components";

export default styled.div`
justify-content: center;
flex-direction: column;
text-align:center;
/* display: flex; */
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
width: 7rem;
padding: 0 5px;
height: 2.1rem;
font-size: 1rem;
border: none;
background: none;
outline: none;
text-align:right;
color: orange;
border-bottom: 2px solid #2691d9;
margin-right: 2rem;
:focus{
transition: .1s;
border-bottom: 3px solid orange;
}

@media (max-width:500px) {
  width: 5rem;
  font-size: .8rem;
}
`;
