import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavStyle.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import HeaderNavContainer, {
  H5,
  NavDropdownli,
  NavDropdownlist,
  // Logo,
  A,
  PageTitle,
} from "./navbar.styles";

import { HedarNav, Ul, Li } from "../styles";

import { useLocation } from "react-router-dom";
import { useAdminContext } from "../../../contexts/AdminContext";
import { isSuperAdmin } from "../../../util/ContestPeople_Role";
import { useTranslation } from "react-i18next";
import mapRoutesToPagesNames from "../../../data/pageNames";
function Nav() {
  const { t } = useTranslation();
  const [hasPermission, setPermission] = useState(false);
  const context = useAdminContext();
  const { pathname } = useLocation();

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
        <HeaderNavContainer>
          <PageTitle>
            {mapRoutesToPagesNames.hasOwnProperty(pathname)
              ? t(mapRoutesToPagesNames[pathname])
              : ""}{" "}
          </PageTitle>
          <HedarNav>
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
                          {t("contest-information")}{" "}
                        </NavDropdown.Item>
                      )}
                      <NavDropdown.Item href="/top-students">
                        {t("leaders-board")}{" "}
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
                        {" "}
                        {t("text-inputs")}{" "}
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/students-points">
                        {t("results-page")}{" "}
                      </NavDropdown.Item>
                      {hasPermission && (
                        <NavDropdown.Item href="/export-points">
                          {t("extract-results")}{" "}
                        </NavDropdown.Item>
                      )}
                      <NavDropdown.Item href="/groups">
                        {t("groups-page")}{" "}
                      </NavDropdown.Item>
                    </NavDropdown>

                    <H5>menu</H5>
                  </NavDropdownli>
                  <A>أهلا بكم في منصة وِرد</A>
                </NavDropdownlist>
              </Li>
            </Ul>
            {/* <Logo> */}
            {/* <Logo/> */}

            {/* <img src={WirdLogo} alt="" width="50" /> */}
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" alt="" width='30' /> */}
            {/* </Logo> */}
          </HedarNav>
        </HeaderNavContainer>
      )}
    </div>
  );
}

export default Nav;
