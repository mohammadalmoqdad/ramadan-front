import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SideBarContainer = styled.div`
  background-color: blue;
  height: 100vh;
  text-align: center;
  color: lightgray;
  width: 18rem;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row-reverse;
  align-items: center;
  color: lightgray;
`;

export const Username = styled.label`
  border-bottom: 1px solid lightgray;
  padding: 0.5rem;
`;

export const UserPicContainer = styled.span`
  > svg {
    width: 2rem;
  }
`;

export const MenuIconContainer = styled.span`
  > svg {
    width: 2rem;
  }
`;

export const MenuContainer = styled.div``;

export const MenuLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  justify-content: flex-end;
  padding: 1rem;
  color: lightgray;
`;
