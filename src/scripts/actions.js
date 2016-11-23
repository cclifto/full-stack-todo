import STORE from './store'
import User from './models/userModel'
import {TodoCollection,TodoModel} from './models'

window.User = User

const ACTIONS = {

	changeView: function(viewName) {
		STORE._set({
			currentTasks: viewName
		})
	},

	createTask: function(name) {
		var newTaskAttrs = {
			taskName: name,
			userId: User.getCurrentUser()._id
		}
		STORE._get('todoCollection').add(newTaskAttrs)
		var taskModel = new TodoModel(newTaskAttrs)
		taskModel.save()
			.then(
				function(resp){
					console.log(resp)
					alert("Task Successfully Added")
				},
				function(err){
					console.log(err)
					alert("Here's a task: learn to code!")
				}
				)
	},

	loginUser: function(email, password){
		User.login(email, password)
			.then(
				function(resp){
					console.log(resp)
					alert('User successfully logged in')
				},
				function(err){
					console.log(err)
					alert('Login Failed')
				})
	},

	logout: function(){
		User.logout()
			.then(
				function(resp){
					console.log(resp)
					alert('User successfully logged out')
				},
				function(err){
					console.log(err)
					alert('Logout Failed')
				})
	},

	registerUser: function(userInputObj) {
		User.register(userInputObj)
			.then( 
				function(resp) {
					console.log(resp)
					alert('User successfully registered')
				},
				function(err) {
					console.log(err)
					alert('That didn\'t go as planned')
				}
			)
	},

	toggleComplete: function(cid) {
		// first we need to get the right model and change its status
		var coll = STORE._get('todoCollection')
		var mod = coll.get(cid)
		mod.set({
			status: mod.get('status') === 'complete' ? 'incomplete' : 'complete'
		})
		STORE._set({
			todoCollection: coll
		})
	}
}


export default ACTIONS