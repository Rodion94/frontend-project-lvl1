import readlineSync from 'redline-sync';

const newGame = (gameQuestion, gameQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(`${gameQuestion}`);
  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = gameQuestionAnswer();
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === answer) {
      console.log('Correct');
    } else {
      return console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${name})`);
    }
  }
  return console.log(`Congratulations, ${name}`);
};

export default newGame;
