#!/usr/bin/env node
import runTheGame from '../src/index.js';
import { getRandomNumber, gameText } from '../src/games/evenOrNot.js';

runTheGame(gameText, getRandomNumber);
