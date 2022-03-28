import styled from "styled-components";

// import SetPasswordStudentContainer, { DropdownDiv, DropdownDivSelect, Span, I } from "./SetPasswordStudent.styles"

// SetPasswordStudentContainer  SetPasswordStudent
export default styled.div`

background: linear-gradient(120deg, #2980b9, #2980b9);

display: flex;
/* justify-content: center; */
/* align-items: flex-start; */


`;
export const SetPasswordStudent = styled.div`
padding-top: 5rem;
display: flex;
width: 100%;
height: 60rem;
justify-content: center;
align-items: flex-start;
flex-direction: column;

@media (max-width:500px) {
  padding: 2rem;
}
`;

export const DropdownDiv = styled.div`
margin: auto;

margin-bottom: 0rem;
margin-top: 0rem;

@media (max-width:500px) {
margin-bottom: 2rem;
margin-top: 2rem;
}
`;

export const DropdownDivSelect = styled.div`

padding: 1rem;
border-radius: 6px;
background-color: white;
/* width: fit-content; */
/* border: 2px;
border-bottom-color: blue; */
display: flex;
justify-content: center;
align-items: flex-start;
cursor: pointer;
margin-bottom: .5rem;

@media (max-width:500px) {
  padding: .8rem;
  margin-bottom: 0rem;
}
`;

export const Span = styled.span`

text-align:center;
font-family: 'Noto Kufi Arabic', sans-serif;
color: #213C64;
font-size: 1.3rem;

`;

export const I = styled.i`

margin-right: 1rem;

`;

// export const DropdownList = styled.div`
//  position: absolute;
// width: 25rem;

// font-family: 'Noto Kufi Arabic', sans-serif;
// color: #213C64;
// font-size: 1.3rem;

// border: 2px solid orange;

// border-radius: 4px;
// background-color: white;
// opacity: 0;
// visibility: hidden;
// transition: opacity 0.2s linear,visibility 0.2s linear;
// @media (max-width:500px) {
//   font-size: 1rem;
//   width: 15rem;
// }
// `;


export const DropdownList = styled.select`
text-align: center;
font-family: 'Noto Kufi Arabic', sans-serif;
color: #213C64;
font-size: 1.3rem;
padding:1rem;

border-radius: 4px;
background-color: white;
box-shadow: 1px 3px 12px 0px #0000007a;
:hover{
  outline: none;
  border: none;
}
:focus{
  outline: none;
  border: none;
}

`;

export const DropdownListItem = styled.option`

padding: 1rem ;
text-align:center;
/* :scope{
  background-color: orange;
  color: white;
}
:focus{
  background-color: orange;
  color: white;
} */
/* background-color: orange; */
  &:hover {
    background-color: orange;
    color: white;
  }
`;

export const StudantName = styled.div`
width :25rem;
text-align:right;
font-family: 'Noto Kufi Arabic', sans-serif;
color: #2691d9;
font-size: 1.3rem;
font-weight: bolder;
padding: 1.7rem;
border-radius: 6px;
background-color: white;
display: flex;
margin: auto;
justify-content: center;
align-items: flex-start;
cursor: pointer;
margin-bottom: .5rem;
margin-top: 3rem;
box-shadow: 1px 3px 12px 0px #0000007a;


@media (max-width:500px) {
 margin-top: 0rem;
 padding:1rem;
}
`;
//  --------------------------------------------------------------------

export const DivCenter = styled.div`

 margin: auto;
 margin-top: 2rem;
 padding: 2rem;
 width: 25rem;
 background: white;
 border-radius: 10px;
box-shadow: 1px 3px 12px 0px #0000007a;
`;

export const Form = styled.form`
width:20rem;
@media (max-width:550px) {
    width: 100%;
}
display: flex;
flex-direction: column;
justify-content: space-between;
margin: auto;

`;

export const DivPass = styled.div`
&.green{
  color: #088444;
}
&.red{
  color: #eb2b2b;
}
width: 100%;
padding: 0 5px;
height: 40px;
font-size: 16px;
border: none;
background: none;
outline: none;
text-align: center;
  :focus{
    border:0.2px solid #213C64;
  }

`;

export const H1Login = styled.h1`
/* margin-top: 1.5rem; */
text-align: center;
padding: 0 0 10px 0;
font-family: 'Noto Kufi Arabic', sans-serif;
font-size: 2rem;

`;

export const Wird = styled.h1`
margin-top: .2rem;
text-align: center;
/* padding: 0 0 20px 0; */
font-family: 'Noto Kufi Arabic', sans-serif;
font-size: 2.3rem;
color: orange;
`;

export const H3Login = styled.h3`
text-align: center;
/* margin-bottom: .5rem; */
padding: 0 0 20px 0;
border-bottom: 1px solid silver;
font-family: 'Noto Kufi Arabic', sans-serif;
font-size: 1.5rem;
color: #213C64;
@media (max-width:500px) {
 font-size: 1rem;
 padding: 0 0 10px 0;
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

export const FormInput = styled.input`
width: 20rem;
@media (max-width:550px) {
    width: 100%;
}
padding: 0 5px;
height: 2.1rem;
font-size: 1rem;
border: none;
background: none;
outline: none;
text-align:right;
color: #213c64;
border-bottom: 2px solid #2691d9;
:focus{
transition: .1s;
border-bottom: 3px solid orange;
}
`;

export const FileFormInput = styled(FormInput)`
text-align: center;
`;

export const InputSubmit = styled.button`
width:20rem;
@media (max-width:550px) {
    width: 100%;
}
height: 3.1rem;
border: 1px;
background: linear-gradient(120deg, #2980b9, #2980b9);
border-radius: 1.5rem;
font-size: 1rem;
color: #e9f4fb;
cursor: pointer;
outline: none;
margin-top: 3rem;
:hover{
background: orange;
height: 3.2rem;
transition: .3s;
}

`;

export const DivFileField = styled.div`
input[type=file]{
 color: black;
 border-bottom: none;
}
padding-top: 5px;
}
`;

export const H5 = styled.h5`

text-align:center;
font-family: 'Noto Kufi Arabic', sans-serif;
color: #213C64;
font-size: 1.3rem;

`;