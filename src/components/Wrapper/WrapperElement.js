import styled from "styled-components";

export const WrapperEl = styled.div`
  max-width: 115rem;
  padding: 0 4rem;
  margin: 0 auto;

  @media screen and (max-width: 375px) {
    padding: ${(props) => (props.paddingMobile ? "0 3.2rem" : "0 4rem")};
  }
`;
