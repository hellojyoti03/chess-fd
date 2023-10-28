import React, { useRef } from "react";
import Piece from "./piece";

import { useAppContext } from "../../context/Provider";
import { getNewMoveNotation } from "../../helper/helper";
import {
	makeNewMove,
	clearCandidates,
	clearPicesSqoureInfo,
	openPromotionBox,
	updateCastlingMove,
	dectactStalemet,
	dectactInSufficiantMatarial,
	dectactCheckmate,
	saveKillPices,
} from "../../reducer/move";
import { arbitar } from "../../arbitar/arbitar";
import { getCastlingDir } from "../../arbitar/getMoves";
function pices() {
	const { appState, dispatch } = useAppContext();
	const currentPosition = appState.position[appState.position.length - 1];

	const picesRef = useRef();

	/**
	 * get coordinate of parent virtual board
	 */
	const calculateCoords = (e) => {
		const { top, left, width } = picesRef.current.getBoundingClientRect();
		const size = width / 8;
		const y =
			appState.opponent === "b"
				? Math.floor((e.clientX - left) / size)
				: 7 - Math.floor((e.clientX - left) / size);
		const x =
			appState.opponent === "b"
				? 7 - Math.floor((e.clientY - top) / size)
				: Math.floor((e.clientY - top) / size);

		return { x, y };
	};

	/**
	 * open promotion box
	 */

	const handelOpenPromotionBox = ({ rank, file, x, y, piece }) => {
		dispatch(
			openPromotionBox({ rank: Number(rank), file: Number(file), x, y, piece })
		);
	};

	/**
	 * handel updated castling move
	 */

	const updateCastlingDir = ({ piece, rank, file }) => {
		const dir = getCastlingDir({
			castelDirection: appState.castlingdir,
			piece,
			rank,
			file,
		});
		if (dir) {
			dispatch(updateCastlingMove(dir));
		}
	};

	/**
	 * onDrop
	 */

	const onDrop = (e) => {
		try {
			if (appState.pieces_square_info) {
				const { x, y } = calculateCoords(e);

				const [piece, rank, file] = appState.pieces_square_info.split(",");

				if (appState.candidateMove.find((m) => m[0] === x && m[1] === y)) {
					// Em pasant move when current poition empty
					const opponet = piece.startsWith("w") ? "b" : "w";
					const castelDirection =
						appState.castlingdir[`${piece.startsWith("w") ? "b" : "w"}`];

					if (
						(piece === "wp" && x === 7 && appState.opponent === "b") ||
						(piece === "bp" && x === 0 && appState.opponent === "w")
					) {
						handelOpenPromotionBox({ rank, file, x, y });
						return;
					}

					if (piece.endsWith("k") || piece.endsWith("r")) {
						updateCastlingDir({ piece, rank, file });
					}
					const newPosition = arbitar.checkAmove({
						position: currentPosition,
						x,
						y,
						rank,
						file,
						piece,
					});

					const newMove = getNewMoveNotation({
						piece,
						rank,
						file,
						x,
						y,
						position: currentPosition,
					});

					if (newMove.includes("x")) {
						dispatch(
							saveKillPices({
								prevPosition: appState.position[appState.position.length - 1],
								x,
								y,
							})
						);
					}
					dispatch(
						makeNewMove({
							newPosition,
							newMove,
						})
					);

					if (arbitar.insufficientMaterial(newPosition)) {
						dispatch(dectactInSufficiantMatarial());
					} else if (
						arbitar.isStalemate(newPosition, opponet, castelDirection)
					) {
						dispatch(dectactStalemet());
					} else if (
						arbitar.isCheckMate(newPosition, opponet, castelDirection)
					) {
						dispatch(dectactCheckmate(piece[0]));
					}
				}

				dispatch(clearCandidates());
				dispatch(clearPicesSqoureInfo());
			}
		} catch (e) {
			console.log(e, "error Occored");
		}
	};
	/**
	 * drop event handel
	 */
	const handelDrop = (e) => {
		onDrop(e);
	};

	/**
	 * darg over event handel
	 */
	const handeldargOver = (e) => {
		e.preventDefault();
	};

	/**
	 * drop click event handel
	 */
	const handelDropClick = (e) => {
		onDrop(e);
	};

	return (
		<>
			<div
				className="pieces"
				ref={picesRef}
				onClick={handelDropClick}
				onDrop={handelDrop}
				onDragOver={handeldargOver}
				style={{
					transform:
						appState.opponent === "w" ? `rotate(${180}deg)` : `rotate(${0}deg)`,
				}}>
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
		</>
	);
}

export default pices;
