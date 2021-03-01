#!/usr/bin/env node
import runTheGame from '../src/index.js';
import { gameText, getGameTask } from '../src/games/progression.js';

runTheGame(gameText, getGameTask);
