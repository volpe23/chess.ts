import Piece from '../pieces/piece';
import { Coordinate, SquareColor, SquareBg } from './utils';

export interface SquareField {
	field: HTMLDivElement;
	coordinate: Coordinate;
	setPiece(piece: Piece): void;
}

export default class Square implements SquareField {
	private _field: HTMLDivElement;
	private _coordinate: Coordinate;
	private _piece: Piece | null;

	constructor(coordinate: Coordinate, bgColor: SquareColor, piece = null) {
		this._piece = piece;
		this._coordinate = coordinate;
		this._field = document.createElement('div');
		this._field.classList.add('square', bgColor);
		this.init();
	}

	private init() {
		if (this._piece !== null) {
			this._field.textContent = this._piece.pieceNameString;
		}
	}

	public setPiece(piece: Piece) {
		this._piece = piece;
        this._field.appendChild(piece.element)
	}

	public get field() {
		return this._field;
	}

	public get coordinateString() {
		return Object.values(this._coordinate).join('');
	}
    public get coordinate() {
        return this._coordinate;
    }
}
