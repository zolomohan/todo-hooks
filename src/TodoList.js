import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Todo from './Todo';

export default function TodoList({ todos, toggle }) {
	return (
		<Paper>
			<List>
				{todos.map((todo) => (
					<Todo task={todo.task} key={todo.id} id={todo.id} completed={todo.completed} toggle={toggle} />
				))}
			</List>
		</Paper>
	);
}
