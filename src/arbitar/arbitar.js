import { getRooksMoves } from "./getMoves";
let arbitar = {
	getRookMove: function ({ position, rank, file, piece }) {
		return getRooksMoves({ position, rank, file, piece });
	},
};

export { arbitar };
