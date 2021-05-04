import styled from "styled-components";
import { NavbarSiteLinkR } from "../Navbar/NavbarElements";

export const ProjectDetailsWrapper = styled.section`
  margin-top: 14rem;
`;

export const ProjectDetailsIntroBgImg = styled.div`
  padding-top: calc(
    500 / 1110 * 100%
  ); // (img-height / img-width * container-width)
  background: ${(props) => (props.img4 ? `url(${props.img4})` : "black")};
  background-repeat: no-repeat;
  /* background-position: center; */
  background-size: cover;
  margin-bottom: 11.5rem;

  @media screen and (max-width: 768px) {
    padding-top: calc(
      310 / 689 * 100%
    ); // (img-height / img-width * container-width)
    background: ${(props) => (props.img7 ? `url(${props.img7})` : "black")};
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 5rem;
  }

  @media screen and (max-width: 375px) {
    padding-top: calc(
      140 / 311 * 100%
    ); // (img-height / img-width * container-width)
    background: ${(props) => (props.img8 ? `url(${props.img8})` : "black")};
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const ProjectDetailsCols = styled.article`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 60px;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const ProjectDetailsColLeft = styled.div`
  grid-column: 1/3;
  position: relative;
`;

export const ProjectDetailsColRight = styled.div`
  grid-column: 3/6;
`;

export const ProjectDetailsColLeftInner = styled.div`
  position: relative;
  padding: 5rem 2rem 5rem 0;

  @media screen and (max-width: 768px) {
    margin-bottom: 5rem;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: calc(100% - 20px);
    background: var(--color-border-gray);
  }

  &::after {
    top: unset;
    bottom: 0;
  }
`;

export const ProjectDetailsIntroText = styled.h3`
  font-size: 3rem;
  font-weight: var(--weight-regular);
  font-family: var(--font-family-serif);
  text-transform: capitalize;
  color: var(--color-grayish-dark-blue);
`;

export const ProjectDetailsGoalsList = styled.ul`
  list-style: none;
  margin-bottom: 3rem;
`;
export const ProjectDetailsGoalsListItems = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;

export const ProjectDetailsLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 5rem;
`;
export const ProjectDetailsLinkLeftWrapper = styled.div`
  border: 1px solid var(--color-border-gray);
  border-right-width: 0.5px;
  border-left: none;
  padding: 3rem 1rem 3rem 0;
  display: flex;
  align-self: flex-start;
`;
export const ProjectDetailsLinkRightWrapper = styled.div`
  border: 1px solid var(--color-border-gray);
  border-left-width: 0.5px;
  border-right: none;
  padding: 3rem 0 3rem 1rem;
  display: flex;
  justify-content: flex-end;
`;

export const ProjectDetailsLink = styled(NavbarSiteLinkR)`
  display: flex;
  align-items: center;
`;

export const ProjectDetailsName = styled(ProjectDetailsIntroText)`
  @media screen and (max-width: 650px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 1.6rem;
  }
`;

export const ProjectDetailsLinkText = styled.span`
  font-size: 1.4rem;
  color: var(--color-form-input-place-holder);
  text-transform: capitalize;

  @media screen and (max-width: 350px) {
    font-size: 1.2rem;
  }
`;
