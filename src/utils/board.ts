import Square, { SquareField } from './square';
import { COLS, OneToEight, SquareBg } from './utils';
import { WHITE, BLACK } from '../pieces/game_pieces';
import Pawn from '../pieces/pawn';
import { PieceColor } from '../pieces/piece';

export interface BoardInterface {
	fields: SquareField[][];
	gameBoard: HTMLDivElement;
}

export default class Board implements BoardInterface {
	static ROWS = Object.keys(COLS).length - 1;
	static COLS = Object.keys(COLS).length - 1;
	fields: SquareField[][];
	private _gameBoard: HTMLDivElement;

	constructor() {
		this.fields = new Array(Board.ROWS + 1).fill('').map((_, row) =>
			new Array(Board.COLS + 1).fill('').map(
				(_, col) =>
					new Square(
						{
							col: Object.keys(COLS)[col] as keyof typeof COLS,
							row: (row + 1) as OneToEight,
						},
						((row % 2) + col) % 2 === 1
							? SquareBg.WHITE
							: SquareBg.DARK
					)
			)
		);
		console.log(this.fields.reverse());
		this._gameBoard = document.createElement('div');
		this.gameBoard.classList.add('board');
	}

	private create(): void {
		this._gameBoard.innerHTML = '';
		this.fields.forEach((row, rowInd) => {
			const boardRow = document.createElement('div');
			boardRow.classList.add('board_row');
			boardRow.setAttribute('id', `row_${this.fields.length - rowInd}`);
			row.forEach((square) => {
				boardRow.append(square.field);
			});
			this._gameBoard.append(boardRow);
		});
	}

	startNewGame() {
		// create white pieces
        Object.keys(WHITE.pieces).forEach(piece => {
            const pieceType = piece as keyof typeof WHITE.pieces; 
            const pcs = WHITE.pieces[pieceType];
            pcs.col.forEach(col => {
                let classInstance;
                switch (pieceType) {
                    case 'PAWNS':
                        classInstance = new Pawn(this.fields, PieceColor.WHITE, {col, row: WHITE.row + 1}, pcs.image)
                    case 'BISHOPS':
                        classInstance = new Bishop()
                }
            })
        })
	}

	flip(): void {
		this.fields = this.fields.map((row) => row.reverse()).reverse();
		this.create();
	}

	get gameBoard() {
		this.create();
		return this._gameBoard;
	}
}
