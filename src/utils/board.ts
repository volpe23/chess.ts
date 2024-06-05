import Square , { SquareField } from "./square";
import { COLS } from "./utils";

export default class Board {
    static ROWS = Object.keys(COLS).length;
    static COLS = Object.keys(COLS).length;
    fields: SquareField[][]; 
    private _gameBoard: HTMLDivElement;

    constructor() {
        this.fields = new Array(Board.ROWS).fill('')
            .map((_, row) => new Array(Board.COLS)
            .fill('')
            .map((_, col) => new Square({ col: Object.keys(COLS)[col] as keyof typeof COLS, row: row + 1}, ((row % 2) + col) % 2 === 0 ? 'dark' : 'white')))
        console.log(this.fields.reverse()); 
        this._gameBoard = document.createElement('div');
        this.gameBoard.classList.add('board')
    }

    private create(): void {
        this._gameBoard.innerHTML = '';
        this.fields.forEach((row, rowInd) => {
            const boardRow = document.createElement('div');
            boardRow.classList.add('board_row');
            boardRow.setAttribute('id', `row_${this.fields.length - rowInd}`)
            row.forEach((square) => {
                boardRow.append(square.field);
            })
            this._gameBoard.append(boardRow);
        })
    }

    flip(): void {
        this.fields = this.fields.map((row) => row.reverse()).reverse();
        this.create();
    }

    get gameBoard() {
        this.create();
        return this._gameBoard;

    }
}