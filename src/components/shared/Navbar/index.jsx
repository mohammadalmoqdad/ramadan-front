import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavStyle.css' // will see
import NavDropdown from 'react-bootstrap/NavDropdown'
import HedarNavContainer, { H5,NavDropdownli, NavDropdownlist, Logo, HedarNav, Ul, Li, A, ButtonLogout } from "./navbar.styles"
import cookie from "react-cookies";
import { Redirect, Route, useNavigate } from "react-router-dom";
import { useAdminContext } from "../../../contexts/AdminContext";
import WirdLogo from '../../../assets/Logo/WirdLogosvg.svg'


function Nav() {
    const context = useAdminContext();
    let navigate = useNavigate();
    return <HedarNavContainer>

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
                                <NavDropdown.Item href="/Admins">المسؤولون</NavDropdown.Item>
                                <NavDropdown.Item href="/Competition">معلومات المسابقة</NavDropdown.Item>
                                <NavDropdown.Item href="/Students">الطلاب</NavDropdown.Item>
                                <NavDropdown.Item href="/Standards">المعايير</NavDropdown.Item>
                                <NavDropdown.Item href="/StudentsPoints">مشاهدة النتائج</NavDropdown.Item>
                                <NavDropdown.Item href="/Groups">المجموعات</NavDropdown.Item>
                            </NavDropdown>

                            <H5>أهلا بكم في منصة وِرد </H5>
                        </NavDropdownli>
                        <A>أهلا بكم في منصة وِرد </A>

                    </NavDropdownlist>


                </Li>
                <Li></Li>

            </Ul>
            <Logo>
                {/* <Logo/> */}

                <img src={WirdLogo} alt="" width='50' />
                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" alt="" width='30' /> */}
            </Logo>
        </HedarNav>

    </HedarNavContainer>;

}

export default Nav;