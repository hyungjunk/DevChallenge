import { useState, useEffect } from "react";
import { QuestionMaker } from "../util/randomIntGenerator";

export const useQuestions = (round) => {
  console.log(round);
  const [questionSet, setQuestionSet] = useState({
    sentence: null,
    choices: undefined,
    answer: null,
  });
  useEffect(() => {
    const getCountryList = async () => {
      const resp = await fetch("https://restcountries.eu/rest/v2/all");
      let countriesAll = await resp.json();

      const qm = new QuestionMaker(countriesAll);
      const { sentence, choices, answer } = qm.getQuestionAndAnswer();
      setQuestionSet({
        sentence,
        choices,
        answer,
      });
    };
    getCountryList();
  }, [round]);
  return questionSet;
};
