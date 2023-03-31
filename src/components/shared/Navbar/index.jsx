import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavStyle.css";
import { FaTimes, FaLanguage } from "react-icons/fa";
import HeaderNavContainer, {
  NavItem,
  PageTitle,
  Container,
  MenuIcon,
  Navbar,
  ListItem,
  List,
  LinkElement,
  RightNavItems,
  LeftNavItems,
  SidebarMenu,
  PopupListWrapper,
  MenuTitle,
  CloseIcon,
  ProfilePicture,
  ProfileName,
  ProfileInfo,
  UserInfoWrapper,
} from "./navbar.styles";

import Loader from "../../Loader";
import { Link, useLocation } from "react-router-dom";
import { useAdminContext } from "../../../contexts/AdminContext";
import { changeLanguage, isSuperAdmin } from "../../../util/ContestPeople_Role";
import { useTranslation } from "react-i18next";
import mapRoutesToPagesNames from "../../../data/pageNames";
import { ReactComponent as SidebarIcon } from "assets/icons/sidebarIcon.svg";
import { ReactComponent as MyAccountIcon } from "assets/icons/myAccount.svg";
import { ReactComponent as HelpIcon } from "assets/icons/help.svg";
import { ReactComponent as LogoutIcon } from "assets/icons/logout.svg";
import Sidebar from "../Sidebar";
import { arabicTheme, englishTheme } from "styles";
import { useNavigate } from "react-router-dom";

function Nav({ changeTheme, theme }) {
  const { t } = useTranslation();
  const [hasPermission, setPermission] = useState(false);
  const context = useAdminContext();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, [theme]);

  if (loading) {
    return (
      <main>
        <Loader />
      </main>
    );
  }
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
                <NavItem>
                  {" "}
                  <LinkElement
                    to="/competition/#create-contest"
                    title="Create Contest"
                  >
                    +
                  </LinkElement>
                </NavItem>
                <NavItem onClick={() => setShowUserInfo(!showUserInfo)}>
                  {context?.adminInfo?.username
                    ? context?.adminInfo?.username[0] +
                      context?.adminInfo?.username[1]
                    : ""}
                </NavItem>
                <>
                  {showUserInfo && (
                    <PopupListWrapper isArabicTheme={theme?.name === "ar"}>
                      <UserInfoWrapper>
                        <ProfileInfo>
                          <ProfilePicture
                            src={context?.adminInfo?.profile_photo}
                          >
                            {context?.adminInfo?.profile_photo ??
                              context?.adminInfo?.username?.[0] +
                                context?.adminInfo?.username?.[1]}
                          </ProfilePicture>
                          {/* Show user name if no first name */}
                          <ProfileName>
                            {context.adminInfo.first_name
                              ? context.adminInfo.first_name +
                                " " +
                                context.adminInfo.last_name
                              : context.adminInfo.username}
                          </ProfileName>
                        </ProfileInfo>
                        <CloseIcon onClick={() => setShowUserInfo(false)}>
                          <FaTimes />
                        </CloseIcon>
                      </UserInfoWrapper>
                      <List>
                        <ListItem>
                          <MyAccountIcon />
                          <MenuTitle>{t("my-account")}</MenuTitle>
                        </ListItem>
                        <ListItem>
                          <HelpIcon />
                          <MenuTitle>
                            <a
                              href="https://www.facebook.com/Wird.Competition"
                              target="_blank"
                            >
                              {t("help")}
                            </a>
                          </MenuTitle>
                        </ListItem>

                        <ListItem
                          onClick={() => {
                            // set the theme to the opposite of the current theme
                            setShowUserInfo(false);
                            changeTheme(
                              theme.name === "ar" ? englishTheme : arabicTheme
                            );
                            changeLanguage(theme.name === "ar" ? "en" : "ar");
                            setLoading(true);
                          }}
                        >
                          <FaLanguage />
                          <MenuTitle>{t("language")}</MenuTitle>
                        </ListItem>

                        <ListItem
                          onClick={() => {
                            setShowUserInfo(false);
                            context.logout();
                            navigate("/login");
                          }}
                        >
                          <LogoutIcon />
                          <MenuTitle>{t("logout")}</MenuTitle>
                        </ListItem>
                      </List>
                    </PopupListWrapper>
                  )}
                </>
              </RightNavItems>
            </Navbar>
            <SidebarMenu
              className={isOpen ? "open" : ""}
              isArabicTheme={theme?.name === "ar"}
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
