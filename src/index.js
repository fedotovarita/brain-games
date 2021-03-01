import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const getTheAnswer = () => readlineSync.question('Your answer: ');

const runTheGame = (text, gameQuestion) => {
  const name = getUserName();
  console.log(text);
  const iterations = 3;
  for (let i = 0; i < iterations;) {
    const question = gameQuestion();
    console.log(`Question: ${question[0]}`);
    const userAnswer = getTheAnswer();
    if (question[1] === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${question[1]}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === iterations) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
export default runTheGame;
