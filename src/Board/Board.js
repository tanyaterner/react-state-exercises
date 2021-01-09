import React, { Component } from 'react';
import './Board.css';

/**
 * There are 3 boards. They all have a blue border.
 * Your task:
 * When clicking on one of the boards, the following should happen:
 * 1. The board you clicked on should have a red border color
 * 2. The other boards will return to their usual color (blue).
 */

class Board extends Component {
  constructor(props) {
	  super(props);
	  this.state ={
	  	  boardOneRed:false,
		  boardTwoRed:false,
		  boardThreeRed:false,
	  };
  }

	    changeColorBoard1(e){
		this.setState({
			boardOneRed: !this.state.boardOneRed,
			boardTwoRed: false,
			boardThreeRed:false
		});
	}

	changeColorBoard2(e){
		this.setState({
			boardTwoRed: !this.state.boardTwoRed,
			boardOneRed:false,
			boardThreeRed:false
		});
	}
	changeColorBoard3(e){
		this.setState({
			boardThreeRed: !this.state.boardThreeRed,
			boardOneRed:false,
			boardTwoRed:false
		});
	}




		render() {
  		    let boardColor1 = this.state.boardOneRed ? 'Board-Red' : 'Board-Blue';
			let boardColor2 = this.state.boardTwoRed ? 'Board-Red' : 'Board-Blue';
			let boardColor3 = this.state.boardThreeRed ? 'Board-Red' : 'Board-Blue';
		return (
			<div className="Board">
				<h1>Choose board:</h1>
				<div className="boards" >

					<div className={boardColor1}  onClick={this.changeColorBoard1.bind(this)} >1</div>
					<div className={boardColor2}  onClick={this.changeColorBoard2.bind(this)} >2</div>
					<div className={boardColor3}  onClick={this.changeColorBoard3.bind(this)}>3</div>
				</div>
			</div>
		);
	}
}

export default Board;