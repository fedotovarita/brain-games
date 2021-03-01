import numberRandomizer from '../numberRandomizer.js';

const gameText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getGameTask = () => {
  const num = numberRandomizer(1, 100);
  const divisors = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }
  const correctAnswer = divisors.length === 2 ? 'yes' : 'no';
  const result = [num, correctAnswer];
  return result;
};

export { gameText, getGameTask };
