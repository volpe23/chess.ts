import { SquareField } from "../utils/square";
import { Coordinate } from "../utils/utils";
import Piece, { PieceColorType, MoveRuleType} from "./piece";

export default class Pawn extends Piece {
    
    private static moveRules: MoveRuleType = {
        move: {
            direction: 1,
            diagonal: 0,
            vertical: 2,
            horizontal: 0
        },
        take: {
            len: 1,
            vertical: false,
            diagonal: true,
            horizontal: false
        }
    }

    constructor(board: SquareField[][], color: PieceColorType, square: SquareField, image: any) {
        super(board, color, 'PAWN', square, image, Pawn.moveRules)
        color === 'WHITE' ? this.moveRules.move.direction = 1 : this.moveRules.move.direction = -1
    }

    calculatePossibleMoves (): SquareField[] {
        const possibleMoves: SquareField[] = [] as SquareField[];
        for (let row = this.coordinate.row; row < row + Pawn.moveRules.move.vertical; row = row + Pawn.moveRules.move.direction) {

        }
        return possibleMoves;
    }
}