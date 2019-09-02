import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import { DispatchContext } from './contexts/todos.context';
import { IconButton } from '@material-ui/core';
import Done from '@material-ui/icons/Done';
import Close from '@material-ui/icons/Close';

export default function Input({ initialValue, editMode, id, toggleEditMode }) {
	const [value, handleChange, resetValue] = useInputState(initialValue);
	const dispatch = useContext(DispatchContext);
	function edit() {
		dispatch({ type: 'EDIT', task: value, id: id });
		toggleEditMode();
	}
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				editMode ? edit() : dispatch({ type: 'ADD', task: value });
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
					<IconButton onClick={edit}>
						<Done />
					</IconButton>
					<IconButton onClick={toggleEditMode}>
						<Close />
					</IconButton>
				</>
			)}
		</form>
	);
}
