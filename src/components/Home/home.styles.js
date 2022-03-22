import styled from "styled-components";

export const HomeContainer = styled.div`
 display: flex;
 align-items: flex-start;
 padding-left: 5%;
 padding-right: 5%;
 
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  @media(max-width:700px){ 
    margin: auto;
  }
  @media(max-width:550px){ 
    margin: auto;
  }
  @media(max-width:375px){ 
    margin: auto;
  }
`;

// **************** First section **********************
export const StatisticsSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
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
export const IntroductionSection = styled.div`
margin: auto;
margin-top: 2rem;
justify-content: center;
align-items: flex-start;
display: flex;
padding-bottom: 4rem;
flex-direction: column;

@media(max-width:700px){ 
    margin: auto;
    margin-top: 2rem;
}

@media(max-width:550px){ 
margin: auto !important;
margin-top: 2rem;
}
`;

export const IntroductionSectionDiv = styled.div`
/* width: 35rem; */
margin-left: 2rem;
margin-right: 2rem;
justify-content: center;
align-items: flex-start;
@media(max-width:1100px){ 
  /* margin-right: -5rem; */
  /* width: 30rem; */
}
@media(max-width:1000px){ 
  /* margin-right: -5rem; */
  justify-content: center;
  align-items: flex-start;
/* display: flex; */
  /* width: 35rem; */
  text-align: center;
}
@media(max-width:700px){ 
  /* margin-right: -5rem; */
  justify-content: center;
  align-items: flex-start;
  /* display: flex; */
  /* width: 5rem; */
  text-align: center;
  margin: auto;
}

@media(max-width:650){
margin: auto;
margin-right: auto;

justify-content: center;
align-items: center;
text-align: center;

/* width: 25rem ; */
}
`;

export const IntroductionDiv = styled.div`
justify-content: center;
align-items: center;
display: flex;

@media(max-width:1100px){
margin-right: 5rem;
}

@media(max-width:1000px){
margin: auto;
flex-direction: column;
justify-content: center;
align-items: center;
}

@media(max-width:1000px){
  margin: auto;
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
margin: auto;
/* margin-right: 6.5rem; */
justify-content: center;
}
@media(max-width:550px){
margin-top: 1rem;
justify-content: center;
align-items: center;
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
/* justify-content: center;
align-items: center; */
text-align: center;
}
@media(max-width:900px){
  margin: auto;
padding-right: 0rem;

/* padding-right: 0rem; */
}
@media(max-width:700px){
  width: 25rem;

}
@media(max-width:650px){
padding-right: 0rem;

  /* width: 20rem; */
  margin: auto;
  margin-top: 2rem;
  /* margin-bottom: 1rem; */
  text-align: center;
  /* padding-right:10rem; */
}
@media(max-width:550px){
  /* width: 20rem; */
  margin: auto;
  margin-top: 2rem;
  /* margin-bottom: 1rem; */
  /* padding-right:0rem; */

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
  /* width: 30rem; */
  margin-top: 1rem;
}
@media(max-width:1000px){
  text-align: center;
}
@media(max-width:700px){
  margin-left: 1rem;
  /* width: 25rem; */
  /* margin: auto; */
  /* margin-right: 7rem; */
}
@media(max-width:650px){
  width: 25rem;
    margin: auto;
    margin-top:1rem;
    /* margin-right: 13rem; */
}
@media(max-width:600px){
  /* margin: auto; */
  width: 17rem;

}
`;

export const BorderBottom = styled.div`
width:80%;
height: .3rem;
background-color: #E94f57;
margin: auto;
margin-top: 4rem;
border-radius: 20px;
justify-content: center;
align-items: center;
@media(max-width:650px){
    margin-top: 2rem;
}
`;
// **************** Third section **********************
export const VideoSection = styled.div`
width: 90%;
height: 20rem;
background-color: silver;
margin: auto;
margin-left: 2rem;
margin-right: 2rem;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 5rem;
margin-top: 3rem;
@media(max-width:650px){
  width: 25rem;
  justify-content: center;
  align-items: flex-start;
  display: flex; 
  margin: auto;
  margin-top: 2rem;
}

@media(max-width:600px){
  width: 80%;

}
`;