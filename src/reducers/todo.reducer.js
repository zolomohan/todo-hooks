import uuid from 'uuid/v4';
export default (state, action) => {
	switch (action.type) {
		case 'ADD':
			return [...state, { id: uuid(), task: action.task, completed: false }];
		case 'DELETE':
			return state.filter((todo) => todo.id !== action.id);
		case 'TOGGLE':
			return state.map((todo) => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
		case 'EDIT':
			return state.map((todo) => (todo.id === action.id ? { ...todo, task: action.task } : todo));
		default:
			return state;
	}
};
