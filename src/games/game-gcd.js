import newGame from '../index.js';

const gameQuestion = 'Find the greatest common divisor of given numbers';

const gCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gCD(num2, num1 % num2);
};

const gameQuestionAnswer = () => {
  const randomNumberFirst = Math.floor(Math.random() * 100);
  const randomNumberSecond = Math.floor(Math.random() * 100);
  const question = `${randomNumberFirst} ${randomNumberSecond}`;
  const answer = String(gCD(randomNumberFirst, randomNumberSecond));

  return [question, answer];
};

const brainGCD = () => newGame(gameQuestion, gameQuestionAnswer);

export default brainGCD;
