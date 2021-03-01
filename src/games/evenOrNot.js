import numberRandomizer from '../numberRandomizer.js';

const getRandomNumber = () => {
  const num = numberRandomizer(1, 100);
  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
  const paramsOfQuestion = [num, String(correctAnswer)];
  return paramsOfQuestion;
};

const gameText = 'Answer "yes" if the number is even, otherwise answer "no".';

export { getRandomNumber, gameText };
