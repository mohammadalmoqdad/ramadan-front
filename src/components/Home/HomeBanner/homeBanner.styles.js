import styled from "styled-components";

export default styled.div`
/* display: flex; */
margin: auto;
width: 100%;
position: relative;
/* width: 59.3125rem; */
height: 19.5rem;
background: #FF5367;
border-radius: 1.5rem;
max-width: 59.375rem;

@media (max-width:37.5625rem) {
  height: 252px;
}
`;

export const CirclesStyle = styled.div`
position: absolute;
width: 100%;
height: 19.5rem;
display: flex;
border-radius: 1.5rem;
overflow: hidden;
z-index: .2;

@media (max-width:37.5625rem) {
  height: 252px;
}
`;

export const FirstCircle = styled.div`
content: '';
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

export const ContentAndImgs = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
height: 100%;
@media (max-width:43.75rem) {
}`;
//   /////////////////////////////////////////////////
export const StudentBanner = styled.div`
margin-right: -6rem;
justify-content: right;
align-items: flex-start;
display: flex;
@media (max-width:56.25rem) {
  display: none;
}`;

export const StudentBanner1 = styled.img`
position: relative;
left: -17.8rem;
top: 4.7rem;
width: 146px;
height: 146px;

@media (max-width:43.75rem) {
}`;

export const StudentBanner2 = styled.img`
position: relative;
width: 216px;
height: 216px;
@media (max-width:43.75rem) {
}`;

//   /////////////////////////////////////////////////

export const ContentBanner = styled.div`
margin-left: 4rem;

position: relative;

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 36px;

width: 317px;
height: 216px;

@media (max-width:56.25rem) {
margin: auto;
align-items: center;

}`;


export const TitleContent = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0rem;
gap: .75rem;

width: 19.8125rem;
height: 7.5rem;

@media (max-width:56.25rem) {
align-items: center;
}`;


export const WelcomeName = styled.div`
width: 19.8125rem;
height: 5.375rem;

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 2.25rem;
line-height: 2.75rem;

color: #FFFFFF;

@media (max-width:56.25rem) {
text-align: center;
font-size: 1.875rem;
}
`;


export const DayContent = styled.div`
width: 11.6875rem;
height: 1.375rem;

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 1.125rem;
line-height: 1.375rem;
color: #FFBAC2;

@media (max-width:56.25rem) {
text-align: center;
}`;


export const ResultButton = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1.25rem 1.5rem 1.3125rem;
gap: .625rem;

width: 12.5625rem;
height: 3.75rem;

background: #FDD561;
border-radius: 6.25rem;

@media (max-width:37.5rem) {
  height: 2.5rem;
padding: 0rem;
}`;

export const ButtonTitle = styled.p`
width: 9.5625rem;
height: 1.1875rem;

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 1rem;
line-height: 1.25rem;

color: #000000;

@media (max-width:37.5rem) {
  font-size: .875rem;
  margin: auto;

}`;
