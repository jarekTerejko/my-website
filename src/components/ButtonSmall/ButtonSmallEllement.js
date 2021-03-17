import styled from "styled-components";

export const ButtonSmall = styled.button`
  border: 1px solid var(--color-cyan);
  background: var(--color-very-light-gray);
  padding: 0.8rem;
  text-transform: capitalize;
  font-size: 1.2rem;
  color: var(--color-cyan);
  margin: 0 0.5rem 0.5rem 0;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

export const ButtonSmallRemove = styled(ButtonSmall)`
  padding: 0.6rem;
  cursor: default;
  text-transform: uppercase;
`;

export const ButtonSmallRemoveImgWrapper = styled.div`
  background: var(--color-cyan);
`;
