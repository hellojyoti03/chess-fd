import React from "react";
import { useAppContext } from "../../context/Provider";

import { arbitar } from "../../arbitar/arbitar";

import { makeCandidateMoves } from "../../reducer/move";
function piece({ rank, file, piece }) {
	const { appState, dispatch } = useAppContext();

	const currentPosition = appState.position[appState.position.length - 1];

	/**
	 * on darg start
	 */
	const handelDragStart = (e) => {
		e.dataTransfer.effectAllowed = "move";
		e.dataTransfer.setData("text/plain", `${piece},${rank},${file}`);
		setTimeout(() => {
			e.target.style.display = "none";
		}, 0);

		// take my turn ...
		if (appState.turn === piece[0]) {
			const candicateMove = arbitar.getRookMove({
				position: currentPosition,
				rank,
				file,
				piece,
			});
			console.log(candicateMove, "canditate move");

			dispatch(makeCandidateMoves({ candicateMove }));
		}
	};

	const handelDargEnd = (e) => {
		e.target.style.display = "block";
	};

	return (
		<div
			className={`piece ${piece} p-${file}${rank}`}
			draggable={true}
			onDragStart={handelDragStart}
			onDragEnd={handelDargEnd}></div>
	);
}

export default piece;
