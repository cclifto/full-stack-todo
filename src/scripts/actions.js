import STORE from './store'

const ACTIONS = {

	changeView: function(viewName) {
		STORE._set({
			currentTasks: viewName
		})
	},

	createTask: function(name) {
		var newTaskAttrs = {
			title: name
		}

		// // METHOD 1: MANUALLY MODIFYING THE COLLECTION AND CALLING ._SET
		// // read collection from store's _data
		// var coll = STORE._get('todoCollection')
		// // add a new task model to it, according to the user input
		// coll.add(newTaskAttrs)
		// // call _set on the STORE, overwriting the old collection with the updated collection. 
		// 	// this will trigger a 'storeChanged' event.
		// STORE._set({
		// 	todoCollection: coll
		// })

		// METHOD 2: TAKING ADVANTAGE OF BACKBONE BUILT-IN EVENTS
		STORE._get('todoCollection').add(newTaskAttrs)
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