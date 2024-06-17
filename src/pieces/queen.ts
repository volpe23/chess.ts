import { SquareField } from '../utils/square';
import { Coordinate } from '../utils/utils';
import Piece, { PieceColorType, PieceType, MoveRuleType } from './piece';

export default class Queen extends Piece {
	private static moveRules: MoveRuleType = {
		direction: 0,
		move: {
			diagonal: 8,
			vertical: 8,
			horizontal: 8,
		},
		take: {
			len: 8,
			vertical: true,
			diagonal: true,
			horizontal: true,
		},
	};

	constructor(
		board: SquareField[][],
		color: PieceColorType,
		square: SquareField,
		image: any
	) {
		super(board, color, 'QUEEN', square, image, Queen.moveRules);
	}
}
