import newGame from '../index.js';

const arithmetic = (num1, num2, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      break;
  }
  return result;
};
const gameQuestion = 'What is the result of expression?';
const operators = ['+', '-', '*'];
const gameQuestionAnswer = () =>{
  const randomNumberOfOperator = Math.floor(Math.random() * 3);
  const randomNumberFirst = Math.floor(Math.random() * 100);
  const randomNumberSecond = Math.floor(Math.random() * 100);
  const question = `${randomNumberFirst} ${randomNumberOfOperator} ${randomNumberSecond}`;
  const answer = String(arithmetic(randomNumberFirst, randomNumberSecond, operators[randomNumberOfOperator]));
  return [question, answer];
};

const brainCalc = () => newGame(gameQuestion, gameQuestionAnswer);

export default brainCalc;
