import newGame from '../index.js';
import getRandom from '../random.js';

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
      result = null;
      break;
  }
  return result;
};
const gameQuestion = 'What is the result of expression?';

const operators = ['+', '-', '*'];

const getGameQuestionAnswer = () => {
  const randomNumberOfOperator = getRandom(0, 3);
  const randomNum1 = getRandom(0, 100);
  const randomNum2 = getRandom(0, 100);
  const question = `${randomNum1} ${operators[randomNumberOfOperator]} ${randomNum2}`;
  const answer = String(arithmetic(randomNum1, randomNum2, operators[randomNumberOfOperator]));
  return [question, answer];
};

const brainCalc = () => newGame(gameQuestion, getGameQuestionAnswer);

export default brainCalc;
