import { useReducer, useEffect } from 'react';

export default (key, defaultValue, reducer) => {
	const [ state, dispatch ] = useReducer(reducer, JSON.parse(window.localStorage.getItem(key)) || defaultValue);
	useEffect(() => window.localStorage.setItem(key, JSON.stringify(state)), [ state, key ]);
	return [ state, dispatch ];
};
