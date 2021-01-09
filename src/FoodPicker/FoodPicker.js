import React, { Component } from 'react';

/**
 * See the component below? there are 4 fields: name, restaurant, meal and desert.
 * Once the user changes the form, it should be reflected on the "Your reservation" paragraph.
 */

class FoodPicker extends Component {
	constructor(props) {
		super(props);
		this.state= {
			name: '',
			restaurant:'',
			favMeal:'',
			desert: true
		};
	}
	handleChangeName (event){
		this.setState({
			name:event.target.value
		});
	}

	handleChangeMeal (event){
		this.setState({
			favMeal:event.target.value
		});
	}

	handleChangeRest(event){
		this.setState({
			restaurant:event.target.value

		});
	}

	handleChangeDesert(event){
		this.setState({
			desert:event.target.checked
		});

	}

	render() {
		return (
			<div>
				<h1>Order special meal:</h1>
				<div>
					Your name:
					<input value={this.state.name} onChange={this.handleChangeName.bind(this)}/>
				</div>
				<div>
					Choose restaurant:
					<select defaultValue={this.state.restaurant} onChange={this.handleChangeRest.bind(this)}>
						<option value="Frangelico">Frangelico</option>
						<option value="Mina Tomei">Mina Tomei</option>
						<option value="Rak Basar">Rak Basar</option>
						<option value="Texas BBQ">Texas BBQ</option>
					</select>
				</div>
				<div>
					Favorite meal:
					<input  value={this.state.favMeal} onChange={this.handleChangeMeal.bind(this)} />
				</div>
				<div>
					Want a desert?
					<input type="checkbox" value={this.state.desert} onChange={this.handleChangeDesert.bind(this)} />
				</div>

				<div>
					<h2>Your reservation:</h2>
					Hi {this.state.name}! <br />
					We are glad you want to reserve a table at {this.state.restaurant}.<br />
					We will make sure that your favorite meal, {this.state.favMeal} is available.<br />
					<div>{this.state.desert ? <div> Additionally, our chef will make a special desert for you! </div> : null }</div>
				</div>
			</div>
		);
	}
}

export default FoodPicker;