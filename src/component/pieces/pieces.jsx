import React, { useState, useRef } from "react";
import Piece from "./piece";

import { createPosition, copyPosition } from "../../helper/helper";
function pices() {
	const [currentPosition, setState] = useState(createPosition());

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
		console.log(x, "x===>", y, "y====>");
		const [p, rank, file] = e.dataTransfer.getData("text").split(",");
		console.log("p=====>", p, "rank====>", rank, "file====>", file);
		newPosition[rank][file] = " ";

		newPosition[x][y] = p;

		setState(newPosition);
	};

	/**
	 * onDargOver
	 */
	const handeldargOver = (e) => {
		e.preventDefault();
	};
	return (
		<div
			className='pieces'
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
	);
}

export default pices;
