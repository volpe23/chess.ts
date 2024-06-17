import { SquareField } from '../utils/square';
import {} from '../utils/utils';
import Piece, { PieceColorType, PieceType, MoveRuleType } from './piece';

export default class Knight extends Piece {
	private static moveRules: MoveRuleType = {
		direction: 0,
		move: {
			diagonal: 0,
			vertical: 0,
			horizontal: 0,
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
		super(board, color, 'KNIGHT', square, image, Knight.moveRules);
	}
}
