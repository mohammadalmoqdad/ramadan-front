import React, { useState } from "react";
import {
  SideBarContainer,
  MenuContainer,
  MenuLink,
  UserInfoContainer,
  Username,
  UserPicContainer,
  MenuItem,
  MenuIconContainer,
} from "./sidebar.styles";
// import cookie from "react-cookies";
import { ReactComponent as UserIcon } from "assets/icons/userIcon.svg";
import { ReactComponent as MenuIcon } from "assets/icons/menu.svg";
import { ReactComponent as HomeIcon } from "assets/icons/home.svg";
import { ReactComponent as AdminIcon } from "assets/icons/admin.svg";
import { ReactComponent as PasswordIcon } from "assets/icons/change password.svg";
import { ReactComponent as CriteriasIcon } from "assets/icons/criterias.svg";
import { ReactComponent as ResultsIcon } from "assets/icons/results.svg";
import { ReactComponent as GroupsIcon } from "assets/icons/group.svg";
import {ReactComponent as FileTxtIcon} from "assets/icons/file-text.svg";
import {ReactComponent as CompInfoIcon} from "assets/icons/competition-information.svg";
import {ReactComponent as StudentsIcon} from "assets/icons/students.svg";
import {useAdminContext} from "../../../contexts/AdminContext";

function Sidebar() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState("");
  const context = useAdminContext();
  return (
    <SideBarContainer isSidebarCollapsed={isSidebarCollapsed}>

      <UserInfoContainer isSidebarCollapsed={isSidebarCollapsed}>
        { Object.keys(context.getAdminInfo()).length > 0
            ?
              <Username>{context.getAdminInfo().first_name} {context.getAdminInfo().last_name}</Username>
            :
              <Username>اسم المستخدم</Username>
        }
      </UserInfoContainer>

      <MenuContainer>
        <MenuLink to="/">
          <MenuItem isSidebarCollapsed={isSidebarCollapsed}>
            الصفحة الرئيسية
          </MenuItem>
          <HomeIcon />
        </MenuLink>
        { Object.keys(context.getAdminInfo()).length > 0 && context.getAdminInfo().is_super_admin &&
            <>
              <MenuLink to="/Competition">
                <MenuItem isSidebarCollapsed={isSidebarCollapsed}>
                  معلومات المسابقة
                </MenuItem>
                <CompInfoIcon/>
              </MenuLink>
              <MenuLink to="/Admins">
                <MenuItem isSidebarCollapsed={isSidebarCollapsed}>
                  المسؤولون
                </MenuItem>
                <AdminIcon />
              </MenuLink>
            </>
        }
        <MenuLink to="/Students">
          <MenuItem isSidebarCollapsed={isSidebarCollapsed}>
          الطلاب
          </MenuItem>
          <StudentsIcon/>
        </MenuLink>
        <MenuLink to="/Standards">
          <MenuItem isSidebarCollapsed={isSidebarCollapsed}>
            المعايير  
          </MenuItem>
          <CriteriasIcon />
        </MenuLink>
        <MenuLink to="/Review-other-points">
          <MenuItem isSidebarCollapsed={isSidebarCollapsed}>
            مراجعة المدخلات النصية
          </MenuItem>
          <FileTxtIcon/>
        </MenuLink>
        <MenuLink to="/StudentsPoints">
          <MenuItem isSidebarCollapsed={isSidebarCollapsed}>
            مشاهدة النتائج
          </MenuItem>
          <ResultsIcon />
        </MenuLink>
        <MenuLink to="/Groups">
          <MenuItem isSidebarCollapsed={isSidebarCollapsed}>المجموعات</MenuItem>
          <GroupsIcon />
        </MenuLink>
      </MenuContainer>
    </SideBarContainer>
  );
}

export default Sidebar;