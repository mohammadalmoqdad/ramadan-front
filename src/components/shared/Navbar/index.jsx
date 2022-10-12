import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavStyle.css'
import NavDropdown from 'react-bootstrap/NavDropdown'
import HeaderNavContainer, {
    H5,
    NavDropdownli,
    NavDropdownlist,
    Logo,
    A,
    ButtonLogout
} from "./navbar.styles";

import {
    HedarNav,
    Ul,
    Li
} from "../styles";

import {useNavigate } from "react-router-dom";
import { useAdminContext } from "../../../contexts/AdminContext";
import WirdLogo from '../../../assets/Logo/WirdLogosvg.svg'


function Nav() {
    const [hasPermission, setPermission] = useState(false);
    const context = useAdminContext();
    let navigate = useNavigate();

    useEffect(()=>{
        setPermission(Object.keys(context.adminInfo).length > 0 && context.adminInfo.is_super_admin);
    },[context.adminInfo]);

    return <HeaderNavContainer>

        <ButtonLogout onClick={() => {
            context.logout();
            navigate("/login");
        }}>تسجيل الخروج</ButtonLogout>

        <HedarNav>
            <Ul>
                {/* <Li><A></A></Li> */}
                <Li>
                    <NavDropdownlist >
                        <NavDropdownli >
                            <NavDropdown className='NavDropdow' style={{ color: '#e9f4fb' }}>
                                <NavDropdown.Item className='NavDropdow' href="/">الصفحة الرئيسية</NavDropdown.Item>
                                { hasPermission &&
                                    <NavDropdown.Item href="/Competition">معلومات المسابقة</NavDropdown.Item>

                                }
                                <NavDropdown.Item href="/TopStudents">الأوائل</NavDropdown.Item>
                                <NavDropdown.Item href="/Admins">المسؤولون</NavDropdown.Item>
                                <NavDropdown.Item href="/Students">الطلاب</NavDropdown.Item>
                                <NavDropdown.Item href="/Standards">المعايير</NavDropdown.Item>
                                <NavDropdown.Item href="/Review-other-points"> مراجعة المدخلات النصية</NavDropdown.Item>
                                <NavDropdown.Item href="/StudentsPoints">مشاهدة النتائج</NavDropdown.Item>
                                { hasPermission &&
                                    <NavDropdown.Item href="/ExportPoints">استخراج النتائج</NavDropdown.Item>
                                }
                                <NavDropdown.Item href="/Groups">المجموعات</NavDropdown.Item>
                            </NavDropdown>

                            <H5>menu</H5>
                        </NavDropdownli>
                        <A>أهلا بكم في منصة وِرد</A>

                    </NavDropdownlist>


                </Li>

            </Ul>
            <Logo>
                {/* <Logo/> */}

                <img src={WirdLogo} alt="" width='50' />
                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" alt="" width='30' /> */}
            </Logo>
        </HedarNav>

    </HeaderNavContainer>;

}

export default Nav;