import React from 'react'
import ACTIONS from '../actions'

var LoginView = React.createClass({
	render: function() {
		return (
			<div className="login-view">
				<marquee>THIS IS THE BANNER OF THE WHOLE PAGE</marquee>
				<div className="log-reg-box">
					<Register /> 
					<Login />
				</div>
			</div>
			)
	}
})
var Register = React.createClass({
	_handleSubmit: function(eventObj) {
		eventObj.preventDefault()
		var userInput = {
			email: eventObj.target.daEmail.value,
			password: eventObj.target.daPassword.value
		}

		ACTIONS.registerUser(userInput)
	},
	render: function() {
		return (
			<form onSubmit={this._handleSubmit}>
				<h2>Register Here</h2>
				<input type="email" 	name="daEmail" 		placeholder="PUT YO EMAIL IN HERE YA DUMMY" />
				<input type="password" 	name="daPassword" 	placeholder="AND YO PASSWORD" />
				<button type="submit">Submit</button>
			</form>
		)
	}
})

var Login = React.createClass({
	_handleSubmit: function(eventObj){
		eventObj.preventDefault()
		ACTIONS.loginUser(eventObj.target.daEmail.value, eventObj.target.daPassword.value)
	},

	render: function() {
		return (
			<form onSubmit={this._handleSubmit}>
				<input type="email" 	name="daEmail" 		placeholder="PUT YO EMAIL IN HERE YA DUMMY" />
				<input type="password" 	name="daPassword" 	placeholder="AND YO PASSWORD" />
				<button type="submit">Log In</button>
			</form>
		)
	}
})
export default LoginView