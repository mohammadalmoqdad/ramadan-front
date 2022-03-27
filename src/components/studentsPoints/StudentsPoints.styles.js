import styled from "styled-components";

export default styled.div`
display: flex;
background: linear-gradient(120deg, #2980b9, #2980b9);
padding:0;
margin:0;
box-sizing:border-box;
`;

export const PointShow = styled.div`
 width: 100%;
  input:focus {
     /* border-inline-color: 1px solid lightgray; */
     margin: 0;
     padding: 0;
     outline: none;
     border: none;
     background-color: #f4b069;
     color: #FFFFFF;
 }

 input {
     width: 100%;
 }
/* height: 70rem; */
background: linear-gradient(120deg, #2980b9, #2980b9);
/* justify-content: center; */
 /* align-items: center; */

 display: flex;
  @media (max-width:500px) {
  margin: auto;
  /* margin-top: 1rem; */
  /* width: 25rem; */
  /* height: 115rem; */
}
`;

export const LoginForm = styled.div`
/* height: 100%; */
width: 100%;
background: white;
padding: 3rem;
text-align:center;
 /* justify-content: flex-start; */
 /* align-items: center; */
 /* box-shadow: 1px 3px 12px 0px #0000007a; */
 /* border-radius: 10px; */
 /* padding: 1rem; */
 /* flex-direction: column; */
 /* @media (max-width:960px) {
   padding: 2rem;
   width: 30rem;
   height: 80rem;
  } */
  @media (max-width:500px) {
  /* display: flex; */
  /* margin: auto; */
  /* margin-top: 1rem; */
  /* width: 18rem; */
  /* height: 105rem; */
padding: 0 1rem;

}
`;

export const ChartsContainer = styled.div`
margin:1rem 0;
display: flex;
padding: 0;
gap:4rem;
flex-direction:row;

.Target-root{
    margin-top:1rem;
    font-family: 'Noto Kufi Arabic', sans-serif !important;
  flex-direction: column-reverse;
    }
.css-4dretl.Target-root{
  flex-direction: column-reverse;
  }

@media(max-width:500px){
  flex-direction: column-reverse;
  gap:0rem;

}
`;


export const SelectInputContainer = styled.div`
display: flex;
gap:4rem;

/* margin:2rem; */
/* justify-content:center; */
width:100%;
@media(max-width:1100px){
  flex-direction: column;
  gap:0rem;

}
}
`;


export const DivCenter = styled.div`
 box-shadow: 1px 3px 12px 0px #0000007a;
 margin: 1rem;
 margin-top: 2rem;
 width: 11rem;
 background: white ;
 border-radius: 10px;
 @media(max-width:1100px){
  width: 8rem;
  margin: .7rem;
}
`;


export const StatisticsContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;


export const Formm = styled.div`
margin: auto;
justify-content: center;
align-items: flex-start;
display: flex;

@media (max-width:900px) {
 /* display: flex; */
flex-direction: column;
}

@media(max-width:700px){ 
  /* margin-right: -5rem; */
  /* width: 30rem; */
}

`;

export const DivPass = styled.div`
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
/* margin-top: 1.5rem; */
color: #2980b9 !important;
font-weight: bold;
text-align: center;
padding: 2rem 0 10px 0;
font-family: 'Noto Kufi Arabic', sans-serif;
font-size: .9rem;
border-bottom:0.1px solid silver;
@media(max-width:1100px){
  font-size: .6rem;
  font-weight: bold;
}
`;

export const Wird = styled.h1`
text-align: center;
/* padding: 0 0 20px 0; */
font-family: 'Noto Kufi Arabic', sans-serif;
font-size: 1.2rem;
display: inline-block;
color: #fff;
padding: 1.3rem;
width: 20rem;
cursor: pointer;
border-radius: 4px;
background-color: #94C3D9;
box-shadow: 1px 1px 13px 0px #4235357a;


@media(max-width:1100px){
  font-size: 1rem;
  font-weight: bold;
}

@media(max-width:500px){
margin-top: 2rem;
width: 15rem;

}
`;

export const H3Login = styled.h3`
text-align: center;
/* margin-bottom: .5rem; */
padding: 1rem 0 1rem 0;
/* border-bottom: 1px solid silver; */
font-family: 'Noto Kufi Arabic', sans-serif;
font-size: 1rem;
color: #E94f57 !important;
@media(max-width:1100px){
  font-size: .8rem;
  font-weight: bold;
}
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
color: orange;
border-bottom: 2px solid #2691d9;
:focus{
transition: .1s;
border-bottom: 3px solid orange;
}
`;

export const Span = styled.span`
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


export const DropdownDiv = styled.div`
width: 20rem;
@media (max-width:550px) {
    width: 100%;
}
margin: auto;
/* margin-bottom: 0rem; */
margin-top: 1rem;
@media (max-width:500px) {
width: 15rem;
margin-bottom: 1rem;
margin-top: 1rem;
}
`;



export const DropdownList = styled.select`
width: 20rem;
@media (max-width:550px) {
    width: 100%;
}
font-family: 'Noto Kufi Arabic', sans-serif;
/* color: #213C64; */
color: white;
font-size: 1.3rem;
padding:1rem;
border-radius: 4px;
background-color: #E94F57;
box-shadow: 1px 3px 12px 0px #0000007a;
border: none;
outline: none;
:hover{
  outline: none;
  border: none;
  color: #213C64;
  background-color: white;
}
:focus{
  outline: none;
  color: #213C64;
  border: none;
  background-color: white;
}
@media (max-width:500px) {
  font-size: .8rem;
  width: 15rem;
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