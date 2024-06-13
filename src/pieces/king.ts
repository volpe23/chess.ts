import { SquareField } from "../utils/square";
import { Coordinate } from "../utils/utils";
import Piece, { PieceColorType, PieceType} from "./piece";

export default class King extends Piece {

    constructor(board: SquareField[][], color: PieceColorType, coordinate: Coordinate, image: any) {
        super(board, color, 'KING', coordinate, image)
    }
}