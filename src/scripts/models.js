import Backbone from 'backbone'


export const TodoModel = Backbone.Model.extend({
	defaults: {
		status: 'incomplete'
	}
})

export const TodoCollection = Backbone.Collection.extend({
	model: TodoModel
})
