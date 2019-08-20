import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Paper } from '@material-ui/core';
import useInputState from './hooks/useInputState';

export default function Input({ onSubmit }) {
	const [ value, handleChange, resetValue ] = useInputState('');

	return (
		<Paper style={{margin: '1rem 0', padding: '0.5rem 1rem 1rem'}}>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					onSubmit(value);
					resetValue();
				}}
			>
				<TextField value={value} label='New Task' fullWidth onChange={handleChange} style={{marginTop: 0}}/>
			</form>
		</Paper>
	);
}
