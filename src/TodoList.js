import React from 'react';
import List from '@material-ui/core/List';
import Todo from './Todo';
import Divider from '@material-ui/core/Divider'

export default function TodoList({ todos, toggle, remove, edit }) {
	return (
		<List>
			{todos.map((todo, i) => (
				<>
				<Todo task={todo.task} key={todo.id} id={todo.id} completed={todo.completed} toggle={toggle} remove={remove} edit={edit} />
				{i < todos.length - 1 && <Divider />}
				</>
			))}
		</List>
	);
}
