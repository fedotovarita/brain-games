import numberRandomizer from '../numberRandomizer.js';

const gameText = 'What is the result of the expression?';
const getTheCalculation = () => {
  const num1 = numberRandomizer(1, 10);
  const num2 = numberRandomizer(1, 10);
  const actions = ['+', '-', '*'];
  const action = actions[Math.floor(Math.random() * actions.length)];
  const expression = `${num1} ${action} ${num2}`;
  // eslint-disable-next-line no-eval
  const resultOfExpression = eval(expression);
  const resultOfTheGame = [expression, String(resultOfExpression)];
  return resultOfTheGame;
};

export { gameText, getTheCalculation };
