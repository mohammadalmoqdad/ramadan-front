import React, { Component } from 'react';
import HedarNavContainer, { Logo, HedarNav, Ul, Li, A, ButtonLogout } from "./nav.styles"

// import Logout from '../img/Baseline_logout_white_24dp.png'


export class Nav extends Component {
  render() {
    return <HedarNavContainer>

      <ButtonLogout>تسجيل الخروج</ButtonLogout>
      
      <HedarNav>
        <Ul>
          {/* <Li><A></A></Li> */}
          <Li><A href="#a">أهلا بكم في منصة وِرد </A></Li>
          {/* <Li><A href="#a">fg</A></Li> */}
        </Ul>
      <Logo>ورد</Logo>
      </HedarNav>
     
    </HedarNavContainer>;
  }
}

export default Nav;



