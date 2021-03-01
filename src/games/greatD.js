import { numberRandomizer } from '../numberRandomizer.js';

const gameText = 'Find the greatest common divisor of given numbers.';

const getTask = () => {
  const num1 = numberRandomizer(1, 100);
  const num2 = numberRandomizer(1, 100);
  const numbers = `${num1} ${num2}`;
  let greatestDivisor = 1;
  for (let i = 1; i <= num1; i += 1) {
    if (num1 % i === 0 && num2 % i === 0 && i > greatestDivisor) {
      greatestDivisor = i;
    }
  }
  const resultOfGame = [numbers, String(greatestDivisor)];
  return resultOfGame;
};
export { gameText, getTask };
