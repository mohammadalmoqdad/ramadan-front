import styled from "styled-components";

import {
    HedarNav as DefaultHedarNav,
    Li as DefaultLi
} from '../styles';

export const HedarNav = styled(DefaultHedarNav)`
width: 20rem;
margin-right: 1rem;
`;

export const Li = styled(DefaultLi)`
font-family: 'Noto Kufi Arabic', sans-serif;
font-size: 1rem;
padding: 1rem 0 0 ;
`;

export const A = styled.a`
transition: all .3s ease 0s;
color: white;
:hover{
transition: all .3s ease 0s;
color: orange;
}
`;

