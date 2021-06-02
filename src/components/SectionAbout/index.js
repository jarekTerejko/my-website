import { DescriptionText } from "../DecriptionText/DescriptionTextElement";
import { HeadingSecondary } from "../HeadingSecondary/HeadingSecondaryElement";
import { LinkR } from "../Link/LinkElement";
import { WrapperEl } from "../Wrapper/WrapperElement";
import {
  AboutColLeft,
  AboutColRight,
  AboutCols,
  AboutWrapper,
} from "./SectionAboutElements";
import PersonPlaceholder from "../../images/homepage/desktop/person.jpg";
import PersonPlaceholderT from "../../images/homepage/tablet/person_281x600.jpg";
import PersonPlaceholderM from "../../images/homepage/mobile/person_310x345.jpg";
import { ImageEl } from "../Image/ImageElement";
import PersonPhoto from "../../images/Jarosław_Terejko_350.jpg";

const About = ({ aboutText }) => {
  return (
    <AboutWrapper id="about">
      <WrapperEl>
        <AboutCols>
          <AboutColLeft>
            <ImageEl
              src={PersonPhoto}
              style={{ boxShadow: "1px 1px 10px rgba(0, 0, 0, .2)" }} alt='Jarosław Terejko Front-end Developer'
            />
          </AboutColLeft>
          <AboutColRight>
            <HeadingSecondary marginBottom="4rem">O Mnie</HeadingSecondary>
            <DescriptionText>{aboutText}</DescriptionText>
            <LinkR to="/portfolio">Portfolio</LinkR>
          </AboutColRight>
        </AboutCols>
      </WrapperEl>
    </AboutWrapper>
  );
};

export default About;
