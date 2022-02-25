import styled from "styled-components";

// import AddNewAdmindefault,{ Wird, DivPass, DivCenter, H3Login, InputSubmit, Form, FormInput, H1Login, DivTxtField, FormLabel, Span } from "./AddNewAdmin.styles"

// addNewAdmin 
export default styled.div`
/* width: 100%; */
height: 100%rem;
background: linear-gradient(120deg, #2980b9, #2980b9);
display: flex;
justify-content: center;
align-items: flex-start;
padding: 5rem;
/* flex-direction: column; */

@media (max-width:1000px) {
flex-direction: column;
}

@media (max-width:500px) {
  padding: 2rem;
  width: 30rem;
}
`;



export const DivCenter = styled.div`

 margin: auto;
 margin-top: 2rem;
 padding: 2rem;
 width: 25rem;
 background: white;
 border-radius: 10px;
 box-shadow: 1px 3px 12px 0px #0000007a;
 @media (max-width:500px) {
  width: 15rem;
}
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

export const Formm = styled.form`
width:20rem;
display: flex;
flex-direction: column;
justify-content: space-between;
margin: auto;

`;


export const DivTxtField = styled.div`
position: relative;
/* border-bottom: 2px solid #adadad; */
margin: 1rem 0;

@media (max-width:500px) {
margin: 1rem 0;
}
`;

export const DivTxtFieldnumber = styled.div`
/* position: relative; */
display: flex;
/* border-bottom: 2px solid #adadad; */
margin: 1rem 0;

@media (max-width:500px) {
margin: 1rem 0;
}
`;

export const DivTxtFieldDaynumber = styled.div`
/* position: relative; */
display: flex;
/* border-bottom: 2px solid #adadad; */
/* margin: 1rem 0; */

@media (max-width:500px) {
margin: 1rem 0;
}
`;

export const Span = styled.span`

text-align:center;
font-family: 'Noto Kufi Arabic', sans-serif;
color: #213C64;
font-size: 1.2rem;
/* font-weight: bolder; */

@media (max-width:500px) {
  font-size: .8rem;
}
`;


export const Label = styled.section`
width: 15rem;
padding: 0 5px;
height: 2.1rem;
font-size: 1rem;
border: none;
background: none;
outline: none;
text-align:right;
color: #213C64;
/* border-bottom: 2px solid #2691d9; */
:focus{
transition: .1s;
border-bottom: 3px solid orange;
}

@media (max-width:500px) {
  width: 11rem;
  font-size: .8rem;
}
`;


export const FormInput = styled.input`
width: 20rem;
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
  width: 11rem;
  font-size: .8rem;
}
`;

export const FormInputnumber = styled.input`

