import newGame from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const getGameQuestionAnswer = () => {
  const maxNumForRandomNumber = 100;
  const randomNumber = Math.floor(Math.random() * maxNumForRandomNumber);
  const question = `${randomNumber}`;
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return [question, answer];
};
const brainPrime = () => newGame(gameQuestion, getGameQuestionAnswer);

export default brainPrime;
