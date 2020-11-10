import React from "react";
import styled from "styled-components";
import QuizQuestion from "./QuizQuestion";
import AnswerChoice from "./AnswerChoice";

const Styled = styled.div`
  background: white;
  color: rgb(160, 162, 209);
  width: 350px;
  height: 500px;
  border-radius: 30px;
  margin: 20px;
  padding: 30px;
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: 30px 0px;
`;

const QuizCard = () => {
  return (
    <Styled>
      <QuizQuestion />
      <AnswerContainer>
        {/* ABCD를 코드화 하려면? */}
        <AnswerChoice letter={"A"} />
        <AnswerChoice letter={"B"} />
        <AnswerChoice letter={"C"} />
        <AnswerChoice letter={"D"} />
      </AnswerContainer>
    </Styled>
  );
};

export default QuizCard;
