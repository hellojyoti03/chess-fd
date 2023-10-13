import { actionTypes } from "./constant";
let reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.NEW_MOVE: {
			const turn = state.turn === "w" ? "b" : "w";
			const newposition = [...state.position, action.payload.newPosition];
			return {
				...state,
				turn,
				position: newposition,
			};
		}
		case actionTypes.CANDIDATE_MOVE: {
			return {
				...state,
				candidateMove: action.payload.candicateMove,
			};
		}
		case actionTypes.CLEAR_CANDIDATE_MOVES: {
			return {
				...state,
				candidateMove: action.payload,
			};
		}
		case actionTypes.CLEAR_PORN: {
			return {
				...state,
				porn: action.payload,
			};
		}
		case actionTypes.NEW_MOVE_CLICK_PORN: {
			return {
				...state,
				porn: action.payload.porn,
			};
		}
		default: {
			state;
			break;
		}
	}
};

export { reducer };
