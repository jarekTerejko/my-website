import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background: ${(props) =>
    props.$scrolledNav ? "var(--color-grayish-dark-blue)" : `transparent`};
  padding: ${(props) => (props.$scrolledNav ? "1rem 0" : `4rem 2rem`)};
  transition: background-color var(--transition), padding var(--transition);

  @media screen and (max-width: 500px) {
    padding: 1rem 0;
    background: var(--color-grayish-dark-blue);
  }
`;

export const NavbarInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

  @media screen and (max-width: 500px) {
    transform: translateX(6px);
    display: flex;
  }
`;

export const NavbarNavItems = styled.ul`
  display: flex;
  list-style: none;
  transform: translateX(20px);
  transition: var(--transition);

  @media screen and (max-width: 500px) {
    position: fixed;
    transform: ${(props) =>
      props.$isOpen ? `translateX(0)` : "translateX(-100%)"};
    left: 0;
    top: 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--color-grayish-dark-blue);
    width: 80%;
    height: calc(100vh - 80px);
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
  color: ${(props) =>
    props.$scrolledNav ? "var(--color-light-gray)" : "var(--color-dark-blue)"};
  color: ${(props) => (props.$footerLink ? "var(--color-light-gray)" : "")};
  transition: color var(--transition);

  &:hover {
    color: var(--color-cyan);
  }

  &.active {
    color: var(--color-cyan);
  }

  @media screen and (max-width: 500px) {
    color: var(--color-light-gray);
  }
`;
