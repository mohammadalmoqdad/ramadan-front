import React, { Component } from 'react';
import  {  HedarNav, Li, A, } from "./nav.styles"
import {
  Header as HedarNavContainer,
  Logo,
  Ul,
  ButtonLogout
} from "../styles";

export class Nav extends Component {
  render() {
    return <HedarNavContainer>

      <ButtonLogout>تسجيل الخروج</ButtonLogout>
      
      <HedarNav>
        <Ul>
          {/* <Li><A></A></Li> */}
          <Li><A href="#a">menu</A></Li>
          {/* <Li><A href="#a">fg</A></Li> */}
        </Ul>
      <Logo>ورد</Logo>
      </HedarNav>
     
    </HedarNavContainer>;
  }
}

export default Nav;



