import React from "react";
function rank(props) {
	return (
		<div className='rank'>
			{props.rank.map((el, i) => (
				<span key={i}>{el}</span>
			))}
		</div>
	);
}

export default rank;
