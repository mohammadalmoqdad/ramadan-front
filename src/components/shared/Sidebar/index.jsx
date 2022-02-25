import React from "react";
import {
  SideBarContainer,
  MenuList,
  MenuContainer,
  MenuLink,
  UserInfoContainer,
  Username,
  UserPicContainer,
  MenuIconContainer,
} from "./sidebar.styles";
// import cookie from "react-cookies";
import { ReactComponent as UserIcon } from "assets/icons/userIcon.svg";
import { ReactComponent as MenuIcon } from "assets/icons/menu.svg";
function Sidebar() {
  return (
    <SideBarContainer>
      {/* {cookie.load("token")
        ? "loged in successfully + in the sidebar"
        : "nothing to do"} */}

      <MenuIconContainer>
        <MenuIcon />
      </MenuIconContainer>

      <UserInfoContainer>
        <Username>اسم المستخدم</Username>
        <UserPicContainer>
          <UserIcon />
        </UserPicContainer>
      </UserInfoContainer>

      <MenuContainer>
        <MenuLink to="/">الصفحة الرئيسية</MenuLink>
        <MenuLink to="/AddNewAdmin">إضافة أدمن جديد</MenuLink>
        <MenuLink to="/set-student-password">باسورد جديد للطالب</MenuLink>
        <MenuLink to="/AddNewStandards">إضافة معايير المسابقة</MenuLink>
        <MenuLink to="/EditStandards">تعديل معايير المسابقة</MenuLink>
        <MenuLink to="/StudentsPoints">مشاهدة النتائج</MenuLink>
        <MenuLink to="/Groups">المجموعات</MenuLink>
      </MenuContainer>
    </SideBarContainer>
  );
}

export default Sidebar;
