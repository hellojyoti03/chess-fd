import React from "react";
import { useAppContext } from "../../context/Provider";
function CandidateMove() {
	const { appState, dispatch } = useAppContext();

	const currentPosition = appState.position[appState.position.length - 1];
	// console.log(currentPosition, "current position");
	return (
		<div className='candidate_move'>
			<table>
				<tr>
					<th>TURN</th>
				</tr>
				<tr>
					<td>{appState.turn}</td>
					{/*<td>{appState.candidateMove.map((el) => {
						return (
							<br />
							<span></span>
					)
				})}</td> */}
				</tr>
			</table>
		</div>
	);
}

export default CandidateMove;
