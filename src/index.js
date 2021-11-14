import readlineSync from 'readline-sync';

const wrightAnswers = 3;
const newGame = (gameQuestion, getGameQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameQuestion);
  for (let i = 0; i < wrightAnswers; i += 1) {
    const [question, answer] = getGameQuestionAnswer();
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === answer) {
      console.log('Correct');
    } else {
      console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default newGame;
