import { COLS, IntRange, OneToEight, SquareColor } from "./utils";

type Coordinate = {
    col: keyof typeof COLS
    row: OneToEight
}

export default class Square {

    private _field: HTMLDivElement;
    private _coordinate: Coordinate;

    constructor(coordinate: Coordinate, bgColor: SquareColor) {
        this._coordinate = coordinate;
        this._field = document.createElement('div');
        this._field.classList.add('square', bgColor);
        this.init();
    }

    private init() {
        this._field.textContent = this.coordinate;
    }

    public get field() {
        return this._field;
    }

    public get coordinate() {
        return Object.values(this._coordinate).join('');
    }

}