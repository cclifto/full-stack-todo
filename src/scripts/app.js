import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './views/todoApp'
const app = function() {

	ReactDOM.render(<TodoApp />, document.querySelector(".container"))
}

app()