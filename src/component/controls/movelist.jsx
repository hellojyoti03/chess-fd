import React from "react";
import { useAppContext } from "../../context/Provider";
function movelist() {
	const { appState } = useAppContext();
	return (
		<>
			<section className="move_list">
				<div className="list">
					<ol type="1">
						{appState.moveList.map((el, idx) => {
							return (
								<li key={idx}>
									<div
										style={{
											width: "20%",
										}}>
										{" "}
										<span>{idx + 1}</span>
									</div>

									<div
										style={{
											flex: 1,
										}}>
										<span
											style={{
												marginInline: "10px",
											}}>
											{el[0]}
										</span>
										<span>{el?.[1]}</span>
									</div>
								</li>
							);
						})}
					</ol>
				</div>
				<div className="animation"></div>
			</section>
		</>
	);
}

export default movelist;
