import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkR = styled(Link)`
  border: 2px solid var(--color-dark-blue);
  background: var(--color-very-light-gray);
  padding: 1.5rem 4rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  color: var(--color-dark-blue);
  letter-spacing: 2px;
  font-weight: var(--weight-bold);
  transition: background-color var(--transition), color var(--transition);

  &:hover {
    background: var(--color-dark-blue);
    color: var(--color-very-light-gray);
  }
`;
