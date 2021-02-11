import styled from "styled-components";

export const WrapperEl = styled.div`
  max-width: 115rem;
  padding: 0 2rem;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 0 4rem;
  }

  @media screen and (max-width: 375px) {
    padding: 0 3.2rem;
  }
`;
