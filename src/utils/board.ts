import Square, { SquareField } from './square';
import {
	COLS,
	COLS_COORD,
	ColCoordinateType,
	ColNumberCoordinateType,
	SquareBg,
} from './utils';
import { PIECES, PieceObj } from '../pieces/game_pieces';
import Pawn from '../pieces/pawn';
import Piece, { PieceColorType, PieceType } from '../pieces/piece';
import Bishop from '../pieces/bishop';
import Rook from '../pieces/rook';
import King from '../pieces/king';
import Queen from '../pieces/queen';
import Knight from '../pieces/knight';

export interface BoardInterface {
	fields: SquareField[][];
	gameBoard: HTMLDivElement;
	selectedField: SquareField | null;
	selectedPiece: Piece | null;
}

export default class Board implements BoardInterface {
	static ROWS = COLS_COORD.length - 1;
	static COLS = COLS_COORD.length - 1;
	fields: SquareField[][];
	private _gameBoard: HTMLDivElement;
	selectedField: SquareField | null;
	selectedPiece: Piece | null;

	constructor() {
		this.selectedField = null;
		this.selectedPiece = null;
		this.fields = new Array(Board.ROWS + 1).fill('').map((_, row) =>
			new Array(Board.COLS + 1).fill('').map(
				(_, col) =>
					new Square(
						{
							col: COLS_COORD[col],
							row: COLS[COLS_COORD[row]],
						},
						((row % 2) + col) % 2 === 1
							? SquareBg.WHITE
							: SquareBg.DARK,
						this.selectPiece.bind(this)
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
		(Object.keys(PIECES) as PieceColorType[]).forEach((color) => {
			const pieceObj = PIECES[color];
			(Object.keys(pieceObj.pieces) as PieceType[]).forEach((piece) => {
				const pcs = PIECES[color].pieces[piece];
				pcs.col.forEach((col) => {
					let classInstance: Piece | undefined;
					let row = pieceObj.row;
					if (pcs.row !== undefined) {
						row = row + pcs.row;
					}
					const square = this.fields[row][col];
					switch (piece) {
						case 'PAWN':
							classInstance = new Pawn(
								this.fields,
								color,
								square,
								pcs.image
							);
							break;
						case 'BISHOP':
							classInstance = new Bishop(
								this.fields,
								color,
								square,
								pcs.image
							);
							break;
						case 'ROOK':
							classInstance = new Rook(
								this.fields,
								color,
								square,
								pcs.image
							);
							break;
						case 'KING':
							classInstance = new King(
								this.fields,
								color,
								square,
								pcs.image
							);
							break;
						case 'QUEEN':
							classInstance = new Queen(
								this.fields,
								color,
								square,
								pcs.image
							);
							break;
						case 'KNIGHT':
							classInstance = new Knight(
								this.fields,
								color,
								square,
								pcs.image
							);
							break;
					}
					if (classInstance !== undefined) {
						square.setPiece(classInstance);
						this._gameBoard.children[row].children[col].append(
							classInstance?.element
						);
					}
				});
			});
		});
	}

	flip(): void {
		this.fields = this.fields.map((row) => row.reverse()).reverse();
		this.create();
	}

	selectPiece(piece: Piece) {
		if (this.selectedPiece !== null) {
			this.selectedPiece.deselect();
		}
		this.selectedPiece = piece;
	}

	get gameBoard() {
		this.create();
		return this._gameBoard;
	}
}
