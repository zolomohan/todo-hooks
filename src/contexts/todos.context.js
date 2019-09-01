import React, { createContext, useReducer } from 'react';
import TodoReducer from '../reducers/todo.reducer';

export const TodoContext = createContext();
export const DispatchContext = createContext();

export default function TodoProvider({ children }) {
	const [todos, dispatch] = useReducer(TodoReducer, []);
	return (
		<TodoContext.Provider value={todos}>
			<DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
		</TodoContext.Provider>
	);
}
