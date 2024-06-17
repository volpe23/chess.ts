import Board from '../utils/board';
import { SquareField } from '../utils/square';
import { COLS } from '../utils/utils';
import Piece, { PieceColorType, MoveRuleType } from './piece';

export default class Pawn extends Piece {
	private static moveRules: MoveRuleType = {
		direction: 0,
		move: {
			diagonal: 0,
			vertical: 2,
			horizontal: 0,
		},
		take: {
			len: 1,
			vertical: false,
			diagonal: true,
			horizontal: false,
		},
	};

	constructor(
		board: SquareField[][],
		color: PieceColorType,
		square: SquareField,
		image: any,
		boardInstance: Board
	) {
		super(board, color, 'PAWN', square, image, { ...Pawn.moveRules }, boardInstance);
		if (this.color === 'WHITE') this.moveRules.direction = 1
		else {
			this.moveRules.direction = -1;
		}
	}

	calculatePossibleMoves(): void {
		const possibleMoves: SquareField[] = [];
		for (
			let row = this.coordinate.row + this.moveRules.direction;
            row !== this.coordinate.row + (this.moveRules.move.vertical * this.moveRules.direction) + this.moveRules.direction;
			row += this.moveRules.direction
		) {
			const square = this.board[row][COLS[this.coordinate.col]];
			if (square.hasPiece()) {
				break;
			} else {
				possibleMoves.push(square);
			}
		}
        // Take moves
        for (let i = -1; i <= 1; i += 2) {
            const col = COLS[this.coordinate.col] + i;
            const square = this.board[this.coordinate.row + this.moveRules.direction][col];
            if (col > 0 && col < 8 && square.hasPiece() && square.pieceColor() !== this.color) {
                possibleMoves.push(square)
            }
        }
        this.possibleMoves = possibleMoves;
	}
}
