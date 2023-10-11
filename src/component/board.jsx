import React from "react";
import Rank from "./rank/rank";
import File from "./file/file";
import Pices from "./pices/pices";
function Board() {
	const getClassName = (i, j) => {
		let cls = "tile";
		cls += (i + j) % 2 === 0 ? " tile-dark" : " tile-light";
		return cls;
	};
	const ranks = Array(8)
		.fill()
		.map((num, i) => 8 - i);

	const files = Array(8)
		.fill()
		.map((num, i) => i + 1);

	return (
		<div className='boards'>
			<Rank rank={ranks} />
			<div className='tiles'>
				{ranks.map((rank, i) => {
					return files.map((file, j) => {
						return (
							<div key={rank + "-" + file} className={getClassName(9 - i, j)}>
								{/* {rank}-{file} */}
							</div>
						);
					});
				})}
			</div>
			<Pices />
			<File file={files} />
		</div>
	);
}

export default Board;
