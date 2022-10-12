import styled from "styled-components";

export default styled.main`
display:flex;
width: 100%;
background-color: #FFF;
height: 100%;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
 @media (max-width:500px) {
  display: flex;
  flex-direction: column;
}
`;

export const DivCenter = styled.div`
display:flex;

::after{
  content: "";
  width: 6rem;
  height: 6rem;
  border: 10px solid #dddddd;
  border-top-color: blue;
  border-right-color: orange ;

  border-radius: 50%;
  animation: loading 1s linear infinite;
}
@keyframes loading {
  to{
    transform: rotate(1turn);
  }
}
@media (max-width:500px) {
  ::after{
    width: 4rem;
    height: 4rem;
  }
}
`;

export const H1 = styled.h1`
font-family: 'Noto Kufi Arabic', sans-serif;
color: #213C64;
font-size: 3rem;
align-items: center;
margin-left: 2rem;

@media (max-width:500px) {
  margin-top: 2rem;
  font-size: 2rem;
  margin-right: 1rem;
  font-family: 'Noto Kufi Arabic', sans-serif;
  color: #213C64;
}
`;
