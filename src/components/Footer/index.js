import { ImageEl } from "../Image/ImageElement";
import {
  NavbarNavItem,
  NavbarNavItems,
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

const Footer = () => {
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
                Home
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
            <FooterNavItem>
              <FooterNavSocialLink>
                <ImageEl src={GitHub} />
              </FooterNavSocialLink>
            </FooterNavItem>
            <FooterNavItem>
              <FooterNavSocialLink>
                <ImageEl src={LinkedIn} />
              </FooterNavSocialLink>
            </FooterNavItem>
          </FooterNavItems>
        </FooterInnerWrapper>
      </WrapperEl>
    </FooterWrapper>
  );
};

export default Footer;
