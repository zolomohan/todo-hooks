import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Input from './Input'
import useToggle from './hooks/useToggle';

export default function Todo({ id, task, completed, toggle, remove, edit }) {
	const [ editMode, toggleEditMode ] = useToggle();
	return (
		<ListItem style={{ textDecoration: completed && 'line-through' }}>
			{editMode 
				? <Input onSubmit={edit} editMode id={id} toggleEditMode={toggleEditMode} initialValue={task} />
				: <>
						<Checkbox checked={completed} tabIndex={-1} onClick={() => toggle(id)} />
						<ListItemText>{task}</ListItemText>
						<ListItemSecondaryAction>
							<IconButton onClick={() => remove(id)}>
								<DeleteIcon />
							</IconButton>
							<IconButton onClick={toggleEditMode}>
								<EditIcon />
							</IconButton>
						</ListItemSecondaryAction>
					</>
			}
		</ListItem>
	);
}
