const COLS = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7
} as const;

export default class Board {
    static ROWS = 8;
    static COLS = 8;

    constructor() {
        this.fields = new Array(Board.ROWS).fill(new Array(Board.COLS).fill('').map((_, ind) => ))
    
    }
}