import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TodoList from './TodoList';
import Input from './Input';
import useTodoState from './hooks/useTodoState';

export default function App() {
	const { todos, addTodo, toggleTodo, editTodo, removeTodo } = useTodoState([]);
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
				<Grid item xs={11} sm={10} md={8} lg={6}>
					<Paper style={{ margin: '1rem 0', padding: '0.5rem 1rem 1rem' }}>
						<Input onSubmit={addTodo} />
					</Paper>
					{todos.length > 0 && (
						<Paper>
							<TodoList todos={todos} toggle={toggleTodo} remove={removeTodo} edit={editTodo} />
						</Paper>
					)}
				</Grid>
			</Grid>
		</Paper>
	);
}
