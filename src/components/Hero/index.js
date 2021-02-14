import HeroImgDesktop from "../../images/homepage/desktop/image-homepage-hero.jpg";
import HeroImgTablet from "../../images/homepage/tablet/image-homepage-hero.jpg";
import HeroImgMobile from "../../images/homepage/mobile/image-homepage-hero.jpg";

import {
  HeroWrapper,
  HeroBgImg,
  HeroHeading,
  HeroHeadingWrapper,
} from "./HeroElements";
import { WrapperEl } from "../Wrapper/WrapperElement";
import { DarkButton } from "../Button/ButtonElement";
import { ChevronsDownIcon } from "../ChevronsDown/ChevronsDownElement";
import ChevronsIcon from "../../images/homepage/chevrons-down.svg";

const Hero = ({scrolledNav}) => {
  return (
    <HeroWrapper scrolledNav={scrolledNav}>
      <WrapperEl>
        <HeroBgImg
          heroImgDesktop={HeroImgDesktop}
          heroImgTablet={HeroImgTablet}
          heroImgMobile={HeroImgMobile}
        />
        <HeroHeadingWrapper>
          <HeroHeading>
            Witaj! Nazywam sie Jarek. Moją pasją jest tworzenie pięknych stron
            internetowych.
          </HeroHeading>
          <DarkButton href="#about">
            <ChevronsDownIcon src={ChevronsIcon} />
            About me
          </DarkButton>
        </HeroHeadingWrapper>
      </WrapperEl>
    </HeroWrapper>
  );
};

export default Hero;
