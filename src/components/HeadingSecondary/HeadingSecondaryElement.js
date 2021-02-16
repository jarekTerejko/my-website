import styled from "styled-components";

export const HeadingSecondary = styled.h2`
  font-family: var(--font-family-serif);
  font-weight: var(--weight-bold);
  font-size: 3rem;
  margin-bottom: ${(props) => (props.marginBottom ? `${props.marginBottom}` : "")};
  max-width: ${(props) => (props.sectionQuestion ? "34rem" : "")};
`;
