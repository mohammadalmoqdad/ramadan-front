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

function Sidebar() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState("");
  return (
    <SideBarContainer isSidebarCollapsed={isSidebarCollapsed}>
      {/* {cookie.load("token")
        ? "loged in successfully + in the sidebar"
        : "nothing to do"} */}

      <MenuIconContainer>
        <MenuIcon
          onClick={() => {
            console.log("here I am in the on Click");
            setIsSidebarCollapsed(!isSidebarCollapsed);
          }}
        />
      </MenuIconContainer>

      <UserInfoContainer isSidebarCollapsed={isSidebarCollapsed}>
        <Username>اسم المستخدم</Username>
        <UserPicContainer>
          <UserIcon />
        </UserPicContainer>
      </UserInfoContainer>

      <MenuContainer>
        <MenuLink to="/">
          <MenuItem isSidebarCollapsed={isSidebarCollapsed}>
            الصفحة الرئيسية
          </MenuItem>
          <HomeIcon />
        </MenuLink>
        <MenuLink to="/Admins">
          <MenuItem isSidebarCollapsed={isSidebarCollapsed}>
            إضافة أدمن جديد
          </MenuItem>
          <AdminIcon />
        </MenuLink>
        <MenuLink to="/set-student-password">
          <MenuItem isSidebarCollapsed={isSidebarCollapsed}>
            باسورد جديد للطالب
          </MenuItem>
          <PasswordIcon />
        </MenuLink>
        <MenuLink to="/Standards">
          <MenuItem isSidebarCollapsed={isSidebarCollapsed}>
            المعايير  
          </MenuItem>
          <CriteriasIcon />
//         </MenuLink>
//         <MenuLink to="/EditStandards">
//           <MenuItem isSidebarCollapsed={isSidebarCollapsed}>
//             تعديل معايير المسابقة
//           </MenuItem>
//           <CriteriasIcon />
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
///////////////////////////////////
        <MenuLink to="/">الصفحة الرئيسية</MenuLink>
        <MenuLink to="/Admins">المسؤولون</MenuLink>
        <MenuLink to="/set-student-password">باسورد جديد للطالب</MenuLink>
        <MenuLink to="/Standards">المعايير</MenuLink>
        <MenuLink to="/StudentsPoints">مشاهدة النتائج</MenuLink>
        <MenuLink to="/Groups">المجموعات</MenuLink>
////////////////////////////////
      </MenuContainer>
    </SideBarContainer>
  );
}

export default Sidebar;
