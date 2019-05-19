import React from 'react';

const CELL_TYPE={ "month": 12,
	"day": 31,
	"hour": 24,
	"minute": 60
};

export default function InputProvider(props){
	let cell=props.cell,
		date=props.date,
		onCellChangeEvent=props.onCellChangeEvent,
		returnRows=[],
		row;
	function addButton(key,onClickEvent,innerHTML){
		returnRows.push(<button key={key} onClick={ onClickEvent }>{innerHTML}</button>)
	}
	switch(cell){
		case "year":
			for(row=-1;row<2;row++){
				let tmpYear = date.getFullYear()+row;
				addButton(cell+row,onCellChangeEvent.bind(this,tmpYear),tmpYear)
			}
			return returnRows;
		case "month":
			for(row=0;row<CELL_TYPE.month;row++){
				addButton(cell+row+1,onCellChangeEvent.bind(this,row),row+1)
			}
			return returnRows;
		case "day":
			for(row=0;row<CELL_TYPE.day;row++){
				addButton(cell+row+1,onCellChangeEvent.bind(this,row),row+1) 
			}
			return returnRows;
		case "hour":
			for(row=0;row<CELL_TYPE.hour;row++){
				addButton(cell+row,onCellChangeEvent.bind(this,row),row) 
			}
			return returnRows;
		case "minute":
			for(row=0;row<CELL_TYPE.minute;row++){
				addButton(cell+row,onCellChangeEvent.bind(this,row),row) 
			}
			return returnRows;
		default:
			return "";
	}
}