import whitePawnImage from '../svg/white/pawn.svg';
import whiteKingImage from '../svg/white/king.svg';
import whiteQueenImage from '../svg/white/queen.svg';
import whiteKnightImage from '../svg/white/knight.svg';
import whiteBishopImage from '../svg/white/bishop.svg';
import whiteRookImage from '../svg/white/rook.svg';
import blackPawnImage from '../svg/black/pawn.svg';
import blackKingImage from '../svg/black/king.svg';
import blackQueenImage from '../svg/black/queen.svg';
import blackKnightImage from '../svg/black/knight.svg';
import blackBishopImage from '../svg/black/bishop.svg';
import blackRookImage from '../svg/black/rook.svg';

import { COLS, ColNumberCoordinateType, OneToEight } from '../utils/utils';
import { PieceColorType, PieceType } from './piece';

export type PieceObj = {
    [P in PieceColorType]: {
        row: 0 | 7,
        pieces: SinglePieceObj
    }
}

export type PieceInfoType = {
	image: string,
	col: ColNumberCoordinateType[],
	row?: 1 | -1
};

export type SinglePieceObj = Record<PieceType, PieceInfoType>

const colCount: ColNumberCoordinateType[] = Object.values(COLS);

export const PIECES: PieceObj = {
	WHITE: {
		row: 0,
		pieces: {
			PAWN: {
				image: whitePawnImage,
				col: colCount,
				row: 1,
			},
			KING: {
				image: whiteKingImage,
				col: [COLS.E],
			},
			QUEEN: {
				image: whiteQueenImage,
				col: [COLS.D],
			},
			ROOK: {
				image: whiteRookImage,
				col: [COLS.A, COLS.H],
			},
			KNIGHT: {
				image: whiteKnightImage,
				col: [COLS.B, COLS.G],
			},
			BISHOP: {
				image: whiteBishopImage,
				col: [COLS.C, COLS.F],
			},
		},
	},
    BLACK : {
		row: 7,
		pieces: {
			PAWN: {
				image: blackPawnImage,
				col: colCount,
				row: - 1,
			},
			KING: {
				image: blackKingImage,
				col: [COLS.E],
			},
			QUEEN: {
				image: blackQueenImage,
				col: [COLS.D],
			},
			ROOK: {
				image: blackRookImage,
				col: [COLS.A, COLS.H],
			},
			KNIGHT: {
				image: blackKnightImage,
				col: [COLS.B, COLS.G],
			},
			BISHOP: {
				image: blackBishopImage,
				col: [COLS.C, COLS.F],
			},
		},
	},
} as const;

export const WHITE = {
	row: 0,
	pieces: {
		PAWNS: {
			image: whitePawnImage,
			col: Object.values(COLS),
			row: 1,
		},
		KING: {
			image: whiteKingImage,
			col: [COLS.E],
		},
		QUEEN: {
			image: whiteQueenImage,
			col: [COLS.D],
		},
		ROOKS: {
			image: whiteRookImage,
			col: [COLS.A, COLS.H],
		},
		KNIGHTS: {
			image: whiteKnightImage,
			col: [COLS.B, COLS.G],
		},
		BISHOPS: {
			image: whiteBishopImage,
			col: [COLS.C, COLS.F],
		},
	},
} as const;

export const BLACK = {
	PAWNS: {
		row: 6,
	},
};
