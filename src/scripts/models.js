import Backbone from 'backbone'


export const TodoModel = Backbone.Model.extend({
	urlRoot: "/api/tasks",
	defaults: {
		complete: false
	}
})

export const TodoCollection = Backbone.Collection.extend({
	url: "/api/tasks",
	model: TodoModel
})
