import { DescriptionText } from "../DecriptionText/DescriptionTextElement";
import { HeroHeading } from "../Hero/HeroElements";
import { ImageEl } from "../Image/ImageElement";
import { WrapperEl } from "../Wrapper/WrapperElement";
import {
  ContactIntroColLeft,
  ContactIntroColRight,
  ContactIntroCols,
  ContactIntroSocialItems,
  ContactIntroSocialItem,
  ContactIntroSocialLink,
  ContactIntroWrapper,
} from "./SectionIntroElements";
import GitHubDark from "../../images/github--dark.svg";
import LinkedInDark from "../../images/linkedin--dark.svg";

const ContactIntro = ({ contactData }) => {
  return (
    <ContactIntroWrapper>
      <WrapperEl>
        <ContactIntroCols>
          <ContactIntroColLeft>
            <HeroHeading as="h2">Get in Touch</HeroHeading>
          </ContactIntroColLeft>
          <ContactIntroColRight>
            <DescriptionText>{contactData.getInTouchText}</DescriptionText>
            <ContactIntroSocialItems>
              <ContactIntroSocialItem>
                <ContactIntroSocialLink href="#" target="_blank">
                  <ImageEl src={GitHubDark} />
                </ContactIntroSocialLink>
              </ContactIntroSocialItem>
              <ContactIntroSocialItem>
                <ContactIntroSocialLink href="#" target="_blank">
                  <ImageEl src={LinkedInDark} />
                </ContactIntroSocialLink>
              </ContactIntroSocialItem>
            </ContactIntroSocialItems>
          </ContactIntroColRight>
        </ContactIntroCols>
      </WrapperEl>
    </ContactIntroWrapper>
  );
};

export default ContactIntro;
