import { BoardInterface } from "../utils/board";
import { Coordinate } from "../utils/utils";
import Piece, { PieceColorType, PieceType} from "./piece";

export default class Pawn extends Piece {
    private moveRules = {
        direction: 0,
        distance: 2
    }

    constructor(board: BoardInterface, color: PieceColorType, type: PieceType, coordinate: Coordinate, image: any) {
        super(board, color, type, coordinate, image, )
        color === 'white' ? this.moveRules.direction = 1 : this.moveRules.direction = -1
    }
}