import React, { useEffect } from "react";
import { WrapperEl } from "../Wrapper/WrapperElement";
import {
  NavbarWrapper,
  NavbarInnerWrapper,
  NavbarSiteLinkR,
  NavbarMenuBtn,
  NavbarNavItems,
  NavbarNavItem,
  NavbarNavLinkR,
} from "./NavbarElements";
import Logo from "../../images/logo.svg";
import Bars from "../../images/menu.svg";
import X from "../../images/close.svg";
import { ImageEl } from "../Image/ImageElement";

const Navbar = ({ isOpen, handleMenu, scrolledNav, changeNav }) => {
  useEffect(() => {
    window.addEventListener("scroll", changeNav);

    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  const closeMenu = () => {
    if (isOpen) {
      handleMenu();
    } else {
      return;
    }
  };

  return (
    <NavbarWrapper $scrolledNav={scrolledNav}>
      <WrapperEl>
        <NavbarInnerWrapper>
          <NavbarSiteLinkR to="/" $isOpen={isOpen} onClick={closeMenu}>
            <ImageEl src={Logo} alt="Logo" />
          </NavbarSiteLinkR>
          <NavbarMenuBtn onClick={handleMenu}>
            <ImageEl src={isOpen ? `${X}` : `${Bars}`} />
          </NavbarMenuBtn>
          <NavbarNavItems $isOpen={isOpen}>
            <NavbarNavItem>
              <NavbarNavLinkR
                to="/"
                $scrolledNav={scrolledNav}
                $isOpen={isOpen}
                onClick={handleMenu}
                exact={true}
              >
                Home
              </NavbarNavLinkR>
            </NavbarNavItem>
            <NavbarNavItem>
              <NavbarNavLinkR
                $scrolledNav={scrolledNav}
                to="/projects"
                $isOpen={isOpen}
                onClick={handleMenu}
              >
                Projekty
              </NavbarNavLinkR>
            </NavbarNavItem>
            <NavbarNavItem>
              <NavbarNavLinkR
                $scrolledNav={scrolledNav}
                to="/contact"
                $isOpen={isOpen}
                onClick={handleMenu}
              >
                Kontakt
              </NavbarNavLinkR>
            </NavbarNavItem>
          </NavbarNavItems>
        </NavbarInnerWrapper>
      </WrapperEl>
    </NavbarWrapper>
  );
};

export default Navbar;
