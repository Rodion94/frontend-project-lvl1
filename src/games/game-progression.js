import newGame from '../index.js';
import getRandom from '../random.js';

const gameQuestion = 'What number is missing in the progression?';
const progressionLength = 10;
const maxHiddenNumberIndex = progressionLength - 1;

const makeProgression = (progressionElement1, progressionStep, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(progressionElement1 + progressionStep * i);
  }
  return progression;
};

const getGameQuestionAnswer = () => {
  const hiddenNumberPosition = getRandom(0, maxHiddenNumberIndex);
  const progressionStep = getRandom(0, 10);
  const progressionElement1 = getRandom(0, 100);
  const progression = makeProgression(progressionElement1, progressionStep, progressionLength);
  progression[hiddenNumberPosition] = '..';
  const question = progression.join(' ');
  const answer = String(progressionElement1 + progressionStep * (hiddenNumberPosition));
  return [question, answer];
};

const brainProgression = () => newGame(gameQuestion, getGameQuestionAnswer);

export default brainProgression;
