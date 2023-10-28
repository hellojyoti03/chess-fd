import { createPosition } from "../helper/helper";
let gameStatus = {
	pending: "pending",
	stalemet: "game draws due to stalemet", // no check but no move
	insufficiant: "game draw due to insufficient mating material.",
	ongoing: "ongoing",
	draw: "draw",
	promoting: "promoting",
	white: "white wins",
	black: "black wins",
};
let initGame = {
	socket: null,
	opponent: "", // string
	position: [], // array
	turn: "", // string
	candidateMove: [], // string
	moveList: [], // array
	kill_pices: [],
	pieces_square_info: "", // string
	status: gameStatus.pending, // enum
	promotion_square_info: null, // object
	castlingdir: {
		w: "both",
		b: "both",
	}, // object
};

Object.freeze(initGame);

let actionTypes = {
	NEW_GAME_INIT: "NEW_GAME_INIT",
	BOARD_UPDATE: "BOARD_UPDATE",
	NEW_MOVE: "NEW_MOVE",
	PIECES_SQOURE_INFO: "PIECES_SQOURE_INFO",
	CLEAR_PIECES_SQOURE_INFO: "CLEAR_PIECES_SQOURE_INFO",
	CANDIDATE_MOVE: "CANDIDATE_MOVE",
	CLEAR_CANDIDATE_MOVES: "CLEAR_CANDIDATE_MOVES",
	OPEN_PROMOTION_BOX: "OPEN_PROMOTION_BOX",
	CLOSE_PROMOTION_BOX: "CLOSE_PROMOTION_BOX",
	CLEAR_PROMOTION_SQOUR_INFO: "CLEAR_PROMOTION_SQOUR_INFO",
	CHECK_CASTEL: "CHECK_CASTEL",
	DECTACT_STALEMET: "DECTACT_STALEMET",
	DECTACT_INSUFFICIANT_MATARIAL: "DECTACT_INSUFFICIANT_MATARIAL",
	WIN: "WIN",
	SAVE_KILL_PICES: "SAVE_KILL_PICES",
	NEW_GAME: "NEW_GAME",

	//socket

	NEW_SOCKET_CONNECTION: "NEW_SOCKET_CONNECTION",
};

let initArr = [
	["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"],
	["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
	["", "", "", "", "", "", "", ""],
	["", "", "", "", "", "", "", ""],
	["", "", "", "", "", "", "", ""],
	["", "", "", "", "", "", "", ""],
	["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
	["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"],
];
export { initGame, actionTypes, gameStatus, initArr };
