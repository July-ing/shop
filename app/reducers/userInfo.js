/*
 * The reducer takes care of our data
 * Using actions, we can change our application state
 * To add a new action, add it to the switch statement in the homeReducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return assign({}, state, {
 *       stateVariable: action.var
 *   });
 */

import { CHANGE_FORM, SET_AUTH, SENDING_REQUEST, SET_ERROR_MESSAGE } from '../constants/AppConstants';
// Object.assign is not yet fully supported in all browsers, so we fallback to
// a polyfill
import * as actionTypes from '../constants/myConst';

const assign = Object.assign || require('object-assign');
import auth from '../util/auth';

// The initial application state
const initialState = {
	formState: {
		username: '',
		password: ''
	},
	currentlySending: false,
	loggedIn: auth.loggedIn(),
	errorMessage: ''
};

// Takes care of changing the application state
export function userInfo(state = initialState, action) {
	switch (action.type) {
		case actionTypes.USERINFO_LOGIN:
			return assign({}, state, {
				formState: action.newState
			});
			break;
		case SET_AUTH:
			return assign({}, state, {
				loggedIn: action.newState
			});
			break;
		case SENDING_REQUEST:                          //不用改
			return assign({}, state, {
				currentlySending: action.sending
			});
			break;
		case SET_ERROR_MESSAGE:
			return assign({}, state, {
				errorMessage: action.message
			});
		default:
			return state;
	}
}
