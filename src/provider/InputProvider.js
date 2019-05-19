import React from 'react';

export default function InputProvider(props){
	let date = props.date;
	function onClickEvent(e){
		props.onSelectCell(e.target.name);
	}
	const inputStyles={
		width: '15%',
		textAlign: 'center',
		fontSize: '1.2em',
		lineHeight: '2em',
		borderRadius: '5px',
		marginRight: '3%',
		marginBottom: '3%',
		backgroundColor: '#292F33',
		color: 'white',
		border: 'none'
	}
	return(
		<div style={{ textAlign: 'center' }}>
			<input type='text' name='year' readOnly
				style={inputStyles}
				value={date.getFullYear()} 
				onClick={onClickEvent}
			/>
			<input type='text' name='month' readOnly 
				style={inputStyles}
				value={date.getMonth()+1} 
				onClick={onClickEvent}
			/>
			<input type='text' name='day' readOnly
				style={inputStyles}
				value={date.getDate()} 
				onClick={onClickEvent}
			/>
			<input type='text' name='hour' readOnly
				style={inputStyles}
				value={date.getHours()} 
				onClick={onClickEvent}
			/>
			<input type='text' name='minute' readOnly
				style={inputStyles}
				value={date.getMinutes()} 
				onClick={onClickEvent}
			/>
		</div>
	)
}