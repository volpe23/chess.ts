
import { SquareField } from "../utils/square";
import {  } from "../utils/utils";
import Piece, { PieceColorType, PieceType} from "./piece";

export default class Knight extends Piece {

    constructor(board: SquareField[][], color: PieceColorType, square: SquareField, image: any) {
        super(board, color, 'KNIGHT', square, image)
    }
}