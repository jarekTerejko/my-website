import { ImageEl } from "../Image/ImageElement";
import {
  NavbarNavItem,
  NavbarNavLinkR,
  NavbarSiteLinkR,
} from "../Navbar/NavbarElements";
import { WrapperEl } from "../Wrapper/WrapperElement";
import {
  FooterWrapper,
  FooterInnerWrapper,
  FooterNavItems,
  FooterNavItem,
  FooterNavSocialLink,
} from "./FooterElements";
import Logo from "../../images/logo.svg";
import GitHub from "../../images/github.svg";
import LinkedIn from "../../images/linkedin.svg";
import GitHubDark from "../../images/github--dark.svg";
import LinkedInDark from "../../images/linkedin--dark.svg";
import { ModeContext } from "../../App";
import { useContext } from "react";

const Footer = () => {
  
  const context = useContext(ModeContext);

  return (
    <FooterWrapper>
      <WrapperEl>
        <FooterInnerWrapper>
          <NavbarSiteLinkR to="/">
            <ImageEl src={Logo} alt="Logo" />
          </NavbarSiteLinkR>
          <FooterNavItems siteNav>
            <NavbarNavItem>
              <NavbarNavLinkR to="/" exact={true} $footerLink>
                Start
              </NavbarNavLinkR>
            </NavbarNavItem>
            <NavbarNavItem>
              <NavbarNavLinkR to="/portfolio" $footerLink>
                Portfolio
              </NavbarNavLinkR>
            </NavbarNavItem>
            <NavbarNavItem>
              <NavbarNavLinkR to="/contact" $footerLink>
                Kontakt
              </NavbarNavLinkR>
            </NavbarNavItem>
          </FooterNavItems>
          <FooterNavItems>
            {context.mode === "light" ? (
              <>
                <FooterNavItem>
                  <FooterNavSocialLink href="#" target="_blank">
                    <ImageEl src={GitHubDark} />
                  </FooterNavSocialLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavSocialLink href="#" target="_blank">
                    <ImageEl src={LinkedInDark} />
                  </FooterNavSocialLink>
                </FooterNavItem>
              </>
            ) : (
              <>
                <FooterNavItem>
                  <FooterNavSocialLink href="#" target="_blank">
                    <ImageEl src={GitHub} />
                  </FooterNavSocialLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavSocialLink href="#" target="_blank">
                    <ImageEl src={LinkedIn} />
                  </FooterNavSocialLink>
                </FooterNavItem>
              </>
            )}
          </FooterNavItems>
        </FooterInnerWrapper>
      </WrapperEl>
    </FooterWrapper>
  );
};

export default Footer;
