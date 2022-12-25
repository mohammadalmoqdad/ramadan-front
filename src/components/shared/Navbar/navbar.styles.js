import styled from "styled-components";
import {
  Header,
  Logo as DefaultLogo,
  ButtonLogout as DefaultButtonLogout,
} from "../styles";

export default styled(Header)`
  z-index: 2;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: white;
`;

export const Logo = styled(DefaultLogo)`
  border: none;
  margin-left: 2rem;
  @media (max-width: 550px) {
    font-size: 1rem;
    border-radius: 1.6rem;
    width: 3rem;
  }
`;

export const ButtonLogout = styled(DefaultButtonLogout)`
  border: none;
  background: #e94f57;
  :hover {
    border: none;
  }
  @media (max-width: 450px) {
    font-size: 0.7rem;
    margin-left: 1rem;
  }
`;

export const NavDropdownlist = styled.div`
  font-size: 1.3rem;
  color: #2980b9;
`;

export const NavDropdownli = styled.div`
  font-size: 1.3rem;
  display: none;
  @media (max-width: 550px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const A = styled.h4`
  transition: all 0.3s ease 0s;
  font-size: 1.3rem;
  color: #2980b9;
  padding-top: 0.5rem;
  @media (max-width: 550px) {
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
  }
`;

export const H5 = styled.h4`
  transition: all 0.3s ease 0s;
  font-size: 1.3rem;
  color: #2980b9;
  padding-top: 0.5rem;
  @media (max-width: 550px) {
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 1rem;
  }
`;
