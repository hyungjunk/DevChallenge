import React, {
  createContext,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
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

const TextWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
`;

const TryAgainBtn = styled.button`
  width: 10em;
  margin: 0 auto;
  border: none;
  background: #f9a826;
  padding: 0.5em 2em;
  &:hover {
    cursor: pointer;
  }
  border-radius: 2rem;
`;

const INITIAL_STATE = {
  userSelected: null,
  answer: null,
  userHasTried: false,
  isUserCorrect: false,
  round: 1,
  maxRound: 5,
  score: 0,
};

export const AnswerContext = createContext();

const QuizCard = () => {
  const [context, setContext] = useState(INITIAL_STATE);
  const isAnswerRef = useRef();
  const { sentence, choices, answer } = useQuestions(
    context.round,
    context.maxRound
  );
  const CHAR_CODE_A = 65;

  const handleClick = () => {
    setContext((ctx) => {
      return {
        ...INITIAL_STATE,
        score: ctx.score,
        round: ctx.round + 1,
      };
    });
  };

  const handleReset = () => {
    setContext(INITIAL_STATE);
  };

  const contextSetter = useCallback((choice, isAnswer, DOMref) => {
    setContext((ctx) => {
      return {
        ...ctx,
        userHasTried: true,
        userSelected: choice,
        isUserCorrect: isAnswer,
        score: isAnswer ? ctx.score + 1 : ctx.score,
      };
    });
    if (!isAnswer) {
      DOMref.current.style.background = "red";
    }
  }, []);

  const contextValue = useMemo(() => context, [
    context.round,
    context.userHasTried,
  ]);

  return (
    <Styled>
      <AnswerContext.Provider value={[context, setContext]}>
        {context.round === context.maxRound + 1 ? (
          <TextWrapper>
            <p>You are done!</p>
            <p>
              Total Score: {context.score} / {context.maxRound}
            </p>
            <TryAgainBtn onClick={handleReset}>Try Again</TryAgainBtn>
          </TextWrapper>
        ) : (
          <>
            <QuizQuestion sentence={sentence} />
            <AnswerContainer>
              {!choices && <p>Loading...</p>}
              {choices?.map((choice, idx) => (
                <AnswerChoice
                  ref={choice === answer ? isAnswerRef : null}
                  key={choice}
                  letter={String.fromCharCode(idx + CHAR_CODE_A)}
                  choice={choice}
                  isAnswer={choice === answer}
                  contextSetter={contextSetter}
                  contextValue={contextValue}
                />
              ))}
              {context.userHasTried && (
                <NextBtn onClick={handleClick}>Next</NextBtn>
              )}
            </AnswerContainer>
          </>
        )}
      </AnswerContext.Provider>
    </Styled>
  );
};

export default QuizCard;
