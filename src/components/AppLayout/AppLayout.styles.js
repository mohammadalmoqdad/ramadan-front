import styled from "styled-components";

export const BodyContent = styled.div`
margin:0;
/* min-height: calc(100vh); */
background: ${(props)=> props.color}
margin-top: 5rem;
@media (max-width:500px) {
  /* padding-top: 15rem; */
}
width: 85%;
@media(max-width:1000px){ 
width: 80%;
}
@media(max-width:750px){ 
width: 75%;
}
@media (max-width:550px) {
  width: 100%;
min-height: auto !important;

}
`;