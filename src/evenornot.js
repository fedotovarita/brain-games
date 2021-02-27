import readlineSync from 'readline-sync';

const numberRandomizer = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const isTheAnswerRight = (answer, number, name) => {
  let result;
  if (number % 2 === 0 && answer === 'yes') {
    result = 'Correct!';
  } else if (number % 2 === 1 && answer === 'no') {
    result = 'Correct!';
  } else if (answer === 'yes' && number % 2 === 1) {
    result = `'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`;
  } else if (answer === 'no' && number % 2 === 0) {
    result = `'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`;
  } else {
    result = `${answer} is wrong answer ;(. Let's try again, ${name}!`;
  }
  return result;
};
const getRandomNumber = () => numberRandomizer(1, 100);
const getTheAnswer = () => readlineSync.question('Your answer: ');

export { getTheAnswer, getRandomNumber, isTheAnswerRight };
