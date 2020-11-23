import React, { forwardRef, useContext, useRef } from "react";
import styled from "styled-components";
import CorrectSVGIcon from "./assets/correct.svg";
import WrongSVGIcon from "./assets/wrong.svg";

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
    border: none;
  }
  &:click {
    border: none;
  }
  font-size: ${(props) => (props.isLongText ? "7px" : "13px")};
  background-color: ${(props) => {
    return props.isAnswer && props.context.userHasTried ? "green" : null;
  }};
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

const AnswerChoice = React.memo((props) => {
  const { letter, choice, isAnswer, contextSetter, contextValue } = props;
  const handleClick = () => {
    contextSetter(choice, isAnswer, DOMref);
  };
  const DOMref = useRef();
  return (
    <Styled
      ref={DOMref}
      isLongText={choice.length > 30}
      context={contextValue}
      isAnswer={isAnswer}
      onClick={handleClick}
    >
      <AnswerLetter letter={letter} />
      <span>{choice}</span>
      <StyledAnswerMark>
        <AnswerICON
          userSelected={contextValue.userSelected === choice}
          isVisible={contextValue.userHasTried}
          isAnswer={isAnswer}
        />
      </StyledAnswerMark>
    </Styled>
  );
});

export default AnswerChoice;
