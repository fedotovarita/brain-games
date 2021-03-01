#!/usr/bin/env node
import runTheGame from '../src/index.js';
import { gameText, getTask } from '../src/games/greatD.js';

runTheGame(gameText, getTask);
