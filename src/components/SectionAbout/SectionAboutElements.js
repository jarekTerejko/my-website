import styled from "styled-components";

export const AboutWrapper = styled.section`
  padding: 7.5rem 0;
  scroll-margin-top: 8rem;
`;

export const AboutCols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
export const AboutColLeft = styled.div`
  min-height: 60rem;
  background: ${(props) =>
    props.personPhoto ? `url(${props.personPhoto})` : "black"};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 900px) {
    grid-column: 1/3;
    background: ${(props) =>
      props.personPlaceholderT ? `url(${props.personPlaceholderT})` : "black"};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  @media screen and (max-width: 640px) {
    grid-column: 1/2;
  }
  @media screen and (max-width: 375px) {
    background: ${(props) =>
      props.personPlaceholderM ? `url(${props.personPlaceholderM})` : "black"};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

export const AboutColRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 9rem;
  position: relative;

  @media screen and (max-width: 1000px) {
    padding: 5rem 3rem;
  }

  @media screen and (max-width: 900px) {
    grid-column: 3/6;
    padding: 3rem;
  }
  @media screen and (max-width: 700px) {
    padding: 3rem 1rem;
  }

  @media screen and (max-width: 640px) {
    grid-column: 1/2;
    padding: 5rem 0rem;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 90px;
    height: 2px;
    width: calc(100% - 180px);
    background: var(--color-border-gray);

    @media screen and (max-width: 1000px) {
      left: 30px;
      width: calc(100% - 60px);
    }

    @media screen and (max-width: 700px) {
      left: 10px;
      width: calc(100% - 20px);
    }
    @media screen and (max-width: 640px) {
      left: 0;
      width: 100%;
    }
  }

  &::after {
    top: unset;
    bottom: 0;
  }
`;
export const AboutColRightInner = styled.div``;
