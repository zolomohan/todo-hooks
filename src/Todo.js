import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Close from '@material-ui/icons/Close';
import Input from './Input'
import useToggle from './hooks/useToggle';

export default function Todo({ id, task, completed, toggle, remove, edit }) {
	const [ editMode, toggleEditMode ] = useToggle();
	return (
		<ListItem style={{ textDecoration: completed && 'line-through', height: '64px' }}>
			{editMode 
				? <>
						<Input onSubmit={edit} editMode id={id} toggleEditMode={toggleEditMode} initialValue={task} />
						<IconButton><Close onClick={toggleEditMode} /></IconButton>
					</>
				: <>
						<Checkbox checked={completed} tabIndex={-1} onClick={() => toggle(id)} />
						<ListItemText>{task}</ListItemText>
						<ListItemSecondaryAction>
							<IconButton onClick={toggleEditMode}>
								<EditIcon />
							</IconButton>
							<IconButton onClick={() => remove(id)}>
								<DeleteIcon />
							</IconButton>
						</ListItemSecondaryAction>
					</>
			}
		</ListItem>
	);
}
