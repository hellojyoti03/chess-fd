import React, { useState, useEffect } from "react";
import Rank from "./bitter/rank";
import File from "./bitter/file";
import Pieces from "../pieces/pieces";
import CandidateMove from "../candidate/CandidateMove";
import { useAppContext } from "../../context/Provider";

import Pupup from "../../component/promotion/popupbox";
import { arbitar } from "../../arbitar/arbitar";
import { getKingPosition } from "../../arbitar/getMoves";
function Board() {
	const { appState } = useAppContext();

	const ranks = Array(8)
		.fill()
		.map((x, i) => 8 - i);
	const files = Array(8)
		.fill()
		.map((x, i) => i + 1);
	const [board, setBoard] = useState({ ranks: ranks, files: files });

	const currentPosition = appState.position[appState.position.length - 1];

	console.log(currentPosition, "current position");
	/**
	 * check every time king check or not
	 *
	 *
	 */

	const isChecked = (() => {
		const isChecked = arbitar.isPlayerChecked({
			positionAfterMove: currentPosition,
			player: appState.turn,
		});

		if (isChecked) {
			return getKingPosition(currentPosition, appState.turn);
		}
		return null;
	})();
	/**
	 * get class dynamically
	 */
	const getClassName = (i, j) => {
		let c = "tile";
		c += (i + j) % 2 === 0 ? " tile--dark " : " tile--light ";
		if (appState.candidateMove.find((m) => m[0] === i && m[1] === j)) {
			if (currentPosition[i][j]) {
				c += " attacking";
			} else {
				c += " highlight";
			}
		}

		if (isChecked && isChecked[0] == i && isChecked[1] == j) {
			c += " checked";
		}
		return c;
	};

	/**
	 * rotate the board
	 */

	useEffect(() => {});
	/**
	 * rank and file 2d array
	 */

	return (
		<div className='container'>
			<CandidateMove />
			<div className='boards'>
				<Rank rank={ranks} />
				<div className='tiles'>
					{currentPosition.map((r, rank) =>
						r.map((f, file) => (
							<div key={file + "" + rank} className={`${getClassName(7 - rank, file)}`}></div>
						))
					)}
				</div>
				<Pupup />
				<Pieces />
				<File file={files} />
			</div>
		</div>
	);
}

export default Board;
