import Piece, { PieceColorType } from '../pieces/piece';
import { Coordinate, SquareColor, SquareBg } from './utils';

export interface SquareField {
	field: HTMLDivElement;
	coordinate: Coordinate;
	setPiece(piece: Piece): void;
	selectPiece: (piece: Piece) => {};
	hasPiece(): boolean;
	pieceColor(): PieceColorType | undefined;
	calculateForPiece(): void;
}

export default class Square implements SquareField {
	private _field: HTMLDivElement;
	private _coordinate: Coordinate;
	private _piece: Piece | null;
	selectPiece: (piece: Piece) => {};

	constructor(
		coordinate: Coordinate,
		bgColor: SquareColor,
		selectPiece: any,
		piece = null
	) {
		this._piece = piece;
		coordinate.row;
		this._coordinate = coordinate;
		this._field = document.createElement('div');
		this._field.classList.add('square', bgColor);
		this.selectPiece = selectPiece;
		this.init();
	}

	private init() {
		if (this._piece === null) {
			// this._field.textContent = this.coordinateString;
		}
	}

	public setPiece(piece: Piece) {
		this._piece = piece;
		this._field.appendChild(piece.element);
	}

	public get field() {
		return this._field;
	}

	public get coordinateString() {
		const vals = Object.values(this._coordinate) as [
			Coordinate['col'],
			Coordinate['row']
		];
		vals[1]++;
		return vals.join('');
	}
	public get coordinate() {
		return this._coordinate;
	}

	public hasPiece() {
		return this?._piece !== null;
	}

	public pieceColor() {
		if (this._piece !== null) return this._piece?.color;
		return undefined;
	}

	public calculateForPiece(): void {
		this._piece?.calculatePossibleMoves();
	}
}
