import Square, { SquareField } from './square';
import { COLS, OneToEight, SquareBg } from './utils';
import { PIECES, WHITE, BLACK } from '../pieces/game_pieces';
import Pawn from '../pieces/pawn';
import Piece, { PieceColor } from '../pieces/piece';
import Bishop from '../pieces/bishop';
import Rook from '../pieces/rook';
import King from '../pieces/king';
import Queen from '../pieces/queen';
import Knight from '../pieces/knight';

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
		Object.keys(PIECES).forEach((color) => {
            const pieceColor = color as keyof typeof PIECES;
			Object.keys(PIECES[pieceColor].pieces).forEach((piece) => {
				const pieceType = piece as keyof typeof PIECES.BLACK.pieces;
				const pcs = PIECES[pieceColor].pieces[pieceType];
				console.log(pcs);
				pcs.col.forEach((col) => {
					let classInstance: Piece | undefined;
					const colCoordinate = Object.keys(COLS)[
						col
					] as keyof typeof COLS;
					let row = PIECES[pieceColor].row as OneToEight;
					switch (pieceType) {
						case 'PAWNS':
                            if (pcs.row === undefined) {
                                break;
                            }
                            row = row + pcs.row as OneToEight
							classInstance = new Pawn(
								this.fields,
								pieceColor,
								{ col: colCoordinate, row: row },
								pcs.image
							);
							break;
						case 'BISHOPS':
							classInstance = new Bishop(
								this.fields,
								pieceColor,
								{ col: colCoordinate, row },
								pcs.image
							);
							break;
						case 'ROOKS':
							classInstance = new Rook(
								this.fields,
								pieceColor,
								{ col: colCoordinate, row },
								pcs.image
							);
							break;
						case 'KING':
							classInstance = new King(
								this.fields,
								pieceColor,
								{ col: colCoordinate, row },
								pcs.image
							);
							break;
						case 'QUEEN':
							classInstance = new Queen(
								this.fields,
								pieceColor,
								{ col: colCoordinate, row },
								pcs.image
							);
							break;
						case 'KNIGHTS':
							classInstance = new Knight(
								this.fields,
								pieceColor,
								{ col: colCoordinate, row },
								pcs.image
							);
							break;
					}
                    console.log(row)
					if (classInstance !== undefined) {
                        console.log(classInstance)
						this.fields[classInstance.coordinate.row][col].setPiece(
							classInstance
						);
						this._gameBoard.children[
							classInstance.coordinate.row
						].children[col].append(classInstance?.element);
					}
				});
			});
		});
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
