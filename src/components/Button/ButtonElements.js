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
  /* background: var(--color-grayish-dark-blue); */
  background: var(--color-cyan);
  text-transform: uppercase;
  color: var(--color-very-light-gray);
  color: #fafafa;
  padding: 1.5rem 4rem 1.5rem 0;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  transition: var(--transition) background;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: 50px;
    background: var(--color-dark-blue);
    background: #203a4c;
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
    transition: var(--transition) transform;
  }

  &:hover::after {
    transform: translateX(100%);
  }
  &:hover {
    background: var(--color-cyan);
  }
`;
