import React, { useContext, memo } from 'react';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Input from './Input';
import useToggle from './hooks/useToggle';
import { DispatchContext } from './contexts/todos.context';

export default memo(function Todo({ id, task, completed }) {
	const [ editMode, toggleEditMode ] = useToggle();
	const dispatch = useContext(DispatchContext);
	return (
		<>
			<ListItem style={{ textDecoration: completed && 'line-through', height: '64px' }}>
				{editMode ? (
					<Input editMode id={id} toggleEditMode={toggleEditMode} initialValue={task} />
				) : (
					<>
						<Checkbox checked={completed} tabIndex={-1} onClick={() => dispatch({ type: 'TOGGLE', id: id })} />
						<ListItemText>{task}</ListItemText>
						<ListItemSecondaryAction>
							<IconButton onClick={toggleEditMode}>
								<EditIcon />
							</IconButton>
							<IconButton onClick={() => dispatch({ type: 'DELETE', id: id })}>
								<DeleteIcon />
							</IconButton>
						</ListItemSecondaryAction>
					</>
				)}
			</ListItem>
		</>
	);
});
