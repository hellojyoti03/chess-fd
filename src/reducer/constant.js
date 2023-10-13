import { createPosition } from "../helper/helper";
let initGame = {
	position: [createPosition()],
	turn: "w",
	candidateMove: [],
	porn: "",
};
Object.freeze(initGame);

let actionTypes = {
	NEW_MOVE: "NEW_MOVE",
	NEW_MOVE_CLICK_PORN: "NEW_MOVE_CLICK_PORN",
	CLEAR_PORN: "CLEAR_PORN",
	CANDIDATE_MOVE: "CANDIDATE_MOVE",
	CLEAR_CANDIDATE_MOVES: "CLEAR_CANDIDATE_MOVES",
};
export { initGame, actionTypes };
