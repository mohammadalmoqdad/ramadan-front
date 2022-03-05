import styled from "styled-components";

// HedarNavContainer 
export default styled.header`
display:flex;
/* min-width: 625px; */
font-family: 'Noto Kufi Arabic', sans-serif;
box-sizing: border-box;
margin: 0;
padding: 0;
background-color: #2980b9;
justify-content: space-between;
align-items: center;
padding: .5rem .5rem .5rem;
box-shadow: 0 4px 8px 0 rgba(0,0,0,.3);
`;

export const Logo = styled.h1`
/* list-style: none; */
color: orange;
font-size: 1.5rem;
border: 3px solid white;
border-radius: 2rem;
width:3.5rem;
/* padding-right: 20rem; */
/* margin-right:0; */
/* height: 3.5rem; */
`;

export const HedarNav = styled.nav`
display:flex;
align-items: center;
justify-content: center;
width: 20rem;
list-style: none;
margin-right: 1rem;
`;


export const Ul = styled.ul`
display: inline-block;
/* justify-content: right; */
margin-right: 1rem;
`;

export const Li = styled.li`
font-family: 'Noto Kufi Arabic', sans-serif;
font-weight: 500;
font-size: 1rem;
color: white;
text-decoration: none;
display: inline-block;
padding:1rem 0 0 ;
transition: all .3s ease 0s;
:hover{
transition: all .3s ease 0s;
color: orange;
}
`;

export const A = styled.a`
transition: all .3s ease 0s;
color: white;
:hover{
transition: all .3s ease 0s;
color: orange;
}
`;

export const ButtonLogout = styled.button`
width:8rem;
height: 2.4rem;
background: orange;
font-weight:bold;
border-radius: 1.5rem;
font-size: .9rem;
color: #e9f4fb;
cursor: pointer;
outline: none;
margin-left: 2rem;
border: 2px solid orange;
transition: all .3s ease 0s;
box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
:hover{
background: #2980b9;
border: 3px solid orange;
transition: .3s;
box-shadow: 0 4px 6px 0 rgba(0,0,0,.3);
}
`;