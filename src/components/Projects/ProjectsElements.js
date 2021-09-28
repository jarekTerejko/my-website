import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectsWrapper = styled.main`
  margin-top: 14rem;
`;
export const ProjectsInnerWrapper = styled.section``;

export const ProjectsCols = styled(motion.article)`
  padding: 5rem 0;
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "col1 col2";

  &:first-child {
    padding-top: 0;
  }

  &:nth-child(even) {
    grid-template-areas: "col2 col1";
  }

  @media screen and (max-width: 900px) {
    gap: 20px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 50px;
    grid-template-areas:
      "col1"
      "col2";

    &:nth-child(even) {
      grid-template-areas:
        "col1"
        "col2";
    }
  }
`;

export const ProjectsColLeft = styled.div`
  background: ${(props) =>
    props.projectsBgImgD ? `url(${props.projectsBgImgD})` : "black"};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding-top: calc(
    500 / 540 * 100%
  ); // (img-height / img-width * container-width)
  grid-area: col1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    background: ${(props) =>
      props.projectsBgImgT ? `url(${props.projectsBgImgT})` : "black"};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    padding-top: calc(
      314 / 339 * 100%
    ); // (img-height / img-width * container-width)
  }

  @media screen and (max-width: 600px) {
    background: ${(props) =>
      props.projectsBgImgD ? `url(${props.projectsBgImgD})` : "black"};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    padding-top: calc(
      500 / 540 * 100%
    ); // (img-height / img-width * container-width)
  }

  @media screen and (max-width: 390px) {
    background: ${(props) =>
      props.projectsBgImgM ? `url(${props.projectsBgImgM})` : "black"};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    padding-top: calc(
      288 / 311 * 100%
    ); // (img-height / img-width * lacontainer-width)
  }
`;

export const ProjectsColRight = styled.div`
  grid-area: col2;
  position: relative;
  padding: 5rem 9rem;

  @media screen and (max-width: 1000px) {
    padding: 3rem 3rem;
  }

  @media screen and (max-width: 700px) {
    padding: 3rem 1rem;
  }

  @media screen and (max-width: 600px) {
    padding: 0rem 0rem 5rem 0;
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
    @media screen and (max-width: 600px) {
      left: 0;
      width: 100%;
    }
  }

  &::after {
    top: unset;
    bottom: 0;
  }

  @media screen and (max-width: 600px) {
    &::before {
      display: none;
    }
  }
`;
