import React from 'react'
import { Router, Route, IndexRoute,browserHistory,hashHistory,createMemoryHistory,useBasename,createHashHistory} from 'react-router'
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from '../containers/index'
import Home from '../containers/Home'
import NotFound from '../containers/404'
import LoginPage from '../containers/Login/index.jsx'
import RegisterPage from '../containers/Register/index.jsx'
import Pay from '../containers/Pay/index.jsx'

//import CommPage from '../containers/Comm/index.jsx'
import Search from '../containers/Search/index.jsx'
import Detail from '../containers/Detail/index.jsx'
import rootReducer from '../reducers/index'
//大型项目参见 https://github.com/reactjs/react-router/tree/master/examples/huge
//const history = createMemoryHistory(location);

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);
export default class RouterMap extends React.Component{
    checkAuth(nextState, replaceState) {
        let { loggedIn } = store.getState();
        if (nextState.location.pathname !== '/dashboard') {
            if (loggedIn) {
                if (nextState.location.state && nextState.location.pathname) {
                    replaceState(null, nextState.location.pathname);
                } else {
                    replaceState(null, '/');
                }
            }
        } else {
            // If the user is already logged in, forward them to the homepage
            if (!loggedIn) {
                if (nextState.location.state && nextState.location.pathname) {
                    replaceState(null, nextState.location.pathname);
                } else {
                    replaceState(null, '/');
                }
            }
        }
    }
    render(){
        return(
            <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path='/'  component={App} >
                        <IndexRoute  component={Home} />
                        <Route path='/search/:category(/:keyword)' component={Search} />
                        <Route path='/detail/:id' component={Detail} />
                        <Route path='/pay' component={Pay} />

                        <Route onEnter={this.checkAuth}>
                            <Route path='/user/login' component={LoginPage} />
                            <Route path='/user/register' component={RegisterPage} />
                        </Route>
                        <Route path='*' component={NotFound} />
                    </Route>
                </Router>
            </Provider>
        )
    }
}
