export default class Square {
    _field: HTMLDivElement;    

    constructor() {
        this.init();
    }

    private init() {
        this._field = document.createElement('div');
        this._field.classList.add('');
    }

    get field() {
        return this._field;
    }
}