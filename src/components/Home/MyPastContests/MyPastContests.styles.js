import styled from "styled-components";

import {
  RightLeftArrow as DefaultRightLeftArrow,

} from "../DaysSlider/DaysSlider.styles";

export default styled.div`
/* display: flex;
margin: auto;
width: auto;
height: auto;

background: #FBF9F7;
border-radius: 24px;
margin-top: 3rem;

max-width: 949px; */

margin: auto;
margin-top: 3rem;
width: 100%;
/* width: auto; */

/* position: relative; */
/* width: 59.3125rem; */
border-radius: 1.5rem;
max-width: 59.375rem;


@media (max-width:1444px) {
  width:auto;


}
`;

export const TopRank = styled.div`
display: flex;
margin: auto;
width: auto;
/* height: auto; */

background: #FBF9F7;
border-radius: 24px;

max-width: 949px;
margin-top: 3rem;

@media (max-width:1444px) {
  width:auto;
  align-items: flex-start;
margin-left: 1.5rem;
margin-right: 1.5rem;
}`

export const MyOngoingContestDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
/* max-width: 59.375rem; */
margin: auto;
@media (max-width:1444px) {

}`

export const VictorArrows = styled.div`
display: flex;
width: (10rem);
@media (max-width:1444px) {

}`

export const RightLeftArrow = styled(DefaultRightLeftArrow)`
display: flex;
margin-left: 1rem;
/* width: (10rem); */
@media (max-width:1444px) {

}`

