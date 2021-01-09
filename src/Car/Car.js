import React, { Component } from 'react';
import './Car.css';

/**
 * Your task:
 * When the user chooses a color from the list,
 * you should change the element `Car-color` background color accordingly.
 */

class Car extends Component {
	constructor(props) {
		super(props);
		this.state ={
		color: ''
		}
	}


	chooseColor(e){
		this.setState({
			color:e.target.value
		})
	}

	render() {
		let CarColor=this.state.color;
		return (

			<div>
				<h1>Choose a color for your car:</h1>
				<select onChange={this.chooseColor.bind(this)}>
					<option value="Car-colorSilver">silver</option>
					<option value="Car-colorRed">red</option>
					<option value="Car-colorBlue">blue</option>
					<option value="Car-colorYellow">yellow</option>
					<option value="Car-colorGreen">green</option>
				</select>
				<br />
				<br />
				<div className={CarColor}>Color example</div>
			</div>
		);
	}
}

export default Car;