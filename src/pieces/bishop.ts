import { SquareField } from '../utils/square';
import { Coordinate } from '../utils/utils';
import Piece, { PieceColorType, MoveRuleType } from './piece';

export default class Bishop extends Piece {
	private static moveRules: MoveRuleType = {
		direction: 0,
		move: {
			diagonal: 8,
			vertical: 0,
			horizontal: 0,
		},
		take: {
			len: 8,
			vertical: false,
			diagonal: true,
			horizontal: false,
		},
	};

	constructor(
		board: SquareField[][],
		color: PieceColorType,
		square: SquareField,
		image: any
	) {
		super(board, color, 'BISHOP', square, image, Bishop.moveRules);
	}
}
