import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavStyle.css' // will see
import NavDropdown from 'react-bootstrap/NavDropdown'
import HedarNavContainer, { NavDropdownli, NavDropdownlist, Logo, HedarNav, Ul, Li, A, ButtonLogout } from "./navbar.styles"
import cookie from "react-cookies";
import { Redirect, Route, useNavigate } from "react-router-dom";
import { AdminContext } from "../../../contexts/AdminContext";
import WirdLogo from '../../../assets/Logo/WirdLogosvg.svg'


function Nav() {
    const context = useContext(AdminContext);
    let navigate = useNavigate();
    return <HedarNavContainer>

        <ButtonLogout onClick={() => {
            cookie.remove("token");
            navigate("/login");
            context.setIsLogdedIn(false);
        }}>تسجيل الخروج</ButtonLogout>

        <HedarNav>
            <Ul>
                {/* <Li><A></A></Li> */}
                <Li>
                    <NavDropdownlist >
                    <NavDropdownli >
                    <NavDropdown  className='NavDropdow' style={{ color: '#e9f4fb' }}>
                        <NavDropdown.Item className='NavDropdow' href="/">الصفحة الرئيسية</NavDropdown.Item>
                        <NavDropdown.Item href="/Admins">إضافة أدمن جديد</NavDropdown.Item>
                        <NavDropdown.Item href="/set-student-password">باسورد جديد للطالب</NavDropdown.Item>
                        <NavDropdown.Item href="/Standards">المعايير</NavDropdown.Item>
                        <NavDropdown.Item href="/StudentsPoints">مشاهدة النتائج</NavDropdown.Item>
                        <NavDropdown.Item href="/Groups">المجموعات</NavDropdown.Item>

                        {/* <NavDropdown.Divider /> title="انتقل الى صفحة جديدة" 
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                
                    </NavDropdown>
                    <div>أهلا بكم في منصة وِرد </div>
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