import styled from "styled-components";

export const QuestionWrapper = styled.section`
  padding-top: 7.5rem;
  margin-bottom: 15rem;
`;

export const QuestionCols = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  gap: 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }
`;

export const QuestionColLine = styled.div`
  position: relative;

  @media screen and (max-width: 768px) {
    display: none;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 2px;
    width: 100%;
    background: var(--color-border-gray);
  }
`;
