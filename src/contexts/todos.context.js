import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';
export const TodoContext = createContext();

export default function TodoProvider({ children }) {
	const todosContext = useTodoState([]);
	return <TodoContext.Provider value={todosContext}>{children}</TodoContext.Provider>;
}
