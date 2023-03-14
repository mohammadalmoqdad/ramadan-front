import styled from "styled-components";

export default styled.header`
  z-index: 2;
  position: sticky;
  top: 0;
  font-family: var(--font-family-head);
  display: flex;
  flex-direction: var(--flex-direction);
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem 3.5rem;
  width: 100%;
`;

export const NavDropdownlist = styled.div`
  font-size: 1.3rem;
  color: #2980b9;
`;

export const NavDropdownli = styled.div`
  font-size: 1.3rem;
  display: none;
  @media (max-width: 750px) {
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
  @media (max-width: 750px) {
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
  @media (max-width: 750px) {
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 1rem;
  }
`;

export const PageTitle = styled.h1`
  padding: 0 1rem;
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  margin: 0;
`;
