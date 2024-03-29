import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background: var(--color-very-light-gray);
  /* box-shadow: ${(props) =>
    props.$scrolledNav ? "1px 1px 10px 1px rgba(0,0,0, .2)" : ""}; */
  transition: background-color var(--transition);
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);

  /* @media screen and (max-width: 550px) {
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
  } */
`;

export const NavbarOverlay = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  top: 120px;
  left: 0;
  transition: opacity var(--transition);
  height: calc(100vh - 60px);
  width: 100%;
  background: rgba(0, 0, 0, 0.68);
  z-index: 0;

  @media screen and (max-width: 650px) {
    top: 60px;
  }
`;

export const NavbarInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => (props.$scrolledNav ? "1rem 0" : `4rem 2rem`)};
  transition: padding var(--transition);

  @media screen and (max-width: 650px) {
    padding: 1rem 0;
  }
`;

export const NavbarSiteLinkR = styled(Link)``;

export const NavbarMenuBtn = styled.button`
  background: none;
  border: none;
  width: 4rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 650px) {
    transform: translateX(6px);
    display: flex;
  }
`;

export const NavbarNavItems = styled.ul`
  display: flex;
  list-style: none;
  transform: translateX(20px);
  transition: var(--transition);

  @media screen and (max-width: 650px) {
    position: fixed;
    transform: ${(props) =>
      props.$isOpen ? `translateX(0)` : "translateX(-110%)"};
    left: 0;
    top: 60px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--color-very-light-gray);
    width: 70%;
    height: calc(100vh - 60px);
    box-shadow: 1px 10px 8px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const NavbarNavItem = styled.li`
  margin: 0 1rem;
`;

export const NavbarNavLinkR = styled(NavLink)`
  padding: 1rem;
  font-size: 1.2rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-dark-blue);
  /* color: ${(props) =>
    props.$footerLink ? "var(--color-light-gray)" : ""}; */
  transition: color var(--transition);

  &:hover {
    color: var(--color-cyan);
  }

  &.active {
    color: var(--color-cyan);
  }

  @media screen and (max-width: 550px) {
    font-size: 1.4rem;
  }
`;
