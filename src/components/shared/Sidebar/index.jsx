import React from "react";
import {
  SideBarContainer,
  MenuList,
  MenuContainer,
  MenuListItem,
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
        <MenuList>
          <MenuListItem>الصفحة الرئيسية</MenuListItem>
          <MenuListItem>إضافة أدمن جديد</MenuListItem>
          <MenuListItem>باسورد جديد للطالب</MenuListItem>
          <MenuListItem>إضافة معايير المسابقة</MenuListItem>
          <MenuListItem>تعديل معايير المسابقة</MenuListItem>
          <MenuListItem>مشاهدة النتائج</MenuListItem>
          <MenuListItem>المجموعات</MenuListItem>
        </MenuList>
      </MenuContainer>
    </SideBarContainer>
  );
}

export default Sidebar;
