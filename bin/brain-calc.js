#!/usr/bin/env node
import { runTheGame } from '../src/index.js';
import { gameText, getTheCalculation } from '../src/games/calculator.js';

runTheGame(gameText, getTheCalculation);
