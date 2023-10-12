import React, { useRef } from "react";
import Piece from "./piece";

import { copyPosition } from "../../helper/helper";
import { useAppContext } from "../../context/Provider";

import { makeNewMove } from "../../reducer/move";
function pices() {
	const { appState, dispatch } = useAppContext();

	const currentPosition = appState.position[appState.position.length - 1];

	const picesRef = useRef();

	/**
	 * get coordinate of parent virtual board
	 */
	const calculateCoords = (e) => {
		const { top, left, width } = picesRef.current.getBoundingClientRect();
		const size = width / 8;
		const y = Math.floor((e.clientX - left) / size);
		const x = 7 - Math.floor((e.clientY - top) / size);

		return { x, y };
	};
	/**
	 * onDrop
	 */
	const handelDrop = (e) => {
		const newPosition = copyPosition(currentPosition);
		const { x, y } = calculateCoords(e);

		const [p, rank, file] = e.dataTransfer.getData("text").split(",");

		newPosition[rank][file] = " ";

		newPosition[x][y] = p;

		dispatch(makeNewMove({ newPosition }));
		// setState(newPosition);
	};

	/**
	 * onDargOver
	 */
	const handeldargOver = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<div
				className="pieces"
				ref={picesRef}
				onDrop={handelDrop}
				onDragOver={handeldargOver}>
				{currentPosition.map((r, rank) =>
					r.map((f, file) =>
						currentPosition[rank][file] ? (
							<Piece
								key={rank + "-" + file}
								rank={rank}
								file={file}
								piece={currentPosition[rank][file]}
							/>
						) : null
					)
				)}
			</div>
		</>
	);
}

export default pices;
