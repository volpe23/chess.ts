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

import { COLS, OneToEight } from '../utils/utils';
import Board from '../utils/board';
import { PieceColor, PieceColorType } from './piece';

type PieceObj = {
    [PieceColor.BLACK]: {
        row: number,
        pieces: {
            [K: string]: {
                image: string,
                col: OneToEight[],
                row?: 1 | -1
            }
        }
    },
    [PieceColor.WHITE]: {
        row: number,
        pieces: {
            [K: string]: {
                image: string,
                col: OneToEight[],
                row?: 1 | -1
            }
        }
    }
}

const colCount = Object.values(COLS) as OneToEight[];

export const PIECES: PieceObj = {
	WHITE: {
		row: 0,
		pieces: {
			PAWNS: {
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
	},
    BLACK : {
		row: 7,
		pieces: {
			PAWNS: {
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
			ROOKS: {
				image: blackRookImage,
				col: [COLS.A, COLS.H],
			},
			KNIGHTS: {
				image: blackKnightImage,
				col: [COLS.B, COLS.G],
			},
			BISHOPS: {
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
