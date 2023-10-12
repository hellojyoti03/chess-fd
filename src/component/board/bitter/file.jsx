import React from "react";
import { AsciiToChar } from "../../../helper/helper";
function file(props) {
	return (
		<div className='file'>
			{props.file.map((el, i) => (
				<span key={i}>{AsciiToChar(el)}</span>
			))}
		</div>
	);
}

export default file;
