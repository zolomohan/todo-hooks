import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import { TodoContext } from './contexts/todos.context';
import { IconButton } from '@material-ui/core';
import Done from '@material-ui/icons/Done';
import Close from '@material-ui/icons/Close';

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
			style={
				editMode && {
					marginLeft: '0.8rem',
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}
			}
		>
			<TextField
				fullWidth
				value={value}
				label={!editMode && 'New Task'}
				onChange={handleChange}
				style={{ marginRight: '1rem' }}
				autoFocus={editMode}
			/>
			{editMode && (
				<>
					<IconButton
						onClick={() => {
							editTodo(value, id);
							toggleEditMode();
						}}
					>
						<Done />
					</IconButton>
					<IconButton>
						<Close onClick={toggleEditMode} />
					</IconButton>
				</>
			)}
		</form>
	);
}
