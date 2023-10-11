import React from "react";

function piece({ rank, file, piece }) {
	const dragStart = (e) => {
		e.dataTransfer.effectAllowed = "move";
		e.dataTransfer.setData("text/plain", `${piece}-${rank}-${file}`);
		setTimeout(() => {
			e.target.style.display = "none";
		}, 0);
	};

	const onDragEnd = (e) => {
		e.target.style.display = "block";
	};
	return (
		<div
			className={`piece ${piece} p-${rank}${file}`}
			draggable={true}
			onDragStart={dragStart}></div>
	);
}

export default piece;
