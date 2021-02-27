#!/usr/bin/env node
import { getUserName } from '../src/cli.js';
import { getTheAnswer, getRandomNumber, isTheAnswerRight } from '../src/evenornot.js';

console.log('Welcome to the Brain Games!');

const userName = getUserName();

console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3;) {
  let randomNumber = getRandomNumber();
  console.log('Question  ' + randomNumber);
  let userAnswer = getTheAnswer();
  let rightNumberCheck = isTheAnswerRight(userAnswer, randomNumber, userName);
  console.log(rightNumberCheck);
  if (rightNumberCheck === 'Correct!') {
    i += 1;
  }
  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
