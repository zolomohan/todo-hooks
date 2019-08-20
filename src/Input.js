import React from 'react'
import TextField from '@material-ui/core/TextField'
import { Paper } from '@material-ui/core';
import useInputState from './hooks/useInputState'

export default function Input() {

	const [value, handleChange, resetValue] = useInputState('');

	return (
		<Paper>
			<TextField label='New Task' fullWidth onChange={handleChange}/>
		</Paper>
	)
}
