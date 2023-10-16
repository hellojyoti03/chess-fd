let createPosition = () => {
	const position = new Array(8).fill("").map((x) => new Array(8).fill(""));

	// for (let i = 0; i < 8; i++) {
	// 	position[6][i] = "bp";
	// 	position[1][i] = "wp";
	// }

	// position[0][0] = "wr";
	// position[0][1] = "wn";
	// position[0][2] = "wb";
	// // position[0][3] = "wq";
	// position[0][4] = "wk";
	// position[0][5] = "wb";
	// position[0][6] = "wn";
	// position[0][7] = "wr";

	// position[7][0] = "br";
	// position[7][1] = "bn";
	// position[7][2] = "bb";
	// position[7][3] = "bq";
	// position[7][4] = "bk";
	// position[7][5] = "bb";
	// position[7][6] = "bn";
	// position[7][7] = "br";
	position[7][7] = "bk";
	position[7][5] = "wk";
	position[0][0] = "wr";
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

let AsciiToChar = (ascii) => {
	let char = String.fromCharCode(96 + ascii);

	return char;
};

export { createPosition, copyPosition, AsciiToChar };
