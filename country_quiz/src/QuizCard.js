import React, {
  createContext,
  useContext,
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
  padding: 30px;
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: 50px 0px;
`;

const INITIAL_STATE = {
  userSelected: null,
  answer: null,
  userHasTried: false,
  isUserCorrect: false
};
export const AnswerContext = createContext();

const QuizCard = () => {
  const [context, setContext] = useState(INITIAL_STATE);
  const isAnswerRef = useRef();
  const { sentence, choices, answer } = useQuestions();
  const CHAR_CODE_A = 65;
  const handleClick = (e) => {
    // e.target.style.background = "red";
    // isAnswerRef.current.style.background = "green";
    console.log(isAnswerRef.current);
    console.log(isAnswerRef.current.children);
    console.log(
      (isAnswerRef.current.children[2].children[0].style.display = "block")
    );
  };

  // userSelect에 따라 AnswerChoice 컴포넌트에서는 background color, icon이보이게/안보이게
  // 이외 많은 것들이 필요없어질수도.

  // FIXME: 굳이 answer 필요없고 isAnswer={choice====answer}로 해버려도 될 듯
  return (
    <Styled>
      <QuizQuestion sentence={sentence} />
      <AnswerContext.Provider value={[context, setContext]}>
        <AnswerContainer>
          {!choices && <h1>Loading...</h1>}
          {choices?.map((choice, idx) => (
            <AnswerChoice
              ref={choice === answer ? isAnswerRef : null}
              key={choice}
              letter={String.fromCharCode(idx + CHAR_CODE_A)}
              choice={choice}
              isAnswer={choice === answer}
            />
          ))}
        </AnswerContainer>
      </AnswerContext.Provider>
    </Styled>
  );
};

export default QuizCard;