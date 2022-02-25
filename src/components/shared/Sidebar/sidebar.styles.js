import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SideBarContainer = styled.div`
  background-color: white;
  height: 100vh;
 box-shadow: 1px 3px 12px 2px #0000007a;

  text-align: center;
  color: lightgray;
  width: 15rem;
  /* :hover{
    transition: opacity 0.2s linear,visibility 0.2s linear;
    opacity: 0;
    visibility: hidden;
  } */
`;

export const UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row-reverse;
  align-items: center;
  /* color: lightgray; */
`;

export const Username = styled.label`
  border-bottom: 1px solid lightgray;
  padding: 0.5rem;
  color: #213C64;
  font-size: 1.1rem;
  font-weight: bold;
`;

export const UserPicContainer = styled.span`
  > svg {
    width: 2rem;
  }
`;

export const MenuIconContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  > svg {
    width: 2rem;
  }

`;

export const MenuContainer = styled.div`

 
`;

export const MenuLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  justify-content: flex-end;
  padding: 1rem;
  /* color: lightgray; */
  color: #213C64;
  :hover{
    color: #F4B069;
  }
  :focus{
    color: #F4B069;
  }
`;
