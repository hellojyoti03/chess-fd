import React from "react";
function file(props) {
	return (
		<div className='file'>
			{props.file.map((el, i) => (
				<span key={i}>{String.fromCharCode(96 + el)}</span>
			))}
		</div>
	);
}

export default file;
