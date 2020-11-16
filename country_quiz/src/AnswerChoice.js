import React, { forwardRef, useContext } from "react";
import styled from "styled-components";
import CorrectSVGIcon from "./assets/correct.svg";
import WrongSVGIcon from "./assets/wrong.svg";
import { AnswerContext } from "./QuizCard";

const Styled = styled.button`
  position: relative;
  border-radius: 10px;
  border: 2px solid rgb(174, 176, 223);
  height: 50px;
  line-height: 50px;
  text-align: left;
  &:hover {
    background-color: #f9a826;
    color: white;
    cursor: pointer;
  }
  font-size: ${(props) => (props.isLongText ? "9px" : "13px")};
`;

const StyledLetter = styled.span`
  margin: 0 20px;
`;

const StyledAnswerMark = styled.span`
  position: absolute;
  right: 0;
  color: red;
`;

const ICONWrapper = styled.div`
  display: ${(props) =>
    props.isVisible && (props.userSelected || props.isAnswer)
      ? "block"
      : "none"};
`;

const AnswerICON = ({ userSelected, isVisible, isAnswer }) => {
  const iconSRC = isAnswer ? CorrectSVGIcon : WrongSVGIcon;
  return (
    <ICONWrapper
      userSelected={userSelected}
      isVisible={isVisible}
      isAnswer={isAnswer}
    >
      <img src={iconSRC} />
    </ICONWrapper>
  );
};

const AnswerLetter = ({ letter }) => {
  return <StyledLetter>{letter}</StyledLetter>;
};

const handleClick = (setContext, choice, isAnswer) => {
  setContext({
    userHasTried: true,
    userSelected: choice,
    isUserCorrect: isAnswer,
  });
};

const AnswerChoice = forwardRef((props, ref) => {
  const [context, setContext] = useContext(AnswerContext);
  const { letter, choice, isAnswer } = props;
  return (
    <Styled
      isLongText={choice.length > 30}
      onClick={() => handleClick(setContext, choice, isAnswer)}
      ref={ref}
    >
      <AnswerLetter letter={letter} />
      <span>{choice}</span>
      <StyledAnswerMark>
        <AnswerICON
          userSelected={context.userSelected === choice}
          isVisible={context.userHasTried}
          isAnswer={isAnswer}
        />
      </StyledAnswerMark>
    </Styled>
  );
});

export default AnswerChoice;
