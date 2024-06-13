export const objKeys = <Obj extends object>(obj: Obj): (keyof Obj)[] => {
	return Object.keys(obj) as (keyof Obj)[]
}

export const COLS = {
	A: 0,
	B: 1,
	C: 2,
	D: 3,
	E: 4,
	F: 5,
	G: 6,
	H: 7,
} as const;

export const COLS_COORD = objKeys(COLS);


export type ColCoordinateType = keyof typeof COLS;

export type ColNumberCoordinateType = (typeof COLS)[ColCoordinateType];

export type Coordinate = {
	col: ColCoordinateType;
	row: ColNumberCoordinateType;
};

type Enumerate<
	N extends number,
	Acc extends number[] = []
> = Acc['length'] extends N
	? Acc[number]
	: Enumerate<N, [...Acc, Acc['length']]>;

export type IntRange<F extends number, T extends number> = Exclude<
	Enumerate<T>,
	Enumerate<F>
>;

type Range<N extends number, A extends number[] = []> = A['length'] extends N
	? A[number]
	: Range<N, [...A, A['length']]>;

export type OneToEight = Range<9, [0]>;

export const SquareBg = {
	WHITE: 'WHITE',
	DARK: 'DARK',
} as const;

export type SquareColor = keyof typeof SquareBg;
