import React, { createContext, useRef, useState } from "react";
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
  padding: 20px;
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 85%;
  padding: 2em 0px;
  position: relative;
`;

const NextBtn = styled.button`
  position: absolute;
  border-radius: 30px;
  bottom: 0px;
  right: 0px;
  padding: 0.5em 2em;
  border: none;
  background: #f9a826;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

const INITIAL_STATE = {
  userSelected: null,
  answer: null,
  userHasTried: false,
  isUserCorrect: false,
  round: 1,
};

export const AnswerContext = createContext();

const QuizCard = () => {
  const [context, setContext] = useState(INITIAL_STATE);
  const isAnswerRef = useRef();
  const { sentence, choices, answer } = useQuestions(context.round);
  const CHAR_CODE_A = 65;

  const handleClick = () => {
    setContext(ctx=> ({ ...INITIAL_STATE, round: ctx.round+1 }));
  };

  return (
    <Styled>
      <QuizQuestion sentence={sentence} />
      <AnswerContext.Provider value={[context, setContext]}>
        <AnswerContainer>
          {!choices && <p>Loading...</p>}
          {choices?.map((choice, idx) => (
            <AnswerChoice
              ref={choice === answer ? isAnswerRef : null}
              key={choice}
              letter={String.fromCharCode(idx + CHAR_CODE_A)}
              choice={choice}
              isAnswer={choice === answer}
            />
          ))}
          {context.userHasTried && (
            <NextBtn onClick={handleClick}>Next</NextBtn>
          )}
        </AnswerContainer>
      </AnswerContext.Provider>
    </Styled>
  );
};

export default QuizCard;
