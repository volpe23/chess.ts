import Board from '../utils/board';
import { SquareField } from '../utils/square';
import { Coordinate } from '../utils/utils';
import Piece, { PieceColorType, PieceType, MoveRuleType } from './piece';

export default class King extends Piece {
	private static moveRules: MoveRuleType = {
		direction: 0,
		move: {
			diagonal: 1,
			vertical: 1,
			horizontal: 1,
		},
		take: {
			len: 1,
			vertical: true,
			diagonal: true,
			horizontal: true,
		},
	};
	constructor(
		board: SquareField[][],
		color: PieceColorType,
		square: SquareField,
		image: any,
		boardInstance: Board
	) {
		super(board, color, 'KING', square, image, King.moveRules, boardInstance);
	}
}
