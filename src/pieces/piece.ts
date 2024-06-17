import { SquareField } from '../utils/square';
import { Coordinate } from '../utils/utils';

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

	constructor(
		board: SquareField[][],
		color: PieceColorType,
		type: PieceType,
		square: SquareField,
		image: any,
		moveRules: MoveRuleType
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

		if (this.type !== 'PAWN') {
			this.possibleMoves = this.calculatePossibleMoves();
		}

		this.init();
	}

	private setImage(): void {
		this.image = `./src/svg/${this.color}/${this.type}`;
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

	public move(coordinate: Coordinate) {}

	select() {
		this.field?.selectPiece(this);
		this.element.classList.add('selected');
		this.possibleMoves.forEach(square => {
			square.field.textContent = '*';
		})
	}

	deselect() {
		this.element.classList.remove('selected');
		this.possibleMoves.forEach(square => {
			square.field.textContent = '';
		})
	}

	setCoordinate(field: SquareField) {
		this.field = field;
		this.coordinate = field.coordinate;
	}

	get hasMoved(): boolean {
		return this._hasMoved;
	}

	calculatePossibleMoves(): SquareField[] {
		const possibleMoves: SquareField[] = []
		for (const moveDir in this.moveRules.move) {
			console.log(moveDir)

		}
		return possibleMoves;
	}
}
