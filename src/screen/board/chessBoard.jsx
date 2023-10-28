import React, { useEffect } from "react";
import Board from "../../component/board/board";

import appConfig from "../../appconfig/appconfig";
import { useAppContext } from "../../context/Provider";
import Controls from "../../component/controls/controls";
import Movelist from "../../component/controls/movelist";
import userAvatar from "../../assets/app/search_avatar/avatar1.jpg";
import opponetAvatar from "../../assets/app/search_avatar/avatar2.jpg";
function chessBoard() {
	const { appState, dispatch } = useAppContext();
	useEffect(() => {
		appState.socket.getUpdateDetailsFromServer(dispatch);
	}, []);
	return (
		<div className="board_container">
			<div className="boards">
				<div className="self_profile">
					<div className="user_profile">
						<img
							src={userAvatar}
							alt={``}
							style={{
								width: "42px",
								height: "42px",
								borderRadius: "100px",
								marginLeft: "15px",
								marginTop: "7px",
							}}
						/>
					</div>
					<div className="user_kill">
						<div className="pawn_pices">
							{appState.kill_pices.map((el, idx) => {
								if (el) {
									if (el[0] === appState.opponent) {
										if (el[1] === "p") {
											return (
												<div key={idx}>
													<img
														src={appConfig.pices[el]}
														style={{
															width: "30px",
															height: "30px",
														}}
													/>
												</div>
											);
										}
									}
								}
							})}
						</div>
						<div className="master_pices">
							{appState.kill_pices.map((el, idx) => {
								if (el) {
									if (el[0] === appState.opponent) {
										if (el[1] !== "p") {
											return (
												<div key={idx}>
													<img
														src={appConfig.pices[el]}
														style={{
															width: "30px",
															height: "30px",
														}}
													/>
												</div>
											);
										}
									}
								}
							})}
						</div>
					</div>
				</div>
				<div className="opponet_profile">
					<div className="user_kill">
						{" "}
						<div className="pawn_pices">
							{appState.kill_pices.map((el, idx) => {
								if (el) {
									if (el[0] !== appState.opponent) {
										if (el[1] === "p") {
											return (
												<div key={idx}>
													<img
														src={appConfig.pices[el]}
														style={{
															width: "30px",
															height: "30px",
														}}
													/>
												</div>
											);
										}
									}
								}
							})}
						</div>
						<div className="master_pices">
							{appState.kill_pices.map((el, idx) => {
								if (el) {
									if (el[0] !== appState.opponent) {
										if (el[1] !== "p") {
											return (
												<div key={idx}>
													<img
														src={appConfig.pices[el]}
														style={{
															width: "30px",
															height: "30px",
														}}
													/>
												</div>
											);
										}
									}
								}
							})}
						</div>
					</div>
					<div className="user_profile">
						<img
							src={opponetAvatar}
							alt={``}
							style={{
								width: "42px",
								height: "42px",
								borderRadius: "100px",
								marginLeft: "15px",
								marginTop: "7px",
							}}
						/>
					</div>
				</div>

				<Board />
			</div>
			<Controls>
				<Movelist />
			</Controls>
		</div>
	);
}

export default chessBoard;
