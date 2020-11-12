export const getRandomInt = (min = 0, max = 500, howMany = 4) => {
  const result = [];
  for (let index = 0; index < howMany; index++) {
    min = Math.ceil(min);
    max = Math.floor(max);
    result.push(Math.floor(Math.random() * (max - min)) + min); //최댓값은 제외, 최솟값은 포함
  }
  return result;
};

export const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.map((country) => country.name);
};

export class QuestionMaker {
  constructor(countryList) {
    this.countryList = countryList;
    this.questionCount = countryList.length;
    this.questions = [];
  }

  getRandomItems(no = 4) {
    let items = [];
    const randomNumber = getRandomInt(0, this.questionCount, no);
    randomNumber.forEach((no) => {
      items.push(this.countryList[no]);
    });
    return items;
  }

  askCapital(answerIdx) {
    const choices = this.getRandomItems();
    return {
      sentence: `${choices[answerIdx].capital} is captial of where?`,
      choices: choices.map((choice) => choice.name),
      answer: choices[answerIdx],
    };
  }

  askRegion(answerIdx) {
    const items = this.getRandomItems();
    const answer = items[answerIdx].name;
    const regionList = shuffleArray(items);
    return {
      sentence: `Which region does ${items[answerIdx].name} belong to?`,
      choices: regionList,
      answer: answer,
    };
  }

  askFlag(answerIdx) {
    const choices = this.getRandomItems();
    return {
      sentence: `${choices[answerIdx].flag} is flag of which country?`,
      choices: choices,
      answer: choices[answerIdx],
    };
  }

  getQuestionAndAnswer() {
    if (!this.countryList) return;
    // const funcs = [this.askCapital, this.askFlag, this.askRegion];
    const funcs = [this.askRegion];
    const randomQuestion = funcs[getRandomInt(0, funcs.length, 1)];
    const qu = randomQuestion.bind(this);
    const question = qu(getRandomInt(0, funcs.length, 1));
    return {
      sentence: question.sentence,
      choices: question.choices,
      answer: question.answer,
    };
  }
}
