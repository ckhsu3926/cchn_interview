import React from 'react';

const CELL_TYPE={ "year":3,
	"month": 12,
	"day": 31,
	"hour": 24,
	"minute": 60
};

export default function InputProvider(props){
	let cell=props.cell,
		date=props.date,
		onCellChangeEvent=props.onCellChangeEvent,
		returnRows=[],
		row,
		buttonStyle = { 
			backgroundColor: '#55ACEE',
			color: 'white',
			height:'2.5em',
			fontSize: '1.1em',
			borderRadius: '5px',
			marginBottom:'2%',
			marginRight:'1%',
			border: 'none'
	};
	function addButton(key,onClickEvent,innerHTML){
		returnRows.push(<button key={key} onClick={ onClickEvent } style={buttonStyle}>{innerHTML}</button>)
	}
	switch(cell){
		case "year":
			buttonStyle.width = '28%';
			buttonStyle.marginRight = '4%'
			for(row=-1;row<2;row++){
				let tmpYear = date.getFullYear()+row;
				addButton(cell+row,onCellChangeEvent.bind(this,tmpYear),tmpYear)
			}
			return returnRows;
		case "month":
			buttonStyle.width = '95%';
			buttonStyle.height = '1.45em';
			for(row=0;row<CELL_TYPE.month;row++){
				addButton(cell+row+1,onCellChangeEvent.bind(this,row),row+1)
			}
			return returnRows;
		case "day":
			buttonStyle.width = '13%';
			for(row=0;row<CELL_TYPE.day;row++){
				addButton(cell+row+1,onCellChangeEvent.bind(this,row),row+1) 
			}
			return returnRows;
		case "hour":
			buttonStyle.width = '15%';
			for(row=0;row<CELL_TYPE.hour;row++){
				addButton(cell+row,onCellChangeEvent.bind(this,row),row) 
			}
			return returnRows;
		case "minute":
			buttonStyle.width = '9%';
			for(row=0;row<CELL_TYPE.minute;row++){
				addButton(cell+row,onCellChangeEvent.bind(this,row),row) 
			}
			return returnRows;
		default:
			return "";
	}
}