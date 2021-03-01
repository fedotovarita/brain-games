#!/usr/bin/env node
import { runTheGame } from '../src/index.js';
import { gameText, getGameTask } from '../src/games/primeOrNot.js';

runTheGame(gameText, getGameTask);
