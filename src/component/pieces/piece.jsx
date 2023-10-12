import React from "react";

function piece({ rank, file, piece }) {
	/**
	 * on darg start
	 */
	const handelDragStart = (e) => {
		e.dataTransfer.effectAllowed = "move";
		e.dataTransfer.setData("text/plain", `${piece},${rank},${file}`);
		setTimeout(() => {
			e.target.style.display = "none";
		}, 0);
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
