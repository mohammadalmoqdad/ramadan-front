import React, {useEffect, useState} from "react";
import {
  SideBarContainer,
  MenuContainer,
  MenuLink,
  UserInfoContainer,
  Username,
  MenuItem,
} from "./sidebar.styles";
import { ReactComponent as HomeIcon } from "assets/icons/home.svg";
import { ReactComponent as AdminIcon } from "assets/icons/admin.svg";
import { ReactComponent as CriteriaIcon } from "assets/icons/criterias.svg";
import { ReactComponent as ResultsIcon } from "assets/icons/results.svg";
import { ReactComponent as GroupsIcon } from "assets/icons/group.svg";
import {ReactComponent as FileTxtIcon} from "assets/icons/file-text.svg";
import {ReactComponent as CompInfoIcon} from "assets/icons/competition-information.svg";
import {ReactComponent as StudentsIcon} from "assets/icons/students.svg";
import {useAdminContext} from "../../../contexts/AdminContext";

function Sidebar() {
  const context = useAdminContext();
  const [hasPermission, setPermission] = useState(false);

  useEffect(()=>{
    setPermission(Object.keys(context.adminInfo).length > 0 && context.adminInfo.is_super_admin);
  },[context.adminInfo]);

  return (
    <SideBarContainer>

      <UserInfoContainer>
        { Object.keys(context.adminInfo).length > 0
            ?
              <Username>{context.adminInfo.first_name} {context.adminInfo.last_name}</Username>
            :
              <Username>اسم المستخدم</Username>
        }
      </UserInfoContainer>

      <MenuContainer>
        <MenuLink to="/">
          <MenuItem >
            الصفحة الرئيسية
          </MenuItem>
          <HomeIcon />
        </MenuLink>
        { hasPermission &&
              <MenuLink to="/Competition">
                <MenuItem >
                  معلومات المسابقة
                </MenuItem>
                <CompInfoIcon/>
              </MenuLink>
        }
        <MenuLink to="/Admins">
          <MenuItem >
            المسؤولون
          </MenuItem>
          <AdminIcon />
        </MenuLink>
        <MenuLink to="/Students">
          <MenuItem >
          الطلاب
          </MenuItem>
          <StudentsIcon/>
        </MenuLink>
        <MenuLink to="/Standards">
          <MenuItem >
            المعايير  
          </MenuItem>
          <CriteriaIcon />
        </MenuLink>
        <MenuLink to="/Review-other-points">
          <MenuItem >
            مراجعة المدخلات النصية
          </MenuItem>
          <FileTxtIcon/>
        </MenuLink>
        <MenuLink to="/StudentsPoints">
          <MenuItem >
            مشاهدة النتائج
          </MenuItem>
          <ResultsIcon />
        </MenuLink>
        <MenuLink to="/Groups">
          <MenuItem >المجموعات</MenuItem>
          <GroupsIcon />
        </MenuLink>
      </MenuContainer>
    </SideBarContainer>
  );
}

export default Sidebar;