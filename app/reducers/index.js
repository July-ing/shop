import { combineReducers } from 'redux'

import reducers from "./reducers"

console.log(reducers);
const rootReducer = combineReducers({
	reducers : reducers
});

export default rootReducer