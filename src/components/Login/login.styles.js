import styled from "styled-components";

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
 /* position: absolute;
 top:50%;
 left: 50%; */

 /* display: flex;
 justify-content: center;
 align-items: center; */

 margin: auto;

 /* transform: translate(-50%, -50%); */
 width: 400px;
 background: white;
 border-radius: 10px;
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
color: gray;
margin-top: .3rem;
text-align: center;
  /* :focus{
    border:0.2px solid #213C64;
  } */
`;

export const H1Login = styled.h1`
margin-top: 1.5rem;
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
padding: 0 0 1.1rem 0;
border-bottom: 1px solid silver;
font-family: 'Noto Kufi Arabic', sans-serif;
font-size: 1.5rem;
color: #213C64;
`;

export const DivTxtField = styled.div`
position: relative;
margin: 1rem 0;
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
color: #213C64;
border-bottom: 2px solid #2691d9;
:focus{
transition: .1s;
border-bottom: 3px solid orange;
}
`;

export const Span = styled.span`
text-align: center;
margin: .5rem;
/* content: '';
position: absolute;
top:2.1rem;
left: 0;
width:20rem;
@media (max-width:550px) {
    width: 100%;
}
height: 2px;
background: #2691d9;
:hover{
background: orange;
height: 4px;
transition: .1s;
} */
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
margin-bottom: 1.5rem;
margin-top: 2.2rem;
:hover{
background: orange;
height: 3.2rem;
transition: .3s;
}
`;

// export const FormLabel = styled.label`
// position: absolute;
// top: 50%;
// left: 5px;
// color: #adadad;
// transform: translateY(-50%);
// font-size: 16px;
// pointer-events: none;
// transition: .5s;

//   /* :focus{
//     border:0.2px solid #213C64;
//   } */
// `;