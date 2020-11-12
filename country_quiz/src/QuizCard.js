import React from "react";
import styled from "styled-components";
import QuizQuestion from "./QuizQuestion";
import AnswerChoice from "./AnswerChoice";
import { useQuestions } from "./hooks/customHooks";

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
  const { sentence, choices, answer } = useQuestions();
  const CHAR_CODE_A = 65;
  return (
    <Styled>
      <QuizQuestion sentence={sentence} />
      <AnswerContainer>
        {!choices && <h1>Loading...</h1>}
        {choices?.map((choice, idx) => (
          <AnswerChoice
            key={choice}
            letter={String.fromCharCode(idx + CHAR_CODE_A)}
            choice={choice}
            answer={answer}
          />
        ))}
      </AnswerContainer>
    </Styled>
  );
};

export default QuizCard;
