import styled from "styled-components";

export default styled.div`
display: flex;
margin: auto;
width: auto;
/* height: auto; */

background: #FBF9F7;
border-radius: 24px;

max-width: 949px;
@media (max-width:1444px) {
  width:auto;


}
`;

export const TopRanksAndParticipants = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 42px;
margin: auto;
/* margin-left: 1.5rem;
margin-right: 1.5rem; */
margin: 1.5rem;
width: 100%;
/* height: 138px; */
max-width: 949px;

@media (max-width:1444px) {
  width:auto;
  align-items: flex-start;
margin-left: 1.5rem;
margin-right: 1.5rem;
}

@media (max-width:1000px) {
  flex-direction: column
}

@media (max-width:500px) {
  flex-direction: column;
  margin-left: 1rem;
margin-right: 1rem;
}
`;

export const ParticipantsMember = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0px;
gap: 12px;

width: 294px;
height: auto;


@media (max-width:500px) {
width: 200px;

}
`;


export const ParticipantsTitels = styled.div`
justify-content: space-between;

width: 100%;
height: 20px;
display: flex;

@media (max-width:37.5625rem) {
}
`;
export const TopRanksSection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0px;
gap: 12px;

/* width: 568px; */
/* height: 138px; */
height: auto;

@media (max-width:1400px) {
width: 294px;

}
@media (max-width:500px) {
width: 200px;

}
`;

export const ParticipantsNumbers = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 24px;
gap: 24px;

width: 100%;
/* height: 106px; */

background: #F9EAEA;
border-radius: 24px;
max-width: 567px;
/* justify-content: center; */
justify-content: flex-start;
/* justify-content: center; */


@media (max-width:500px) {
padding: 12px;
gap: 2px;
justify-content: center;

}
`;

export const ParticipantsTitelsAtHome = styled.div`
width: 100px;
height: 19px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
text-align: center;

color: #000000;
@media (max-width:37.5625rem) {
}
`;

export const SeeAll = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 6px;

/* position: absolute; */
width: 78px;
height: 20px;
/* left: 216px;
top: 0px; */


@media (max-width:37.5625rem) {
}
`;

export const SeeAllP = styled.div`
width: 52px;
height: 19px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
text-align: right;

color: #FF5367;

@media (max-width:37.5625rem) {
}
`;

export const SeeAllIcon = styled.img`
/* position: absolute;
left: 12.5%;
right: 12.5%;
top: 12.5%;
bottom: 12.5%; */

/* background: #FF5367; */
@media (max-width:37.5625rem) {
}
`;

export const TotalOfMembers = styled.div`
width: 78px;
height: 58px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 59px;

color: #000000;
@media (max-width:500px) {
height: 35px;
font-size: 35px;
line-height: 35px;
}
`;

export const MemberImgsAndNumNumbers = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 12px;

width: 142px;
height: 36px;
@media (max-width:500px) {
  gap: 2px;


}
`;

export const MembersImgs = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
position: relative;
width: 96px;
height: 36px;
@media (max-width:500px) {
  align-items: center;

}
`;

export const MemberNumbers = styled.div`
width: 34px;
height: 17px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
/* identical to box height */
text-align: center;
color: #A79F97;

@media (max-width:37.5625rem) {
}
`;

export const MembersImg = styled.div`
position: absolute;
/*  */
background: #FDD561;
border-radius: 12px;
width: 36px;
height: 36px;
/* width: 23px;
height: 17px; */
display: flex;
align-items: center;
justify-content: center;

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
/* identical to box height */
text-align: center;

color: #000000;

@media (max-width:500px) {
  border-radius: 8px;
width: 30px;
height: 30px;
}
`;



export const Top3Rank = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 23px 24px;

width: 567px;
height: 106px;

background: #F9EAEA;
border-radius: 24px;


@media (max-width:37.5625rem) {
}
`;

export const ParticipantsNumbersRanks = styled.div`

display: flex;
flex-direction: row;
/* align-items: center; */
padding: 0px;


/* width: 519px; */
/* height: 60px; */
@media (max-width:1400px) {
  flex-direction: column;
  /* width: 100%; */
  align-items: flex-start;
  margin: auto;
}
@media (max-width:500px) {
  justify-content: center
}
`;

export const Top3RankDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 12px;

width: 189px;
/* height: 60px; */

@media (max-width:1400px) {
  margin-top: 5px;
  width: auto;
}
@media (max-width:500px) {
  /* gap: 2px; */

}
`;

export const Top1Img = styled.div`


background: #FDD561;
border-radius: 12px;

display: flex;
align-items: center;
justify-content: center;

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 17px;
text-align: center;

color: #000000;
width: 60px;
height: 60px;
@media (max-width:1400px) {
  width: 36px;
height: 36px;
font-size: 14px;
font-size: 14px;

}
`;

export const Top1Name = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;

color: #000000;
width: 117px;
@media (max-width:1400px) {
width: auto;

}
`;

export const Top2Name = styled.div`

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
/* identical to box height */
width: 117px;

color: #000000;

@media (max-width:1400px) {
width: auto;

}
`;

export const Top2Img = styled.div`
width: 36px;
height: 36px;
background: #FDD561;
border-radius: 12px;
display: flex;
align-items: center;
justify-content: center;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
text-align: center;
color: white;
@media (max-width:37.5625rem) {
}
`;
