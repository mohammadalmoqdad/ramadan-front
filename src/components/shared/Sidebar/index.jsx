import React, { useEffect, useState } from "react";
import {
  SideBarContainer,
  MenuContainer,
  MenuLink,
  MenuItem,
  WirdLogoContainer,
} from "./sidebar.styles";
import { ReactComponent as WirdLogo } from "assets/icons/Shared/wirdLogo.svg";
import { ReactComponent as HomeIcon } from "assets/icons/home.svg";
import { ReactComponent as CompInfoIcon } from "assets/icons/competition-information.svg";
import { ReactComponent as ContestModeratorsIcon } from "assets/icons/admin.svg";
import { ReactComponent as CriteriaIcon } from "assets/icons/criterias.svg";
import { ReactComponent as ParticipantsIcon } from "assets/icons/students.svg";
import { ReactComponent as FileTxtIcon } from "assets/icons/file-text.svg";
import { ReactComponent as ResultsIcon } from "assets/icons/results.svg";
import { ReactComponent as LeaderBoard } from "assets/icons/leaderBoard.svg";
import { ReactComponent as FileDownload } from "assets/icons/fileDownload.svg";
import { ReactComponent as GroupsIcon } from "assets/icons/group.svg";
import { useAdminContext } from "../../../contexts/AdminContext";
import { isSuperAdmin } from "../../../util/ContestPeople_Role";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

function Sidebar({ setIsSideBarCollapsed }) {
  const { t } = useTranslation();
  const context = useAdminContext();
  const [hasPermission, setPermission] = useState(false);
  const { pathname } = useLocation();

  const showNavbarAndSidebar = ![
    "/login",
    "/Signup",
    "/ResetPassword",
    "/ForgotPassword",
  ].includes(pathname);

  useEffect(() => {
    if (Object.keys(context.adminInfo).length > 0) {
      setPermission(isSuperAdmin(context));
    } else {
      setTimeout(() => {
        if (Object.keys(context.adminInfo).length === 0) {
          // permission will be updated once context.adminInfo is updated.
          context.getAdminInfo();
        }
      }, 1000);
    }
  }, [context.adminInfo]);

  return (
    <div>
      {showNavbarAndSidebar && (
        <SideBarContainer>
          <WirdLogoContainer>
            <WirdLogo />
          </WirdLogoContainer>

          <MenuContainer>
            <MenuLink onClick={() => setIsSideBarCollapsed()} to="/">
              <HomeIcon />
              <MenuItem>{t("home-page")}</MenuItem>
            </MenuLink>
            {/* { hasPermission && */}
            <MenuLink onClick={() => setIsSideBarCollapsed()} to="/competition">
              <CompInfoIcon />
              <MenuItem>{t("contest-information")}</MenuItem>
            </MenuLink>
            {/* } */}
            <MenuLink
              onClick={() => setIsSideBarCollapsed()}
              to="/top-students"
            >
              <LeaderBoard />
              <MenuItem>{t("leaders-board")}</MenuItem>
            </MenuLink>
            <MenuLink onClick={() => setIsSideBarCollapsed()} to="/admins">
              <ContestModeratorsIcon />
              <MenuItem>{t("admins")}</MenuItem>
            </MenuLink>
            <MenuLink onClick={() => setIsSideBarCollapsed()} to="/students">
              <ParticipantsIcon />
              <MenuItem>{t("students")}</MenuItem>
            </MenuLink>
            <MenuLink
              onClick={() => setIsSideBarCollapsed()}
              to="/contest-criteria"
            >
              <CriteriaIcon />
              <MenuItem>{t("criterias")}</MenuItem>
            </MenuLink>
            <MenuLink
              onClick={() => setIsSideBarCollapsed()}
              to="/review-other-points"
            >
              <FileTxtIcon />
              <MenuItem>{t("text-inputs")}</MenuItem>
            </MenuLink>
            <MenuLink
              onClick={() => setIsSideBarCollapsed()}
              to="/students-points"
            >
              <ResultsIcon />
              <MenuItem>{t("results-page")}</MenuItem>
            </MenuLink>
            {hasPermission && (
              <MenuLink
                onClick={() => setIsSideBarCollapsed()}
                to="/export-points"
              >
                <FileDownload />
                <MenuItem>{t("extract-results")}</MenuItem>
              </MenuLink>
            )}
            <MenuLink onClick={() => setIsSideBarCollapsed()} to="/groups">
              <GroupsIcon />
              <MenuItem>{t("groups-page")}</MenuItem>
            </MenuLink>
          </MenuContainer>
        </SideBarContainer>
      )}
    </div>
  );
}

export default Sidebar;
