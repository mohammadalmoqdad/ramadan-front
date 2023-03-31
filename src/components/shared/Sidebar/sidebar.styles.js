import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "styles";

export const SideBarContainer = styled.div`
  animation-duration: 0.2s;
  background-color: ${colors.warmWheat};
  height: 100%;
  text-align: center;
  border-radius: 1.5rem;
  width: 19.0625rem;

  & svg {
    min-width: 1.2rem;
  }

  @media (max-width: 1000px) and (min-width: 750px) {
    & span {
      display: none;
    }
    width: fit-content;
    text-align: center;
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
`;

export const WirdLogoContainer = styled.div`
  padding: 1rem;
`;

export const MenuLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  justify-content: flex-end;
  border-radius: 0.75rem;
  align-items: center;
  color: ${colors.darkGrey};
  white-space: nowrap;
  width: 85%;
  height: 3.063rem;
  padding: 0.5rem 0.8rem;
  flex-direction: var(--flex-direction);
  font-weight: 700;
  text-align: var(--text-align);
  gap: 1rem;
  margin: 0.5rem auto;
  font-family: var(--font-family-main);
  font-size: 1rem;

  :hover {
    background-color: ${colors.lightRed};
    color: ${colors.black};
  }
  :focus {
    background-color: ${colors.lightRed};
    color: ${colors.black};
  }
  @media (max-width: 1000px) {
    font-size: 0.9rem;
    width: 100%;
    justify-content: center;
  }
`;

export const MenuItem = styled.span`
  display: ${({ isSidebarCollapsed }) => {
    if (isSidebarCollapsed === true) return "none";
    if (isSidebarCollapsed === false) return "flex";
    return "";
  }};
  cursor: pointer;
  padding: 0;
  border: none;
  width: 100%;
`;
