import newGame from '../index.js';
import getRandom from '../random.js';

const gameQuestion = 'What number is missing in the progression?';
const progressionLength = 10;
const maxHiddenNumberIndex = progressionLength - 1;

const makeProgression = (firstProgressionElement, progressionStep, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstProgressionElement + progressionStep * i);
}
  return progression;
};

const gameQuestionAnswer = () => {
  const hiddenNumberPosition = getRandom(0, maxHiddenNumberIndex);
  const progressionStep = getRandom(0, 10);
  const firstProgressionElement = getRandom(0, 100);
    const progression = makeProgression(firstProgressionElement, progressionStep, progressionLength);
    progression[hiddenNumberPosition] = '..';
    const question = progression.join(' ');
    const answer = String(firstProgressionElement + progressionStep * (hiddenNumberPosition));
    return [question, answer];
};

const brainProgression = () => newGame(gameQuestion, gameQuestionAnswer);

export default brainProgression;