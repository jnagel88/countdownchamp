import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline: 'December 25, 2018',
			newDeadline: ''
		}
	}

	changeDeadline() {
		this.setState({deadline: "November 25, 2018"})
	}

	render() {
		return (
			<div className="App">
				<div className="App-Title">
					Countdown to {this.state.deadline}
				</div>
				<div>
					<div className="clock-days">14 Days</div>
					<div className="clock-hours">30 Hours</div>
					<div className="clock-minutes">15 Minutes</div>
					<div className="clock-seconds">20 Seconds</div>
				</div>

				<div>
					<input 
						placeholder='New Date'
						onChange={event  => console.log('event', event)}
					/>
					<button onClick={() => this.changeDeadline()}>
						Submit
					</button>
				</div>
			</div>
		)
	}
}

export default App;
