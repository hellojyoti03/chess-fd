import { actionTypes, initGame } from "./constant";
let makeNewMove = ({ newPosition }) => {
	return {
		type: actionTypes.NEW_MOVE,
		payload: { newPosition },
	};
};

let makeNewClickMove = ({ pawn }) => {
	return {
		type: actionTypes.NEW_MOVE_CLICK_PAWN,
		payload: {
			pawn,
		},
	};
};
let makeCandidateMoves = ({ candicateMove }) => {
	return {
		type: actionTypes.CANDIDATE_MOVE,
		payload: { candicateMove },
	};
};
let clearCandidates = () => {
	return {
		type: actionTypes.CLEAR_CANDIDATE_MOVES,
		payload: [],
	};
};

let clearPawn = () => {
	return {
		type: actionTypes.CLEAR_PAWN,
		payload: "",
	};
};

let openPromotionBox = ({ rank, file, x, y }) => {
	return {
		type: actionTypes.OPEN_PROMOTION_BOX,
		payload: { rank, file, x, y },
	};
};

let closePromotionBox = () => {
	return {
		type: actionTypes.CLOSE_PROMOTION_BOX,
		payload: {},
	};
};

let updateCastlingMove = (direction) => {
	return {
		type: actionTypes.CHECK_CASTEL,
		payload: direction,
	};
};

let dectactStalemet = () => {
	return {
		type: actionTypes.DECTACT_STALEMET,
	};
};

let dectactInSufficiantMatarial = () => {
	return {
		type: actionTypes.DECTACT_INSUFFICIANT_MATARIAL,
	};
};

let dectactCheckmate = (winner) => {
	return {
		type: actionTypes.WIN,
		payload: winner,
	};
};

let newGameStart = () => {
	return {
		type: actionTypes.NEW_GAME,
		payload: initGame,
	};
};
export {
	makeNewMove,
	makeCandidateMoves,
	clearCandidates,
	makeNewClickMove,
	clearPawn,
	openPromotionBox,
	closePromotionBox,
	updateCastlingMove,
	dectactStalemet,
	dectactCheckmate,
	newGameStart,
	dectactInSufficiantMatarial,
};
