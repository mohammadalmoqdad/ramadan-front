import styled from "styled-components";

export default styled.div`
width: 100%;
height: 60rem;
background: #FFF;

display: flex;
justify-content: center;
align-items: flex-start;
/* padding: 5rem; */
/* flex-direction: column; */

@media (max-width:1000px) {
flex-direction: column;
}

@media (max-width:500px) {
  padding: 2rem;
  width: 30rem;
}
.content{
  overflow: scroll;
  max-height: 750px;
}

`;