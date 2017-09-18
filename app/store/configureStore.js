import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function configureState(initialState){
	const store = createStore(rootReducer, initialState,
		// 触发 redux-devtools
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
	return store;
}