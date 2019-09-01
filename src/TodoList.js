import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Todo from './Todo';
import Divider from '@material-ui/core/Divider';
import { TodoContext } from './contexts/todos.context';

export default function TodoList() {
	const { todos } = useContext(TodoContext);
	if (todos.length <= 0) return null;
	return (
		<Paper>
			<List>
				{todos.map((todo, i) => (
					<>
						<Todo key={todo.id} {...todo} />
						{i < todos.length - 1 && <Divider />}
					</>
				))}
			</List>
		</Paper>
	);
}
