import React from 'react';

export default function InputProvider(props){
	let date = props.date;
	function onClickEvent(e){
		props.onSelectCell(e.target.name);
	}
	return(
		<div>
			<input type='text' name='year' readOnly 
				value={date.getFullYear()} 
				onClick={onClickEvent}
			/>
			<input type='text' name='month' readOnly 
				value={date.getMonth()+1} 
				onClick={onClickEvent}
			/>
			<input type='text' name='day' readOnly 
				value={date.getDate()} 
				onClick={onClickEvent}
			/>
			<input type='text' name='hour' readOnly 
				value={date.getHours()} 
				onClick={onClickEvent}
			/>
			<input type='text' name='minute' readOnly 
				value={date.getMinutes()} 
				onClick={onClickEvent}
			/>
		</div>
	)
}