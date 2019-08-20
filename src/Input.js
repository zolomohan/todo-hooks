import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Paper } from '@material-ui/core';
import useInputState from './hooks/useInputState';

export default function Input({ onSubmit }) {
	const [ value, handleChange, resetValue ] = useInputState('');

	return (
		<Paper>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					onSubmit(value);
					resetValue();
				}}
			>
				<TextField value={value} label='New Task' fullWidth onChange={handleChange} />
			</form>
		</Paper>
	);
}
