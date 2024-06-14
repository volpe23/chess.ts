import { SquareField } from "../utils/square";
import { Coordinate } from "../utils/utils";
import Piece, { PieceColorType, PieceType} from "./piece";

export default class Queen extends Piece {

    constructor(board: SquareField[][], color: PieceColorType, image: any) {
        super(board, color, 'QUEEN', image)
    }
}