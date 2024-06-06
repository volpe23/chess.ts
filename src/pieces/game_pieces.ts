import whitePawnImage from '../svg/white/pawn.svg';
import whiteKingImage from '../svg/white/king.svg';
import whiteQueenImage from '../svg/white/queen.svg';
import whiteKnightImage from '../svg/white/knight.svg';
import whiteBishopImage from '../svg/white/bishop.svg';
import whiteRookImage from '../svg/white/rook.svg';

import { COLS } from '../utils/utils';

export const WHITE = {
	row: 0,
	pieces: {
		PAWNS: {
			image: whitePawnImage,
            col: Object.values(COLS),
            row: 1
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
            col: [COLS.B, COLS.G]
        },
        BISHOPS: {
            image: whiteBishopImage,
            col: [COLS.C, COLS.F]
        }
	},
} as const;

export const BLACK = {
	PAWNS: {
		row: 6,
	},
};
