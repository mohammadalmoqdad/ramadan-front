import React, { useContext } from 'react';
import HedarNavContainer, { Logo, HedarNav, Ul, Li, A, ButtonLogout } from "./navbar.styles"
import cookie from "react-cookies";
import { Redirect, Route, useNavigate } from "react-router-dom";
import { AdminContext } from "../../../contexts/AdminContext";
// import logo from '../../../assets/logo/'


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
                {/* <Li><A href="#a">أهلا بكم في منصة وِرد </A></Li> */}
                {/* <Li><A href="#a">fg</A></Li> */}
            </Ul>
            <Logo>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" alt="" width='30' />
            </Logo>
        </HedarNav>

    </HedarNavContainer>;

}

export default Nav;