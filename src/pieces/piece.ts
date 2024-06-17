import Board from '../utils/board';
import { SquareField } from '../utils/square';
import { COLS_COORD, Coordinate, COLS, objKeys } from '../utils/utils';

export const Pieces = {
	PAWN: 'PAWN',
	KING: 'KING',
	QUEEN: 'QUEEN',
	ROOK: 'ROOK',
	KNIGHT: 'KNIGHT',
	BISHOP: 'BISHOP',
} as const;

export type MoveRuleType = {
	direction: 1 | -1 | 0;
	move: {
		vertical: number;
		horizontal: number;
		diagonal: number;
	};
	take: {
		len: number;
		vertical: boolean;
		horizontal: boolean;
		diagonal: boolean;
	};
};

export type PieceType = keyof typeof Pieces;

export const PieceColor = {
	WHITE: 'WHITE',
	BLACK: 'BLACK',
} as const;

export type PieceColorType = keyof typeof PieceColor;

interface PieceInt {
	board: SquareField[][];
	readonly color: PieceColorType;
	element: HTMLDivElement;
	coordinate: Coordinate | null;
	hasMoved: boolean;
	pieceNameString: string;
	type: PieceType;
	readonly image: string;
	moveRules: MoveRuleType;
	possibleMoves: SquareField[];
	boardInstance: Board;
	calculatePossibleMoves(): void;
}

export default class Piece implements PieceInt {
	color: PieceColorType;
	board: SquareField[][];
	element: HTMLDivElement;
	coordinate: Coordinate;
	private field: SquareField;
	private _hasMoved = false;
	pieceNameString: string;
	type: PieceType;
	image: string;
	moveRules: MoveRuleType;
	possibleMoves!: SquareField[];
	boardInstance: Board;

	constructor(
		board: SquareField[][],
		color: PieceColorType,
		type: PieceType,
		square: SquareField,
		image: any,
		moveRules: MoveRuleType,
		boardInstance: Board
	) {
		this.board = board;
		this.color = color;
		this.coordinate = square.coordinate;
		this.field = square;
		this.type = type;
		this.image = image;
		this.moveRules = moveRules;
		this.pieceNameString = `${this.color}_${type}`;
		this.element = document.createElement('img');
		this.boardInstance = boardInstance;
		this.init();

		if (this.type !== 'PAWN') {
			// this.possibleMoves = this.calculatePossibleMoves();
		}

	}

	private init() {
		this.element.className = 'w-full h-full';
		this.element.setAttribute('id', this.pieceNameString);
		this.element.addEventListener('click', () => {
			this.select();
		});
		// this.setImage();
		this.element.setAttribute('src', this.image);
	}

	public move(piece: Piece, square: SquareField, listenerFunc: () => void) {
		square.field.textContent = '';
		square.field.append(this.element);
		square.setPiece(piece)
		this.deselect(listenerFunc);
		// this.boardInstance.calculateMoves();
	}

	select() {
		this.field?.selectPiece(this);
		this.element.classList.add('selected');
		this.possibleMoves.forEach((square) => {
			square.field.textContent = '*';
		const listenerFunc = () => {
			this.move(this, square, listenerFunc);
		}
			square.field.addEventListener('click', listenerFunc.bind(this), { once: true })
		});
	}

	deselect(listenerFunc: () => void) {
		this.element.classList.remove('selected');
		this.possibleMoves.forEach((square) => {
			if (!square.hasPiece()) square.field.textContent = '';
			square.field.removeEventListener('click', listenerFunc)
		});
	}

	setCoordinate(field: SquareField) {
		this.field = field;
		this.coordinate = field.coordinate;
	}

	get hasMoved(): boolean {
		return this._hasMoved;
	}

	calculatePossibleMoves(): void {
		const possibleMoves: SquareField[] = [];
		for (const moveDir of objKeys(this.moveRules['move'])) {
			const row = this.coordinate.row;
			const colNum = COLS[this.coordinate.col];
			if (this.moveRules['move'][moveDir] !== 0) {
				switch (moveDir as keyof MoveRuleType['move']) {
					case 'horizontal':
						for (let x = colNum - 1; x >= 0 && Math.abs(x - colNum) < this.moveRules.move.horizontal; x--) {
							const square = this.board[row][x];
							if (!square.hasPiece()) {
								possibleMoves.push(square);
							} else if (square.pieceColor() !== this.color) {
								possibleMoves.push(square);
								break;
							} else break;
						}

						for (let x = colNum + 1; x < 8 && Math.abs(x - colNum) < this.moveRules.move.horizontal; x++) {
							const square = this.board[row][x]
							if (!square.hasPiece()) {
								possibleMoves.push(square);
							} else if (square.pieceColor() !== this.color) {
								possibleMoves.push(square);
								break;
							} else break;
						}
						break;
					case 'vertical':
						for (let y = row - 1; y >= 0 && Math.abs(y - row) < this.moveRules.move[moveDir]; y--) {
							const square = this.board[y][colNum]
							if (!square.hasPiece()) {
								possibleMoves.push(square);
							} else if (square.pieceColor() !== this.color) {
								possibleMoves.push(square);
								break;
							} else break;
						}
						for (let y = row + 1; y < 8 && Math.abs(y - row) < this.moveRules.move[moveDir]; y++) {
							const square = this.board[y][colNum]
							if (!square.hasPiece()) {
								possibleMoves.push(square);
							} else if (square.pieceColor() !== this.color) {
								possibleMoves.push(square);
								break;
							} else break;
						}
						break;
					case 'diagonal':
						break;
				}
			}
		}
		console.log(this.color, this.type, 'possible moves:', possibleMoves);
		this.possibleMoves = possibleMoves;
	}
}
