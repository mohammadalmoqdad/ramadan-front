import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const fadeIn = keyframes`
  from {
    max-width: 15rem;
  }
  
  to {
    /* max-height: 3.8rem; */
    max-width: 4rem;
  }`;

const fadeOut = keyframes`
  from {
    max-width: 4rem;
    /* max-height: 100vh; */
    &{
      /* position: static; */
    }
  }
  
  to {  
    max-width: 15rem;
  }
`;

export const SideBarContainer = styled.div`
  /* animation: ${({ isSidebarCollapsed }) => {
    if (isSidebarCollapsed === true) return fadeIn;
    if (isSidebarCollapsed === false) return fadeOut;
    return "";
  }}
    ease-in-out forwards; */
  animation-duration: 0.2s;
  margin-top: 5rem;
  background-color: white;
  font-family: 'Noto Kufi Arabic', sans-serif !important;
  
  height: 100%;
  width: 15rem;
  box-shadow: 2px 19px 10px 2px #00000063;
  text-align: center;
  color: lightgray;
  /* width: 15rem; */
  /* display: none; */
  /* position: fixed; */
  /* width:100%; */
  right: 0;
  @media(max-width:750px){ 
  width: 12rem;
}
@media (max-width:550px) {
  display: none;
  
}
position: fixed;
  width:15rem;
  right: 0;
`;

export const UserInfoContainer = styled.div`
  display: ${({ isSidebarCollapsed }) => {
    if (isSidebarCollapsed === true) return "none";
    if (isSidebarCollapsed === false) return "flex";
    return "flex";
  }};
  padding-top: 2.5rem;
  justify-content: space-around;
  flex-direction: row-reverse;
  align-items: center;
  /* color: lightgray; */
`;

export const Username = styled.label`
  border-bottom: 1px solid lightgray;
  padding: 0.5rem;
  color: #213c64;
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
  width: 100%;
`;

export const MenuLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  justify-content: flex-end;
  align-items: center;
  /* padding: 1rem; */
  color: #213c64;
  white-space: nowrap;
  width: 100%;
  height: 3.063rem;
  padding: 0.5rem 0.8rem;
  :hover {
    background-color: #f4b069;
    color: white;
  }
  :focus {
    background-color: #f4b069;
    color: white;
  }
  > svg {
    width: 1.4rem;
    margin-left: 0.5rem;
  }
`;

export const MenuItem = styled.span`
  display: ${({ isSidebarCollapsed }) => {
    if (isSidebarCollapsed === true) return "none";
    if (isSidebarCollapsed === false) return "flex";
    return "";
  }};
  cursor: pointer;
  background-color: inherit;
  padding: 0;
  border: none;
  width: 100%;
  @media(max-width:750px){ 
  font-size: .8rem;
}
  /* margin-right: 1rem; */
`;