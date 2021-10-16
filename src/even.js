import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * 50);
const checkEven = (x) => x % 2 === 0;
export default () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  do {
    const random = getRandomNumber;
    const question = readlineSync.question(`Question: ${random}\n Your answer: `);
    if (checkEven(random) && question === 'yes') {
      console.log('Correct!');
      count += 1;
    } else if (!checkEven(random) && question === 'no') {
      console.log('Correct!');
      count += 1;
    } else {
      break;
    }
  } while (count < 3);
  if (count === 3) {
    console.log(`Congratulations, ${name}`);
  }
};
