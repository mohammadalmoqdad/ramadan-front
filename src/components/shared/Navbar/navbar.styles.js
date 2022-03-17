import styled from "styled-components";

// HedarNavContainer 
export default styled.header`
position: fixed;
width:100%;
top: 0;
display:flex;
/* min-width: 625px; */
font-family: 'Noto Kufi Arabic', sans-serif;
box-sizing: border-box;
margin: 0;
padding: 0;
background-color: white;
justify-content: space-between;
align-items: center;
padding: .5rem .5rem .5rem;
box-shadow: 0 4px 8px 0 rgba(0,0,0,.3);
`;

export const Logo = styled.h1`
/* list-style: none; */
color: orange;
font-size: 1.5rem;
/* border: 3px solid white; */
border-radius: 2rem;
width:3.5rem;
/* padding-right: 20rem; */
margin-left:2rem;
/* height: 3.5rem; */

@media (max-width:550px) {
  font-size: 1rem;
  border-radius: 1.6rem;
  width:3rem;
}
`;

export const HedarNav = styled.nav`
display:flex;
align-items: center;
justify-content: center;
/* width: 20rem; */
list-style: none;
/* margin-right: 17rem; */
`;


export const Ul = styled.ul`
display: inline-block;
/* justify-content: right; */
margin-right: 1rem;
`;

export const Li = styled.li`
font-weight: 500;
/* font-size: 1rem; */
color: white;
text-decoration: none;
display: inline-block;
padding:.5rem 0 0 ;
transition: all .3s ease 0s;
:hover{
transition: all .3s ease 0s;
color: orange;
}
`;

export const ButtonLogout = styled.button`
width:8rem;
height: 2.4rem;
background: #E94f57;
font-weight:bold;
border-radius: 1.5rem;
font-size: .9rem;
color: #e9f4fb;
cursor: pointer;
outline: none;
margin-left: 2rem;
transition: all .3s ease 0s;
box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
:hover{
background: #2980b9;
transition: .3s;
box-shadow: 0 4px 6px 0 rgba(0,0,0,.3);
}
@media (max-width:450px) {
  font-size: .7rem;
  margin-left: 1rem;

}
`;
export const NavDropdownlist = styled.div`
font-size: 1.3rem;
color: #2980b9 ;
`;
export const NavDropdownli = styled.div`
font-size: 1.3rem;
display: none;
@media (max-width:550px) {
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export const A = styled.h4`
transition: all .3s ease 0s;
font-size: 1.3rem;
color: #2980b9;
padding-top: 0.5rem;
/* :hover{
transition: all .3s ease 0s;
color: orange;
} */
/* display: none; */
@media (max-width:550px) {
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  /* position: absolute;
 transition: visibility hidden .3s ease 0s; H5*/
}
`;

export const H5 = styled.h4`

transition: all .3s ease 0s;
font-size: 1.3rem;
color: #2980b9;
padding-top: 0.5rem;
/* :hover{
transition: all .3s ease 0s;
color: orange;
} */
/* display: none; */
@media (max-width:550px) {
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
 font-size: 1rem;

  /* position: absolute;
 transition: visibility hidden .3s ease 0s; H5*/
}
`;