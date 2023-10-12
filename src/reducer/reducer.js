import { actionTypes } from "./constant";
let reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.NEW_MOVE: {
			console.log("a", action);

			const turn = state.turn === "w" ? "b" : "w";
			const newposition = [...state.position, action.payload.newPosition];
			return {
				...state,
				turn,
				position: newposition,
			};
		}

		default: {
			state;
			break;
		}
	}
};

export { reducer };
