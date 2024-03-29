import React, { useEffect, useRef } from "react";
import { WrapperEl } from "../Wrapper/WrapperElement";
import {
  NavbarWrapper,
  NavbarInnerWrapper,
  NavbarSiteLinkR,
  NavbarMenuBtn,
  NavbarNavItems,
  NavbarNavItem,
  NavbarNavLinkR,
  NavbarOverlay,
} from "./NavbarElements";
import Logo from "../../images/logo.svg";
import Bars from "../../images/menu.svg";
import X from "../../images/close.svg";
import BarsLight from "../../images/menu--light.svg";
import XLight from "../../images/close--light.svg";
import Sun from "../../images/sun.svg";
import Moon from "../../images/moon.svg";
import { ImageEl } from "../Image/ImageElement";

const Navbar = ({
  isOpen,
  handleMenu,
  scrolledNav,
  changeNav,
  toggleMode,
  mode,
}) => {
  useEffect(() => {
    window.addEventListener("scroll", changeNav);

    return () => {
      window.removeEventListener("scroll", changeNav);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeMenu = () => {
    if (isOpen) {
      handleMenu();
    } else {
      return;
    }
  };

  const NavbarOverlayRef = useRef();

  const closeNavOverlayClick = (e) => {
    if (NavbarOverlayRef.current === e.target) {
      handleMenu();
    }
  };

  return (
    <NavbarWrapper $scrolledNav={scrolledNav}>
      <NavbarOverlay
        isOpen={isOpen}
        ref={NavbarOverlayRef}
        onClick={closeNavOverlayClick}
      />
      <WrapperEl>
        <NavbarInnerWrapper $scrolledNav={scrolledNav}>
          <NavbarSiteLinkR to="/" $isOpen={isOpen} onClick={closeMenu}>
            <ImageEl src={Logo} alt="Logo" />
          </NavbarSiteLinkR>
          <NavbarMenuBtn onClick={toggleMode} style={{ display: "flex" }}>
            {mode === "dark" ? (
              <ImageEl src={Sun} alt="Toggle Mode" />
            ) : (
              <ImageEl src={Moon} alt="Toggle Mode" />
            )}
          </NavbarMenuBtn>
          <NavbarMenuBtn onClick={handleMenu}>
            {mode === "dark" ? (
              <ImageEl
                src={isOpen ? `${XLight}` : `${BarsLight}`}
                alt={isOpen ? "Close Menu" : "Open Menu"}
              />
            ) : (
              <ImageEl
                src={isOpen ? `${X}` : `${Bars}`}
                alt={isOpen ? "Close Menu" : "Open Menu"}
              />
            )}
          </NavbarMenuBtn>
          <NavbarNavItems $isOpen={isOpen}>
            <NavbarNavItem>
              <NavbarNavLinkR
                to="/"
                $scrolledNav={scrolledNav}
                $isOpen={isOpen}
                onClick={closeMenu}
                exact={true}
              >
                Start
              </NavbarNavLinkR>
            </NavbarNavItem>
            <NavbarNavItem>
              <NavbarNavLinkR
                $scrolledNav={scrolledNav}
                to="/portfolio"
                $isOpen={isOpen}
                onClick={closeMenu}
              >
                Portfolio
              </NavbarNavLinkR>
            </NavbarNavItem>
            <NavbarNavItem>
              <NavbarNavLinkR
                $scrolledNav={scrolledNav}
                to="/contact"
                $isOpen={isOpen}
                onClick={closeMenu}
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
