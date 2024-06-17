import Board from "./utils/board";

const app = document.getElementById('app');

export const board = new Board();

app?.append(board.gameBoard)

const flipBtn = document.getElementById('flip');
flipBtn?.addEventListener('click', () => board.flip());

const startBtn = document.getElementById('start');
startBtn?.addEventListener('click', () => board.startNewGame());