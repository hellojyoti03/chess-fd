import {
	getRookMoves,
	getKingMoves,
	getKnightMoves,
	getQueenMoves,
	getPawnMoves,
	getBishopMoves,
} from "./getMoves";
let arbitar = {
	getRegularMove: function ({ position, rank, file, piece }) {
		if (piece.endsWith("n")) return getKnightMoves({ position, rank, file });
		if (piece.endsWith("b")) return getBishopMoves({ position, piece, rank, file });
		if (piece.endsWith("r")) return getRookMoves({ position, piece, rank, file });
		if (piece.endsWith("q")) return getQueenMoves({ position, piece, rank, file });
		if (piece.endsWith("k")) return getKingMoves({ position, piece, rank, file });
		if (piece.endsWith("p")) return getPawnMoves({ position, piece, rank, file });
	},
};

export { arbitar };
