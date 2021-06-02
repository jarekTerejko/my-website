import styled from "styled-components";

export const AboutWrapper = styled.section`
  padding: 7.5rem 0;
  scroll-margin-top: 8rem;
`;

export const AboutCols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const AboutColLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-column: 1/2;
  }
`;

export const AboutColRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 4rem;
  position: relative;
  grid-column: 2/4;

  @media screen and (max-width: 1000px) {
    padding: 5rem 3rem;
  }

  @media screen and (max-width: 700px) {
    padding: 3rem 1rem;
  }

  @media screen and (max-width: 768px) {
    grid-column: 1/2;
    padding: 5rem 0rem;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 40px;
    height: 2px;
    width: calc(100% - 80px);
    background: var(--color-border-gray);

    @media screen and (max-width: 1000px) {
      left: 30px;
      width: calc(100% - 60px);
    }

    @media screen and (max-width: 768px) {
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
