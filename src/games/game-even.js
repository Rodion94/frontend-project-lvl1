import readlineSync from 'readline-sync';

function getRandomNumber() {
  return Math.floor(Math.random() * 50);
}
const checkEven = (x) => x % 2 === 0;
const even = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  do {
    const random = getRandomNumber();
    const question = readlineSync.question(`Question: ${random}\n Your answer: `);
    if (checkEven(random) && question.toLowerCase() === 'yes') {
      console.log('Correct!');
      count += 1;
    } else if (!checkEven(random) && question.toLowerCase() === 'no') {
      console.log('Correct!');
      count += 1;
    } else {
      console.log("'yes' is wrong answer ;( Correct answer was 'no').");
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  } while (count < 3);
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default even;
