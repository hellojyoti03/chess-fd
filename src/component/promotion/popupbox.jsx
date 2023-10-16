import React from "react";
import Promoption from "./promotionbox";
import Satalement from "./satalement";
import { useAppContext } from "../../context/Provider";

import { gameStatus } from "../../reducer/constant";
function popupbox() {
	const { appState, dispatch } = useAppContext();

	console.log("Open Poup Box");

	if (appState.status === gameStatus.promoting) {
		return (
			<div className="popup">
				<Promoption />
			</div>
		);
	}
	if (appState.status === gameStatus.stalemet) {
		console.log("call dedd posoososo");
		return (
			<div className="popup">
				<Satalement />
			</div>
		);
	}
	return null;
}

export default popupbox;
