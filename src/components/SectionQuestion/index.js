import { HeadingSecondary } from "../HeadingSecondary/HeadingSecondaryElement";
import { LinkR } from "../Link/LinkElement";
import { WrapperEl } from "../Wrapper/WrapperElement";
import {
  QuestionColLine,
  QuestionCols,
  QuestionWrapper,
} from "./SectionQuestionElements";

const Question = () => {
  return (
    <QuestionWrapper>
      <WrapperEl>
        <QuestionCols>
          <HeadingSecondary sectionQuestion>
            Projekt do zrealizowania? Czekam na kontakt.
          </HeadingSecondary>
          <QuestionColLine />
          <LinkR to="/contact">Skontaktuj się</LinkR>
        </QuestionCols>
      </WrapperEl>
    </QuestionWrapper>
  );
};

export default Question;
