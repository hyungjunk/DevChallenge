import { useState, useEffect } from "react";
import { QuestionMaker } from "../util/randomIntGenerator";

export const useQuestions = (round, maxRound) => {
  const [questionSet, setQuestionSet] = useState({
    sentence: null,
    choices: null,
    answer: null,
  });
  useEffect(() => {
    if (!!round && !!maxRound && round === maxRound + 1) return;
    const getCountryList = async () => {
      const resp = await fetch("https://restcountries.eu/rest/v2/all");
      let countriesAll = await resp.json();
      const qm = new QuestionMaker(countriesAll);
      const { sentence, choices, answer } = qm.getQuestionAndAnswer();
      console.log({ sentence, choices, answer });
      setQuestionSet({
        sentence,
        choices,
        answer,
      });
    };
    getCountryList();
    return () => {
      return setQuestionSet({
        sentence: null,
        choices: null,
        answer: null,
      });
    };
  }, [round]);
  return questionSet;
};
