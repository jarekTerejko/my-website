import styled from "styled-components";

export const HeroWrapper = styled.header`
  position: relative;
  /* margin-top: ${(props) => (props.scrolledNav ? `8rem` : "14rem")}; */
  margin: 14rem 0 8rem 0;
  margin-bottom: 7.5rem;
  transition: var(--transition);
`;

export const HeroBgImg = styled.div`
  padding-top: calc(
    600 / 1110 * 100%
  ); // (img-height / img-width * container-width)
  background: ${(props) =>
    props.heroImgDesktop ? `url(${props.heroImgDesktop})` : "black"};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 768px) {
    background: ${(props) =>
      props.heroImgTablet ? `url(${props.heroImgTablet})` : "black"};
    padding-top: calc(
      600 / 688 * 100%
    ); // (img-height / img-width * container-width)
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  @media screen and (max-width: 375px) {
    background: ${(props) =>
      props.heroImgMobile ? `url(${props.heroImgMobile})` : "black"};
    padding-top: calc(
      271 / 311 * 100%
    ); // (img-height / img-width * container-width)
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

export const HeroHeadingWrapper = styled.div`
  position: absolute;
  bottom: 0;
  background: var(--color-very-light-gray);
  padding: 5rem 5rem 0 0;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    padding: 4rem 4rem 0 0;
    max-width: 36rem;
  }

  @media screen and (max-width: 568px) {
    padding: 3rem 3rem 0 0;
    max-width: 26rem;
  }

  @media screen and (max-width: 425px) {
    position: static;
    max-width: 100%;
    padding-top: 3.5rem;
  }
`;

export const HeroHeading = styled.h1`
  font-family: "Ibarra Real Nova", serif;
  font-size: 3.6rem;
  margin-bottom: 4rem;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 568px) {
    font-size: 2.6rem;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 2.2rem;
  }

  @media screen and (max-width: 425px) {
    font-size: 2.6rem;
  }
`;
