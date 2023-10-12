let getRooksMoves = ({ position, rank, file, piece }) => {
	let move = [];
	let us = piece[0];
	let enemy = us === "w" ? "b" : "w";

	let direction = [
		[-1, 0],
		[0, 1],
		[0, -1],
		[1, 0],
	];

	direction.forEach((dir) => {
		for (let i = 1; i < 8; i++) {
			let xmoves = i * dir[0];
			let ymoves = i * dir[1];
			const x = rank + xmoves;
			const y = file + ymoves;

			if (position?.[x]?.[y] === undefined) {
				return;
			}
			const cellValue = position[x][y];
			const isEnemy = cellValue.startsWith(enemy);
			const isUs = cellValue.startsWith(us);

			if (isEnemy) {
				move.push([x, y]);
				return;
			} else {
				if (isUs) {
					return;
				} else {
					move.push([x, y]);
				}
			}
		}
	});

	return move;
};

export { getRooksMoves };
