let createPosition = () => {
	const position = Array(8)
		.fill("")
		.map((el) => Array(8).fill(""));
	console.log(position, "array");
	for (let i = 0; i < 8; i++) {
		position[i][1] = "wb";
		position[i][6] = "bb";
	}

	position[0][0] = "wr";
	position[7][0] = "wr";
	position[1][0] = "wn";
	position[6][0] = "wn";
	position[2][0] = "wb";
	position[5][0] = "wb";
	position[3][0] = "wq";
	position[4][0] = "wk";

	position[0][7] = "br";
	position[7][7] = "br";
	position[1][7] = "bn";
	position[6][7] = "bn";
	position[2][7] = "bb";
	position[5][7] = "bb";
	position[3][7] = "bq";
	position[4][7] = "bk";

	return position;
};

let copyPosition = (position) => {
	let copyPosition = Array(8)
		.fill("")
		.map((el) => Array(8).fill(""));

	for (let rank = 0; rank < 8; rank++) {
		for (let file = 0; file < 8; file++) {
			copyPosition[rank][file] = position[rank][file];
		}
	}

	return copyPosition;
};
export { createPosition, copyPosition };
