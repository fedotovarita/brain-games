import { numberRandomizer } from '../numberRandomizer.js';

const gameText = 'What number is missing in the progression?';
const getGameTask = () => {
  const num1 = numberRandomizer(1, 15);
  const num2 = numberRandomizer(1, 5);
  const progressionLength = 10;
  let progression = [];
  for (let i = num1; i < num1 + (num2 * progressionLength); i += num2) {
    progression.push(i);
  }
  const unknownNum = numberRandomizer(1, 9);
  const rightAnswer = progression[unknownNum];
  progression[unknownNum] = '..';
  let progressionToString = progression.join(' ');
  const result = [progressionToString, String(rightAnswer)];
  return result;
};
export { gameText, getGameTask };
