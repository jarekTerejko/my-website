import styled from "styled-components";

export const FooterWrapper = styled.footer`
  /* background: var(--color-grayish-dark-blue); */
  padding: 1rem 0;
  box-shadow: 1px 1px 10px 1px rgb(0 0 0 / 20%);

  @media screen and (max-width: 650px) {
    padding: 4rem 0;
  }
`;

export const FooterInnerWrapper = styled.nav`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  gap: 20px;

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const FooterNavItems = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  transform: translateX(10px);

  @media screen and (max-width: 650px) {
    flex-direction: ${(props) => (props.siteNav ? "column" : "")};
    transform: translateX(0);
  }
`;
export const FooterNavItem = styled.li`
  margin: 0 0.5rem;
`;
export const FooterNavSocialLink = styled.a`
  padding: 0.5rem;
`;
