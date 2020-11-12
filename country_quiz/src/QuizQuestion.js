import React from "react";
import styled from "styled-components";

const Styled = styled.p`
  color: #345273;
  font-weight: 900;
`;

const QuizQuestion = ({ sentence }) => {
  return <Styled>{sentence}</Styled>;
};

export default QuizQuestion;
