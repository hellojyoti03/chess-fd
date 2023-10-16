import React from "react";
import { gameStatus } from "../../reducer/constant";
import { newGameStart } from "../../reducer/move";
import { useAppContext } from "../../context/Provider";
function satalement() {
	const { appState, dispatch } = useAppContext();

	const handelClick = () => {
		dispatch(newGameStart());
	};
	return (
		<div className="satalement_modal">
			<h1>Game Draw </h1>
			<p>{gameStatus.stalemet}</p>
			<button
				className="new-game-button"
				onClick={() => {
					handelClick();
				}}>
				New Game{" "}
			</button>
		</div>
	);
}

export default satalement;
