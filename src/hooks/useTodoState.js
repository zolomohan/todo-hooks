import { useState } from 'react';
import uuid from 'uuid/v4';

export default (initialState) => {
	const [ todos, setTodos ] = useState(initialState);

	return {
		todos,
		addTodo    : (task) => setTodos([ ...todos, { id: uuid(), task: task, completed: false } ]),
		toggleTodo : (id) =>
			setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))),
		removeTodo : (id) => setTodos(todos.filter((todo) => todo.id !== id)),
		editTodo   : (task, id) => setTodos(todos.map((todo) => (todo.id === id ? { ...todo, task: task } : todo)))
	};
};
