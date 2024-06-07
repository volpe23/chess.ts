import { SquareField } from '../utils/square';
import { Coordinate } from '../utils/utils';

export enum Pieces {
	PAWN = 'pawn',
	KING = 'king',
	QUEEN = 'queen',
	ROOK = 'rook',
	KNIGHT = 'knight',
	BISHOP = 'bishop',
}

export type PieceType = `${Pieces}`;

export enum PieceColor {
	WHITE = 'WHITE',
	BLACK = 'BLACK',
}

export type PieceColorType = `${PieceColor}`;

interface PieceInt {
	board: SquareField[][];
	readonly color: PieceColorType;
	element: HTMLDivElement;
	coordinate: Coordinate;
	hasMoved: boolean;
	pieceNameString: string;
	type: PieceType;
	readonly image: string;
}

export default class Piece implements PieceInt {
	color: PieceColorType;
	board: SquareField[][];
	element: HTMLDivElement;
	coordinate: Coordinate;
	private _hasMoved = false;
	pieceNameString: string;
	type: PieceType;
	image: string;

	constructor(
		board: SquareField[][],
		color: PieceColorType,
		type: PieceType,
        coordinate: Coordinate,
        image: any
	) {
		this.board = board;
		this.color = color;
		this.coordinate = coordinate;
		this.type = type;
        this.image = image
		this.pieceNameString = `${this.color}_${type}`;
		this.element = document.createElement('img');
		this.init();
	}

	private setImage(): void {
		this.image = `./src/svg/${this.color}/${this.type}`;
	}

	private init() {
		this.element.setAttribute('id', this.pieceNameString);
		this.element.addEventListener('click', () => {});
        // this.setImage();
        this.element.setAttribute('src', this.image);
	}

	public move(coordinate: Coordinate) {}

	get hasMoved(): boolean {
		return this._hasMoved;
	}
}
