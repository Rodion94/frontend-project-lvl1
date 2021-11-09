import newGame from '../index.js';
import getRandom from '../random.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);

const getGameQuestionAnswer = () => {
  const question = getRandom(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const brainEven = () => newGame(gameQuestion, getGameQuestionAnswer);

export default brainEven;
