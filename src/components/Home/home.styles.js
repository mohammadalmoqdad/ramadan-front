import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  /* justify-content: center; */
align-items: flex-start;
  /* flex-direction: row-reverse; */

`;
export const Div = styled.div`
  display: flex;
  width: 100%;
  margin-right: 15rem;
  /* justify-content: center; */
  /* align-items: flex-start; */
  flex-direction: column;

  /* flex-direction: row-reverse; Div*/
`;

// **************** First section **********************
export const StatisticsSection = styled.div`
margin-top: 20rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const StatisticsContainer = styled.div`
  padding: 1rem;
  min-width: 8rem;
  max-height: 10rem;
  border: 5px solid black;
  border-radius: 6rem;
  text-align: center;
`;

export const StatisticsNumber = styled.p``;

export const StatisticsTitle = styled.p``;

export const StatiticsNote = styled.p`
  font-size: small;
`;

// **************** Second section ********************** WirdMinIntroduction Introduction
export const IntroductionSection = styled.section`
margin: auto;
margin-top: 5rem;
justify-content: center;
align-items: flex-start;
display: flex;
padding-bottom: 4rem;
flex-direction: column;
/* border-bottom:.1px solid silver; */

`;

export const IntroductionSectionDiv = styled.section`
width: 35rem;
justify-content: center;
align-items: flex-start;


@media(max-width:1100px){ 
  margin-right: -5rem;

  width: 30rem;
}
@media(max-width:1000px){ 
  /* margin-right: -5rem; */
  justify-content: center;
  align-items: flex-start;
/* display: flex; */
  width: 35rem;
  text-align: center;
}

@media(max-width:700px){ 
  /* margin-right: -5rem; */
  justify-content: center;
  align-items: flex-start;
/* display: flex; */
  width: 35rem;
  text-align: center;

}


`;
export const IntroductionDiv = styled.div`
justify-content: center;
align-items: flex-start;
display: flex;

@media(max-width:1100px){
margin-right: 5rem;
}
@media(max-width:1000px){
  margin: auto;
flex-direction: column;
justify-content: center;
align-items: flex-start;
}

`;
export const WirdLogoInHome = styled.div`
/* width: 50rem; */
/* display: flex; */
justify-content: center;
align-items: flex-start;
>img{
  @media(max-width:1100px){
     width: 150;
}
}
@media(max-width:1000px){
/* margin-right: 5rem; */
margin: auto;

/* display: flex; */
justify-content: center;
/* align-items: flex-start; */

}
`;

export const WirdMinIntroduction = styled.div`
margin-top: 1.5rem;
padding-right: 2rem;
text-align:right;
font-weight:bolder;
/* padding: 0 0 20px 0; */
font-family: 'Noto Kufi Arabic', sans-serif;
font-size: 1.8rem;
color: #2980b9;

@media(max-width:1100px){
  font-size: 1.4rem;
  font-weight: bold;
  width: 30rem;

}

@media(max-width:1000px){
/* margin-right: 5rem; */
margin: auto;

/* display: flex; */
justify-content: center;
align-items: center;
text-align: center;

}


@media(max-width:900){
/* margin-right: 5rem; */
margin: auto;
}
`;

export const Introduction = styled.div`
margin-top: 2rem;
text-align: right;
/* padding: 0 0 20px 0; */
font-family: 'Noto Kufi Arabic', sans-serif;
font-size: 1.4rem;
color: orange;

@media(max-width:1100px){
  font-size: 1rem;
  width: 30rem;
  margin-top: 1rem;

}
@media(max-width:1000px){
  text-align: center;


}
`;

export const BorderBottom = styled.div`
/* margin-top: 1.5rem; */
width: 40rem;
height: .3rem;
background-color: #E94f57;
margin: auto;
margin-top: 4rem;
border-radius: 20px;
@media(max-width:1000px){
  width: 35rem;

}
`;
// **************** Third section **********************
export const VideoSection = styled.section`
width: 40rem;
height: 20rem;
background-color: silver;
margin: auto;
display: flex;
justify-content: center;
/* align-items: flex-start; */

margin-bottom: 5rem;

@media(max-width:1000px){
  width: 35rem;

}
`;
