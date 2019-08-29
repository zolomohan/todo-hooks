import React from 'react';
import List from '@material-ui/core/List';
import Todo from './Todo';

export default function TodoList({ todos, toggle, remove, edit }) {
	return (
		<List>
			{todos.map((todo) => (
				<Todo task={todo.task} key={todo.id} id={todo.id} completed={todo.completed} toggle={toggle} remove={remove} edit={edit} />
			))}
		</List>
	);
}
