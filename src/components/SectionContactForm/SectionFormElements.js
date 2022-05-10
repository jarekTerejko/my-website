import styled, { keyframes } from "styled-components";
import { Button } from "../Button/ButtonElements";

export const ContactFormWrapper = styled.div`
  padding: 5rem 0;
`;

export const ContactFormCols = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;

  @media screen and (max-width: 650px) {
    display: block;
  }
`;

export const ContactFormColLeft = styled.div`
  grid-column: 1/3;
`;

export const ContactFormColRight = styled.div`
  grid-column: 3/6;
`;

export const ContactFormEl = styled.form``;

export const ContactFormRow = styled.div`
  margin-bottom: 3.2rem;
  position: relative;
`;

export const ContactFormLabel = styled.label`
  display: block;
  font-size: 1.4rem;
  font-weight: var(--weight-semiBold);
  margin-bottom: 1rem;
`;

export const ContactFormTextInput = styled.input`
  display: block;
  width: 100%;
  padding: 1.2rem;
  border: 1px solid var(--color-grayish-dark-blue);
  background: var(--color-form-input-bg);
  color: var(--color-grayish-dark-blue);
  transition: var(--transition) border-color;
  font-family: var(--font-family-sans);
  font-size: 1.4rem;
  outline: none;

  &::placeholder {
    color: var(--color-form-input-place-holder);
  }

  &:focus {
    border-color: var(--color-cyan);
  }
`;

export const ContactFormErrorMsg = styled.span`
  color: var(--color-red);
  display: block;
  font-size: 1.2rem;
  position: absolute;
  left: 0;
  bottom: -15px;
`;

export const ContactFormTextarea = styled.textarea`
  display: block;
  background: var(--color-form-input-bg);
  font-family: var(--font-family-sans);
  font-size: 1.4rem;
  color: var(--color-grayish-dark-blue);
  padding: 1.2rem;
  width: 100%;
  border: 1px solid var(--color-grayish-dark-blue);
  min-height: 10rem;
  outline: none;
  transition: var(--transition) border-color;

  &::placeholder {
    color: var(--color-form-input-place-holder);
  }

  &:focus {
    border-color: var(--color-cyan);
  }
`;

const moveRightLeft = keyframes`
  from {
    transform: translateX(1px);
  }
  to {
    transform: translateX(-1px);
  }
`;

export const ChevronsRightIcon = styled.img`
  margin-left: 4rem;
  margin-right: 0;
  padding: 0 1.5rem;
  animation: ${moveRightLeft} 0.5s linear infinite alternate;
`;

export const ContactFormSubmitBtn = styled(Button)`
  border: none;
  padding: 1.5rem 0 1.5rem 4rem;
  cursor: pointer;
  outline: none;

  &::before {
    right: 0;
    left: unset;
  }
`;
