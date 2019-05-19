import React from 'react';
import CellProvider from './provider/CellProvider';
import InputProvider from './provider/InputProvider';

export default class DatePicker extends React.Component {
	constructor(props){
		super(props);
		this.state = { nowCell:"", date: new Date() };
		this.onSelectCell = this.onSelectCell.bind(this);
		this.onCellChange = this.onCellChange.bind(this);
	}

	onSelectCell(selectedCell){
		this.setState({nowCell:selectedCell});
	}

	onCellChange(input){
		let tmpDate;
		switch(this.state.nowCell){
			case "year":
				tmpDate = new Date(this.state.date.setFullYear(input));
				this.setState({ date: tmpDate});
			break;
			case "month":
				tmpDate = new Date(this.state.date.setMonth(input));
				this.setState({ date: tmpDate});
			break;
			case "day":
				tmpDate = new Date(this.state.date.setDate(input+1));
				this.setState({ date: tmpDate});
			break;
			case "hour":
				tmpDate = new Date(this.state.date.setHours(input));
				this.setState({ date: tmpDate});
			break;
			case "minute":
				tmpDate = new Date(this.state.date.setMinutes(input));
				this.setState({ date: tmpDate});
			break;
			default:
			break;
		}
	}

	render(){
		return (
			<div>
				<InputProvider date={this.state.date} 
					onSelectCell={this.onSelectCell}/>
				<div style={{ textAlign:'center' }}>
					<CellProvider cell={this.state.nowCell} 
						date={this.state.date} 
						onCellChangeEvent={this.onCellChange} />
				</div>
			</div>
		);
	}
}