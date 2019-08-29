import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TodoList from './TodoList';
import Input from './Input';

export default function App() {
	const initialState = [
		{ id: 1, task: 'Complete Building Todo with React Hooks', completed: false },
		{ id: 2, task: 'Learn Context', completed: false },
		{ id: 3, task: 'Get Flutter Course from Avinash', completed: false }
	];
	const [ todos, setTodos ] = useState(initialState);

	const addTodo = (todoTask) => setTodos([ ...todos, { id: 4, task: todoTask, completed: false } ]);

	const toggleTodo = (todoID) =>
		setTodos(todos.map((todo) => (todo.id === todoID ? { ...todo, completed: !todo.completed } : todo)));

	return (
		<Paper
			style={{
				padding         : 0,
				margin          : 0,
				height          : '100vh',
				backgroundColor : '#fafafa',
				borderRadius    : 0
			}}
			elevation={0}
		>
			<AppBar color='primary' position='static' style={{ height: '64px' }}>
				<Toolbar>
					<Typography color='inherit'>Todos</Typography>
				</Toolbar>
			</AppBar>

			<Grid container justify='center' style={{ marginTop: '2rem' }}>
				<Grid item xs={11} sm={10} md={8} lg={4}>
					<Input onSubmit={addTodo} />
					<TodoList todos={todos} toggle={toggleTodo} />
				</Grid>
			</Grid>
		</Paper>
	);
}
