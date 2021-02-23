import styled, { keyframes } from "styled-components";

const moveUpDown = keyframes`
  from {
    transform: translateY(-1px);
  }

  to {
    transform: translateY(1px);
  }
`;

export const ChevronsDownIcon = styled.img`
  transform: translateY(-1px);
  margin-right: 4rem;
  padding: 0 1.5rem;
  animation: ${moveUpDown} 0.5s linear infinite alternate;
`;

export const Button = styled.a`
  position: relative;
  overflow: hidden;
  background: var(--color-cyan);
  text-transform: uppercase;
  color: var(--color-very-light-gray);
  padding: 1.5rem 4rem 1.5rem 0;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  letter-spacing: 2px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: 50px;
    background: #5fb4a2;
    background: var(--color-dark-blue);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    width: 100%;
    height: 100%;

    background: linear-gradient(90deg, transparent, #fff, transparent);

    transition: 0.3s;
  }

  &:hover::after {
    transform: translateX(100%);
  }
`;
