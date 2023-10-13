import { createPosition } from "../helper/helper";
let initGame = {
	position: [createPosition()],
	turn: "w",
	candidateMove: [],
};
Object.freeze(initGame);

let actionTypes = {
	NEW_MOVE: "NEW_MOVE",
	CANDIDATE_MOVE: "CANDIDATE_MOVE",
};
export { initGame, actionTypes };
