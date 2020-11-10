import React from "react";
import styled from "styled-components";

const Styled = styled.p`
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
`;

const StyledLetter = styled.span`
  margin: 0 20px;
`;

const AnswerLetter = (props) => {
  const { letter } = props;
  return <StyledLetter>{letter}</StyledLetter>;
};

const AnswerChoice = (props) => {
  return (
    <Styled>
      <AnswerLetter {...props} /> Korea
    </Styled>
  );
};

export default AnswerChoice;
