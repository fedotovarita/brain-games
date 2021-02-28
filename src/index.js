import { getUserName } from './cli.js';
import readlineSync from 'readline-sync';

const getTheAnswer = () => readlineSync.question('Your answer: ');

const runTheGame = (text, gameQuestion) => {
  const name = getUserName();
  console.log(text);
  for (let i = 0; i < 3;) {
    const question = gameQuestion();
    console.log(`Question: ${question[0]}`);
    const userAnswer = getTheAnswer();
    if (question[1] === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${question[1]}. Let's try again, ${name}!`);
      i = 0;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
export { runTheGame };
