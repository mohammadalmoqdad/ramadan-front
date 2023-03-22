import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavStyle.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import HeaderNavContainer, {
  // H5,
  // NavDropdownli,
  // NavDropdownlist,
  // Logo,
  // A,
  NavItem,
  PageTitle,
  Container,
  MenuIcon,
  Navbar,
  ListItem,
  List,
  Link,
  RightNavItems,
  LeftNavItems,
  SidebarMenu,
} from "./navbar.styles";
// import { HedarNav, Ul, Li } from "../styles";

import { useLocation } from "react-router-dom";
import { useAdminContext } from "../../../contexts/AdminContext";
import { isSuperAdmin } from "../../../util/ContestPeople_Role";
import { useTranslation } from "react-i18next";
import mapRoutesToPagesNames from "../../../data/pageNames";
import { ReactComponent as SidebarIcon } from "assets/icons/sidebarIcon.svg";
import Sidebar from "../Sidebar";
import { arabicTheme, englishTheme } from "styles";

function Nav({ changeTheme, theme }) {
  const { t } = useTranslation();
  const [hasPermission, setPermission] = useState(false);
  const context = useAdminContext();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);

  // changeTheme(arabicTheme);
  // TODO: might need a useeffect depends on the theme, so we don't need a refresh when the theme is changed.

  // const isArabicThemeSelected = theme?.flex?.direction === "row-reverse";

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const showNavbar = ![
    "/login",
    "/Signup",
    "/ResetPassword",
    "/ForgotPassword",
  ].includes(pathname);

  useEffect(() => {
    setPermission(
      Object.keys(context.adminInfo).length > 0 && isSuperAdmin(context)
    );
  }, [context.adminInfo]);
  console.log(mapRoutesToPagesNames[pathname]);
  return (
    <div>
      {showNavbar && (
        <header>
          <Container>
            <Navbar>
              <LeftNavItems>
                <MenuIcon onClick={handleToggle}>
                  <SidebarIcon />
                </MenuIcon>
                <PageTitle>
                  {mapRoutesToPagesNames.hasOwnProperty(pathname)
                    ? t(mapRoutesToPagesNames[pathname])
                    : ""}
                </PageTitle>
              </LeftNavItems>
              <RightNavItems>
                <NavItem>+</NavItem>
                <NavItem onClick={() => setShowUserInfo(!showUserInfo)}>
                  JM
                </NavItem>
                <>{showUserInfo && <Container>hhhhh</Container>}</>
              </RightNavItems>
            </Navbar>
            <SidebarMenu
              className={isOpen ? "open" : ""}
              // isArabicTheme={theme?.flex?.direction === "row-reverse"}
            >
              <MenuIcon onClick={handleToggle} style={{ marginTop: "1rem" }}>
                <SidebarIcon />
              </MenuIcon>
              <Sidebar setIsSideBarCollapsed={handleToggle} />
            </SidebarMenu>
          </Container>
        </header>
      )}
    </div>
  );
}

export default Nav;
