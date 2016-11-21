import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './views/todoApp'
import Backbone from 'backbone'
import LoginView from './views/loginView'

const app = function() {


	const Router = Backbone.Router.extend({
		routes: {
			"home": "handleHome",
			"login": "handleLogin",
			"*default": "handleDefault"
		},

		handleHome: function() {
			ReactDOM.render(<TodoApp />, document.querySelector(".container"))
		},
		handleLogin: function() {
			ReactDOM.render(<LoginView />, document.querySelector(".container"))
		},
		handleDefault: function(){
			location.hash = "home"
		},
		initialize: function() {
			Backbone.history.start()
		}

	})

	new Router()

	
}


app()