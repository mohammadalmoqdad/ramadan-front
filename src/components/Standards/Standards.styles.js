import styled from "styled-components";
import {DropdownList} from "../Admins/Admins.styles";

export default styled.div`
width: 100%;
height: 60rem;
background: #ffffff;;

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
}

`;

export const StandardsDropDownList = styled(DropdownList)`
width: auto;
margin: 0;
`;