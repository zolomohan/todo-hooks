import React, { useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Input from './Input';
import Divider from '@material-ui/core/Divider';
import useToggle from './hooks/useToggle';
import { TodoContext } from './contexts/todos.context';

export default function Todo({ id, task, completed, divider }) {
	const [editMode, toggleEditMode] = useToggle();
	const { toggleTodo, removeTodo } = useContext(TodoContext);
	return (
		<>
			<ListItem style={{ textDecoration: completed && 'line-through', height: '64px' }}>
				{editMode ? (
					<Input editMode id={id} toggleEditMode={toggleEditMode} initialValue={task} />
				) : (
					<>
						<Checkbox checked={completed} tabIndex={-1} onClick={() => toggleTodo(id)} />
						<ListItemText>{task}</ListItemText>
						<ListItemSecondaryAction>
							<IconButton onClick={toggleEditMode}>
								<EditIcon />
							</IconButton>
							<IconButton onClick={() => removeTodo(id)}>
								<DeleteIcon />
							</IconButton>
						</ListItemSecondaryAction>
					</>
				)}
			</ListItem>
			{divider && <Divider />}
		</>
	);
}
