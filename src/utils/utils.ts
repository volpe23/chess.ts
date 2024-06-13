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

export type Coordinate = {
    col: keyof typeof COLS
    row: OneToEight
}

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

export enum SquareBg {
	WHITE = 'WHITE',
	DARK = 'DARK',
}

export type SquareColor = `${SquareBg}`;
