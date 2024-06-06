import { BoardInterface } from '../utils/board';
import { Coordinate } from '../utils/utils';


export enum Pieces {
    PAWN = 'pawn',
    KING = 'king',
    QUEEN = 'queen',
    ROOK = 'rook',
    KNIGHT = 'knight',
    BISHOP = 'bishop'
}

export type PieceType = `${Pieces}`;

export enum PieceColor {
	WHITE = 'white',
	BLACK = 'black',
}

export type PieceColorType = `${PieceColor}`;

interface PieceInt {
	board: BoardInterface;
	readonly color: PieceColorType;
	element: HTMLDivElement;
    coordinate: Coordinate
    hasMoved: boolean
}

export default class Piece implements PieceInt {
	color: PieceColorType;
	board: BoardInterface;
	element: HTMLDivElement;
    coordinate: Coordinate;
    private _hasMoved = false;


	constructor(board: BoardInterface, color: PieceColorType, type: PieceType, coordinate: Coordinate, image: any) {
		this.board = board;
		this.color = color;
        this.coordinate = coordinate;

        this.element = document.createElement('div');
        this.init(type);
	}

    private init(type: PieceType) {
        this.element.setAttribute('id', `${this.color}_${type}`);
        this.element.addEventListener('click', () => {})
    }

    public move(coordinate: Coordinate) {

    }

    get hasMoved(): boolean {
        return this._hasMoved;
    }
}
