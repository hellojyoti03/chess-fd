import { actionTypes } from "./constant";
let makeNewMove = ({ newPosition }) => {
	return {
		type: actionTypes.NEW_MOVE,
		payload: { newPosition },
	};
};

export { makeNewMove };
