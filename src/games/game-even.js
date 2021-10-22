import newGame from '../index.js';
import getRandom from '../random.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameQuestionAnswer = () => {
  const question = getRandom(0, 100);
  const answer = (question % 2 === 0) ? 'yes' : 'no';
  return [question, answer];
};

const brainEven = () => newGame(gameQuestion, gameQuestionAnswer);

export default brainEven;
