import React from 'react';

export default (props) =>  (
	<div style={{display:'flex',flexDirection:'row'}}>
		<div style={{width:'25%'}}>{props.state.step.map((e,i) => <div key={i}>{e.name}</div>)}</div>
	</div>
);
