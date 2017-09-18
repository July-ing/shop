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


// Takes care of changing the application state
export default function userReducer(state, action) {
    switch (action.type) {
        case "a":
            return "1";
            break;
        case "b":
            return "2"
            break;
        case "v":
            return "3"
            break;
        case "d":
            return "4"
        default:
            return "5";
    }
}
