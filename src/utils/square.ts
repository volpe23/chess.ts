import { Coordinate, SquareColor, SquareBg } from "./utils";


export interface SquareField {
    field: HTMLDivElement
    coordinate: string
}

export default class Square implements SquareField {

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