import React, { createContext } from 'react';
import TodoReducer from '../reducers/todo.reducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

export const TodoContext = createContext();
export const DispatchContext = createContext();

export default function TodoProvider({ children }) {
	const [ todos, dispatch ] = useLocalStorageReducer('todos', [], TodoReducer);
	return (
		<TodoContext.Provider value={todos}>
			<DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
		</TodoContext.Provider>
	);
}
