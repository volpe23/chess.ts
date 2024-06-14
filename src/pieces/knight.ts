
import { SquareField } from "../utils/square";
import {  } from "../utils/utils";
import Piece, { PieceColorType, PieceType} from "./piece";

export default class Knight extends Piece {

    constructor(board: SquareField[][], color: PieceColorType, image: any) {
        super(board, color, 'KNIGHT', image)
    }
}