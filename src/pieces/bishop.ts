import { SquareField } from "../utils/square";
import { Coordinate } from "../utils/utils";
import Piece, { PieceColorType } from "./piece";

export default class Bishop extends Piece {

    constructor(board: SquareField[][], color: PieceColorType, image: any) {
        super(board, color, 'BISHOP', image)
    }
}