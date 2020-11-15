import React, { forwardRef } from "react";
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
  display: none;
`;

const AnswerICON = ({ isAnswer }) => {
  const iconSRC = isAnswer ? CorrectSVGIcon : WrongSVGIcon;
  return (
    <ICONWrapper>
      <img src={iconSRC} />
    </ICONWrapper>
  );
};

const AnswerLetter = ({ letter }) => {
  return <StyledLetter>{letter}</StyledLetter>;
};

const AnswerChoice = forwardRef((props, ref) => {
  const { letter, choice, answer, handleClick } = props;
  return (
    <Styled
      isLongText={choice.length > 30}
      onClick={(e) => handleClick(e, choice, answer)}
      ref={ref}
    >
      <AnswerLetter letter={letter} />
      <span>{choice}</span>
      <StyledAnswerMark>
        <AnswerICON isAnswer={choice === answer} />
      </StyledAnswerMark>
    </Styled>
  );
});

export default AnswerChoice;
