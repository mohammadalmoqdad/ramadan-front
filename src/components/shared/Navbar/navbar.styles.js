import styled from "styled-components";
import { colors } from "styles";
import { Link } from "react-router-dom";

export default styled.header`
  z-index: 2;
  position: sticky;
  top: 0;
  font-family: var(--font-family-head);
  display: flex;
  flex-direction: var(--flex-direction);
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem 3.5rem;
  width: 100%;
`;

export const NavDropdownlist = styled.div`
  font-size: 1.3rem;
  color: #2980b9;
`;

export const NavDropdownli = styled.div`
  font-size: 1.3rem;
  display: none;
  @media (max-width: 750px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const A = styled.h4`
  transition: all 0.3s ease 0s;
  font-size: 1.3rem;
  color: #2980b9;
  padding-top: 0.5rem;
  @media (max-width: 750px) {
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
  }
`;

export const H5 = styled.h4`
  transition: all 0.3s ease 0s;
  font-size: 1.3rem;
  color: #2980b9;
  padding-top: 0.5rem;
  @media (max-width: 750px) {
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 1rem;
  }
`;

export const PageTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  margin: 0;
  text-align: var(--text-align);
  @media (max-width: 550px) {
    margin-bottom: 1rem;
    font-size: larger;
    padding: 0 0.7rem;
  }
`;

export const RightNavItems = styled.div`
  display: flex;
  flex-direction: var(--flex-direction);
  gap: 1rem;
  @media (max-width: 550px) {
    margin: -1.5rem 1rem 0 1rem;
  }
`;

export const LeftNavItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavItem = styled.div`
  padding: 1rem;
  width: 3.5rem;
  background-color: ${colors.yellow};
  color: ${colors.black};
  border-radius: 1.5rem;
  text-align: center;
  cursor: pointer;
  max-height: 3.5rem;
  font-weight: 600;
  font-family: var(--body-font-family);
  font-style: normal;
  text-transform: uppercase;
`;

export const Container = styled.div`
  position: relative;
`;

export const UserName = styled.p`
  font-weight: 700;
`;

export const Navbar = styled.div`
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: var(--flex-direction);
  padding: 1rem;
  @media (max-width: 550px) {
    /* position: fixed; */
    padding: 0;
    z-index: 999;
  }
`;

export const MenuIcon = styled.a`
  display: inline-block;
  padding: 0.625rem;
  cursor: pointer;
  margin-top: 1rem;
  display: flex;
  flex-direction: var(--flex-direction);
  @media (min-width: 768px) {
    display: none;
  }
`;

export const SidebarMenu = styled.div`
  position: fixed;
  top: 0;
  ${({ isArabicTheme }) => {
    if (isArabicTheme) return "right:-100%";
    return "left: -100%;";
  }};
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 998;
  transition: all 0.3s ease-in-out;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  &.open {
    ${({ isArabicTheme }) => {
      if (isArabicTheme) return "right:0;";
      return "left: 0;";
    }}
  }

  div {
    display: block;
    div {
      width: 100%;
    }
    & svg {
      display: inline;
    }
  }
`;

export const PopupListWrapper = styled.div`
  z-index: 100;
  top: 5rem;
  position: absolute;
  background-color: ${colors.lightGrey};
  padding: 1rem;
  ${({ isArabicTheme }) => {
    if (isArabicTheme) return "left:0;";
    return "right: 0;";
  }}
  width: 18rem;
  border-radius: 1rem;

  @media (max-width: 550px) {
    width: 100%;
    height: 100vh;
    ${({ isArabicTheme }) => {
      if (isArabicTheme) return "right:0;";
      return "left: 0;";
    }}
    top: 0;
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: var(--flex-direction);
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${colors.lightRed};
`;

export const List = styled.ul`
  margin: 1rem 0;
  padding: 0;
  list-style: none;
  color: ${colors.darkGrey};
  font-family: var(--font-family-main);
  /* right: ; */
`;

export const ListItem = styled.li`
  margin: 0;
  padding: 0.5rem 0.2rem;
  display: flex;
  flex-direction: var(--flex-direction);
  gap: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: ${colors.lightRed};
  }
  & svg {
    height: 1.5rem;
    width: 1.5rem;
    color: #fb6e3a;
  }
`;

export const MenuTitle = styled.span`
  /* font-size: large; */
  a {
    text-decoration: none;
    color: ${colors.darkGrey};
  }
`;

export const LinkElement = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${colors.black};
  font-weight: 700;
  &:focus {
    color: ${colors.black};
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: var(--flex-direction);
  justify-content: flex-start;
  gap: 0.5rem;
`;

export const CloseIcon = styled.i`
  cursor: pointer;
`;

export const ProfilePicture = styled.div`
  /* position: relative; */
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  background-color: ${colors.yellow};
  border-radius: 1rem;
  background-image: ${(props) => `url(${props.src})`};
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: 700;
  text-transform: uppercase;
`;

export const ProfileName = styled.p`
  font-weight: 700;
  line-height: 35px;
`;