width: 4rem;
padding: 0 5px;
height: 2.1rem;
font-size: 1rem;
border: none;
/* background: none; */
background: linear-gradient(120deg, #2980b9, #2980b9);

outline: none;
text-align:center;
color: white;
border: 2px solid #2691d9;
border-radius: .5rem;
:focus{
transition: .1s;
/* border-bottom: 3px solid orange; */
}
::placeholder {
  color: white;
}


@media (max-width:500px) {
  width: 11rem;
  font-size: .8rem;
}
`;

export const InputSubmit = styled.button`
width:20rem;
height: 3.1rem;
border: 1px;
background: linear-gradient(120deg, #2980b9, #2980b9);
border-radius: 1.5rem;
font-size: 1rem;
color: #e9f4fb;
cursor: pointer;
outline: none;
margin-top: 1rem;
:hover{
background: orange;
height: 3.2rem;
transition: .3s;
}
@media (max-width:500px) {
  width: 11rem;
  font-size: .8rem;
  
}
`;

export const DropdownDiv = styled.div`
width: 25rem;
height: auto;
margin: auto;
/* box-shadow: 1px 3px 12px 0px #0000007a; */

margin-bottom: 0rem;
margin-top: 0rem;

@media (max-width:500px) {
width: 15rem;
margin-bottom: 3rem;
margin-top: 3rem;
}
`;


export const DropdownDivSelect = styled.div`

padding: 1rem;
border-radius: 6px;
background-color: white;
margin-top: 3rem;
display: flex;

box-shadow: 1px 3px 12px 0px #0000007a;

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

export const DropdownList = styled.div`
 /* position: absolute; */
width: 25rem;

margin: auto;
/* display: flex; */
justify-content: center;

font-family: 'Noto Kufi Arabic', sans-serif;
color: #213C64;
font-size: 1.3rem;
box-shadow: 1px 3px 12px 0px #0000007a;


border-radius: 4px;
background-color: white;
@media (max-width:500px) {
  font-size: 1rem;
  width: 15rem;
}
`;

export const DropdownListStanderd = styled.select`
width: 20rem;
font-family: 'Noto Kufi Arabic', sans-serif;
color: white;
font-size: 1rem;
padding:1rem;
margin-top: 1rem;
border-radius: 4px;
/* background-color: white; */
box-shadow: 1px 1px 2px 0px #0000007a;
outline: none;
border: none;
/* border: 2px solid  #213C64; */
background: linear-gradient(120deg, #2980b9, #2980b9);
:hover{
  outline: none;
  /* border: none; */
  /* color: #213C64; */
}
:focus{
  outline: none;
  /* border: none; */
  color: #213C64;
}
@media (max-width:500px) {
  font-size: .8rem;
  width: 11rem;
}
`;

export const AvailableDays = styled.div`
position: fixed;
width: 25rem;
font-family: 'Noto Kufi Arabic', sans-serif;
color: #213C64;
font-size: 1rem;
/* padding:1rem; */
margin-top: 1rem;
border-radius: 4px;
/* background-color: white; */
box-shadow: 1px 1px 2px 0px #0000007a;
outline: none;
border: none;
/* border: 2px solid  #213C64; */
background: white;
 /* opacity: 0;
 visibility: hidden;
 transition: opacity 0.2s linear,visibility 0.2s linear; */

:hover{
  
  outline: none;
  /* border: none; */
  /* color: #213C64; */
}
:focus{
  outline: none;
  /* border: none; */
  color: #213C64;
}
@media (max-width:500px) {
  font-size: .8rem;
  width: 11rem;
}
`;
// DropdownListItemDays
export const DropdownListItemDays = styled.div`

padding: .1rem ;
text-align:center;

align-items: flex-start;
/* border-bottom: 1px solid silver; */
:hover{
  background-color: orange;
  color: white;
}
`;

export const DropdownListItemStanderd = styled.option`
padding: 1rem ;
text-align:center;
align-items: flex-start;
border-bottom: 1px solid silver;

:hover{
  background-color: orange;
  color: white;
}
`;

export const I = styled.i`

margin-right: 0.5rem;
text-align:left;
/* padding: 1rem ; */ 


`;

export const DropdownListItem = styled.div`

padding: 1rem ;
text-align:center;

align-items: flex-start;
border-bottom: 1px solid silver;
`;

export const DivPass = styled.h3`

display: flex;
justify-content: center;
align-items: flex-start;

width: 100%;
padding: 0 5px;
height: 40px;
font-size: 16px;
color: silver;
border: none;
background: none;
outline: none;
text-align: center;
  :focus{
    border:0.2px solid #213C64;
  }
`;


export const Checkboxes = styled.input`
/* display: flex;
justify-content: center;
align-items: flex-start; */

margin: auto;
display: block;
margin-bottom: 0rem;
width: 1.5rem;
padding: 0 5px;
height: 40px;
margin-top: .5rem;
font-size: 16px;
flex-direction: column;

:scope{
  background-color: orange;

}
`;

export const LabelSoper = styled.section`
text-align: center;
display: flex;
justify-content: center;
align-items: flex-start;
display: block;

margin: auto;
flex-direction: column;

`;


export const DivMultiselect = styled.div`

`


export const Frame = styled.div`

`
export const Framephone = styled.div`
height: 550px;
width: 270px;
position: relative;
background-image : url('frame_ph.png');
z-index: 1;
background-repeat: no-repeat;
background-size: cover;
`
export const Imgtype = styled.img`
width : 215px;
margin-top:3.6rem;
height: 480px;
z-index: 66;
opacity: 1;
margin-bottom:-30rem;
margin-left: 2rem;
position: absolute;
border-radius: 15px;
`