import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

export default function Input({ initialValue, onSubmit, editMode, id, toggleEditMode }) {
	const [ value, handleChange, resetValue ] = useInputState(initialValue);
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (editMode) {
					onSubmit(value, id);
					toggleEditMode();
				} else onSubmit(value);
				resetValue();
			}}
			style={editMode && {margin: '0 0.8rem', width: '100%'}}
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
