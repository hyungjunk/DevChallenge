import React, { forwardRef, useContext, useRef } from "react";
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
  font-size: ${(props) => (props.isLongText ? "7px" : "13px")};
  background-color: ${(props) =>
    props.isAnswer && props.context.userHasTried ? "green" : null};
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

const handleClick = (setContext, choice, isAnswer, DOMref) => {
  setContext(ctx=>({
    ...ctx,
    userHasTried: true,
    userSelected: choice,
    isUserCorrect: isAnswer,
  }));
  if (!isAnswer) {
    DOMref.current.style.background = "red";
  }
};

const AnswerChoice = (props) => {
  const [context, setContext] = useContext(AnswerContext);
  const { letter, choice, isAnswer } = props;
  const DOMref = useRef();
  return (
    <Styled
      ref={DOMref}
      isLongText={choice.length > 30}
      context={context}
      isAnswer={isAnswer}
      onClick={() =>
        handleClick(setContext, choice, isAnswer, DOMref)
      }
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
};

export default AnswerChoice;
