import { createPosition } from "../helper/helper";
let initGame = {
	position: [createPosition()],
	turn: "w",
};
Object.freeze(initGame);

let actionTypes = {
	NEW_MOVE: "NEW_MOVE",
};
export { initGame, actionTypes };
