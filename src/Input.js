import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import { TodoContext } from './contexts/todos.context';

export default function Input({ initialValue, editMode, id, toggleEditMode }) {
	const [ value, handleChange, resetValue ] = useInputState(initialValue);
	const { addTodo, editTodo } = useContext(TodoContext);
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (editMode) {
					editTodo(value, id);
					toggleEditMode();
				} else addTodo(value);
				resetValue();
			}}
			style={editMode && { margin: '0 0.8rem', width: '100%' }}
		>
			<TextField
				fullWidth
				value={value}
				label={!editMode && 'New Task'}
				onChange={handleChange}
				style={{ marginTop: 0 }}
				autoFocus={editMode}
			/>
		</form>
	);
}
