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

const About = () => {
  return (
    <AboutWrapper id="about">
      <WrapperEl>
        <AboutCols>
          <AboutColLeft
            personPhoto={PersonPlaceholder}
            personPlaceholderT={PersonPlaceholderT}
            personPlaceholderM={PersonPlaceholderM}
          />
          <AboutColRight>
            <HeadingSecondary marginBottom="4rem">O Mnie</HeadingSecondary>
            <DescriptionText>
              I’m a junior front-end developer looking for a new role in an
              exciting company. I focus on writing accessible HTML, using modern
              CSS practices and writing clean JavaScript. When writing
              JavaScript code, I mostly use React, but I can adapt to whatever
              tools are required. I’m based in London, UK, but I’m happy working
              remotely and have experience in remote teams. When I’m not coding,
              you’ll find me outdoors. I love being out in nature whether that’s
              going for a walk, run or cycling. I’d love you to check out my
              work.
            </DescriptionText>
            <LinkR to="/portfolio">Portfolio</LinkR>
          </AboutColRight>
        </AboutCols>
      </WrapperEl>
    </AboutWrapper>
  );
};

export default About;
