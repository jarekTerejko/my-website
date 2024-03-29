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
import GitHub from "../../images/github.svg";
import LinkedIn from "../../images/linkedin.svg";
import Lottie from "lottie-web";
import Meeting from "../../images/contact/meeting.json";
import { useContext, useEffect } from "react";
import { ModeContext } from "../../App";

const ContactIntro = ({ contactData }) => {
  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: document.querySelector(".meeting"),
      animationData: Meeting,
    });

    return () => {
      animation.destroy();
    };
  }, []);

  const context = useContext(ModeContext);

  return (
    <ContactIntroWrapper>
      <WrapperEl>
        <ContactIntroCols>
          <ContactIntroColLeft>
            <HeroHeading as="h2">Poznajmy się</HeroHeading>
            <div className="meeting" style={{ maxWidth: 300 }}></div>
          </ContactIntroColLeft>
          <ContactIntroColRight>
            <DescriptionText>{contactData.getInTouchText}</DescriptionText>
            <ContactIntroSocialItems>
              {context.mode === "light" ? (
                <>
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
                </>
              ) : (
                <>
                  <ContactIntroSocialItem>
                    <ContactIntroSocialLink href="#" target="_blank">
                      <ImageEl src={GitHub} />
                    </ContactIntroSocialLink>
                  </ContactIntroSocialItem>
                  <ContactIntroSocialItem>
                    <ContactIntroSocialLink href="#" target="_blank">
                      <ImageEl src={LinkedIn} />
                    </ContactIntroSocialLink>
                  </ContactIntroSocialItem>
                </>
              )}
            </ContactIntroSocialItems>
          </ContactIntroColRight>
        </ContactIntroCols>
      </WrapperEl>
    </ContactIntroWrapper>
  );
};

export default ContactIntro;
