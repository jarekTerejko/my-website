import styled from "styled-components";

export const ContactIntroWrapper = styled.div`
  margin-top: 14rem;
`;

export const ContactIntroCols = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  position: relative;

  @media screen and (max-width: 650px) {
    display: block;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0px;
    height: 1px;
    width: 100%;
    background: var(--color-border-gray);
  }

  &::after {
    top: unset;
    bottom: 0;
  }
`;

export const ContactIntroColLeft = styled.div`
  grid-column: 1/3;
`;
export const ContactIntroColRight = styled.div`
  grid-column: 3/6;
`;

export const ContactIntroSocialItems = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  transform: translateX(-10px);

  @media screen and (max-width: 650px) {
    flex-direction: ${(props) => (props.siteNav ? "column" : "")};
    transform: translateX(0);
  }
`;
export const ContactIntroSocialItem = styled.li`
  margin: 0 0.5rem;
`;
export const ContactIntroSocialLink = styled.a`
  padding: 0.5rem;
`;
