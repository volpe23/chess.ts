import { SquareField } from '../utils/square';
import { Coordinate } from '../utils/utils';
import Piece, { PieceColorType, PieceType, MoveRuleType } from './piece';

export default class King extends Piece {
	private static moveRules: MoveRuleType = {
		direction: 0,
		move: {
			diagonal: 0,
			vertical: 8,
			horizontal: 8,
		},
		take: {
			len: 8,
			vertical: true,
			diagonal: false,
			horizontal: true,
		},
	};
	constructor(
		board: SquareField[][],
		color: PieceColorType,
		square: SquareField,
		image: any
	) {
		super(board, color, 'KING', square, image, King.moveRules);
	}
}
