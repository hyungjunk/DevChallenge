import React from "react";
import styled from "styled-components";

const Styled = styled.button`
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

const AnswerLetter = ({ letter }) => {
  return <StyledLetter>{letter}</StyledLetter>;
};

const handleAnswerChoice = (choice, answer) => {
  const isCorrect = answer === choice;
  if (isCorrect) {
    alert("정답!");
  } else {
    alert("오답!");
  }
};

const AnswerChoice = (props) => {
  const { letter, choice, answer } = props;
  return (
    <Styled
      isLongText={choice.length > 30}
      onClick={() => handleAnswerChoice(choice, answer)}
    >
      <AnswerLetter letter={letter} /> {choice}
    </Styled>
  );
};

export default AnswerChoice;
