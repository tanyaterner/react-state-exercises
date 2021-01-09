import React, { Component } from 'react';

/**
 * Make a clock component that updates every second!
 * It should look like in the attached image: src/Clock/clock.gif
 * Open the image to see the animation.
 */

class Clock extends Component {

	constructor(props) {
		super(props);
		this.state={
			time: this.getTime()
		};
	}

    componentDidMount() {
		this.registerInterval();
	}

	getTime(){
		return (new Date()).toString();
	}

	registerInterval(){
		setInterval(() =>{
			this.setState({
				time:this.getTime()
			});
		},1000);
	}

	render() {
		return (
			<div>
				<h1>Clock</h1>
				The time is: {this.state.time}
			</div>
		);
	}
}

export default Clock;