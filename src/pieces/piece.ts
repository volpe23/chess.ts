import { SquareField } from '../utils/square';
import { Coordinate } from '../utils/utils';

export const Pieces = {
	PAWN : 'PAWN',
	KING : 'KING',
	QUEEN : 'QUEEN',
	ROOK : 'ROOK',
	KNIGHT : 'KNIGHT',
	BISHOP : 'BISHOP',

} as const

export type PieceType = keyof typeof Pieces;

export const PieceColor = {
	WHITE: 'WHITE',
	BLACK: 'BLACK'
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
}

export default class Piece implements PieceInt {
	color: PieceColorType;
	board: SquareField[][];
	element: HTMLDivElement;
	coordinate: Coordinate | null;
	private _hasMoved = false;
	pieceNameString: string;
	type: PieceType;
	image: string;

	constructor(
		board: SquareField[][],
		color: PieceColorType,
		type: PieceType,
        image: any
	) {
		this.board = board;
		this.color = color;
		this.coordinate = null;
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
		this.element.className = 'w-full h-full';
		this.element.setAttribute('id', this.pieceNameString);
		this.element.addEventListener('click', () => {});
        // this.setImage();
        this.element.setAttribute('src', this.image);
	}

	public move(coordinate: Coordinate) {}

	setCoordinate(coordinate: Coordinate) {
		this.coordinate = coordinate;
	}

	get hasMoved(): boolean {
		return this._hasMoved;
	}
}
