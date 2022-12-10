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
import {ReactComponent as Winners} from "assets/icons/winners.svg";
import {ReactComponent as FileDownload} from "assets/icons/fileDownload.svg";
import {useAdminContext} from "../../../contexts/AdminContext";

function Sidebar() {
  const context = useAdminContext();
  const [hasPermission, setPermission] = useState(false);

  useEffect(()=>{
    if(Object.keys(context.adminInfo).length > 0){
      setPermission(context.adminInfo.is_super_admin);
    }else {
      setTimeout(() => {
        if (Object.keys(context.adminInfo).length === 0) {
          // permission will be updated once context.adminInfo is updated.
          context.getAdminInfo();
        }
      }, 1000);
    }
  },[context.adminInfo]);

  return (
    <SideBarContainer>

      <UserInfoContainer>
        { Object.keys(context.adminInfo).length > 0
            ? context.adminInfo?.first_name?.length > 0 || context.adminInfo?.last_name?.length > 0
              ?
                <Username>{context.adminInfo.first_name} {context.adminInfo.last_name}</Username>
              : context.adminInfo?.username?.length > 0
                    ?
                      <Username>{context.adminInfo.username}</Username>
                    :
                      <Username>مسؤول</Username>
            :
              <Username>مسؤول</Username>
        }
      </UserInfoContainer>

      <MenuContainer>
        <MenuLink to="/">
          <MenuItem >
            الصفحة الرئيسية
          </MenuItem>
          <HomeIcon />
        </MenuLink>
        {/* { hasPermission && */}
              <MenuLink to="/Competition">
                <MenuItem >
                  معلومات المسابقة
                </MenuItem>
                <CompInfoIcon/>
              </MenuLink>
        {/* } */}
        <MenuLink to="/TopStudents">
          <MenuItem >
            الأوائل
          </MenuItem>
          <Winners/>
        </MenuLink>
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
        {hasPermission &&
            <MenuLink to="/ExportPoints">
              <MenuItem>
                استخراج النتائج
              </MenuItem>
              <FileDownload/>
            </MenuLink>
        }
        <MenuLink to="/Groups">
          <MenuItem >المجموعات</MenuItem>
          <GroupsIcon />
        </MenuLink>
      </MenuContainer>
    </SideBarContainer>
  );
}

export default Sidebar;