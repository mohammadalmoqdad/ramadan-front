import styled from "styled-components";

export default styled.div`
/* display: flex; */
margin: auto;

width: 949px;
height: 312px;
background: #FF5367;
border-radius: 24px;
`;

export const CirclesStyle = styled.div`

width: 949px;
height: 312px;
display: flex;
border-radius: 24px;
overflow: hidden;

@media (max-width:43.75rem) {
}
`;

export const FirstCircle = styled.div`
content: '';
display: flex;
width: 100%;
height: 100%;
clip-path: circle(55% at 108% 116%);
background: #FDD561;
@media (max-width:43.75rem) {
}
`;

export const SecondCircle = styled.div`
content: '';
width: 100%;
height: 100%;
background: #FE7786;
clip-path: circle(73% at -4% -1%);

@media (max-width:43.75rem) {
}
`;
