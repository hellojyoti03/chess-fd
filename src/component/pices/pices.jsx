import React, { useState, useRef } from "react";
import Piece from "./piece";

import { createPosition, copyPosition } from "../../helper/helper";
function pices() {
	const [state, setState] = useState(createPosition());

	const picesRef = useRef();

	const getCord = (e) => {
		const { width, left, top } = picesRef.current.getBoundingClientRect();
		const size = width / 8;

		const x = Math.floor((e.clientX - left) / size);
		const y = 7 - Math.floor((e.clientY - top) / size);
		return { x, y };
	};
	const handelDrop = (e) => {
		const newPosition = copyPosition(state);
		const { x, y } = getCord(e);
		const [p, rank, file] = e.dataTransfer.getData("text").split("-");

		newPosition[rank][file] = "";

		newPosition[x][y] = p;

		setState(newPosition);
	};
	return (
		<div
			ref={picesRef}
			className="pices"
			onDrop={handelDrop}
			onDragOver={(e) => e.preventDefault()}>
			{state.map((rank, i) =>
				rank.map((file, j) =>
					state[i][j] ? <Piece rank={i} file={j} piece={state[i][j]} /> : null
				)
			)}
		</div>
	);
}

export default pices;
