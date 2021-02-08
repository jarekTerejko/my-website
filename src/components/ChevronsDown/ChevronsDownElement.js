import styled, { keyframes } from "styled-components";

const moveUpDown = keyframes`
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(-2px);
  }
`;

export const ChevronsDownIcon = styled.img`
  margin-right: 1.5rem;
  animation: ${moveUpDown} 0.5s linear infinite alternate;
`;
