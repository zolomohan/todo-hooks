import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

export default function Todo({ id, task, completed, toggle }) {
	return (
		<ListItem style={{ textDecoration: completed && 'line-through' }}>
			<Checkbox checked={completed} tabIndex={-1} onClick={() => toggle(id)} />
			<ListItemText>{task}</ListItemText>
		</ListItem>
	);
}
