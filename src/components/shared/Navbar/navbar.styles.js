import styled from "styled-components";
import { colors } from "styles";

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
`;

export const Container = styled.div`
  position: relative;
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

export const CloseIcon = styled.a`
  display: inline-block;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  cursor: pointer;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  margin: 0;
  padding: 0;
`;

export const Link = styled.a`
  display: block;
  padding: 10px;
  color: #000;
  text-decoration: none;
`;

{
  /* <HedarNav>
            <Ul>
            <Li>
            <NavDropdownlist>
            <NavDropdownli>
            <NavDropdown
            className="NavDropdow"
            style={{ color: "#e9f4fb" }}
            >
            <NavDropdown.Item className="NavDropdow" href="/">
            {t("home-page")}
            </NavDropdown.Item>
            {hasPermission && (
              <NavDropdown.Item href="/competition">
              {t("contest-information")}
              </NavDropdown.Item>
              )}
              <NavDropdown.Item href="/top-students">
              {t("leaders-board")}
              </NavDropdown.Item>
              <NavDropdown.Item href="/admins">
              {t("admins")}
              </NavDropdown.Item>
              <NavDropdown.Item href="/students">
              {t("students")}
              </NavDropdown.Item>
              <NavDropdown.Item href="/standards">
              {t("criterias")}
              </NavDropdown.Item>
              <NavDropdown.Item href="/review-other-points">
              {t("text-inputs")}
              </NavDropdown.Item>
              <NavDropdown.Item href="/students-points">
              {t("results-page")}
              </NavDropdown.Item>
              {hasPermission && (
                <NavDropdown.Item href="/export-points">
                {t("extract-results")}
                </NavDropdown.Item>
                )}
                <NavDropdown.Item href="/groups">
                {t("groups-page")}
                </NavDropdown.Item>
                </NavDropdown>
                </NavDropdownli>
                </NavDropdownlist>
                </Li>
                </Ul>
                <div>
                <NavItem>+</NavItem>
                <NavItem>JM</NavItem>
                </div>
              </HedarNav> */
}

{
  /* </HeaderNavContainer> */
}
