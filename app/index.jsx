import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory,useBasename,createHashHistory } from 'react-router';
import configureStore from './store/configureStore'
import RouteMap from './router/routerMap'
//性能测试
global.Perf = require('react-addons-perf');
if(__DEV__){
	window.Perf = Perf;
}
import Hello from './containers/Hello';
import {getData, postData} from './fetch/text.jsx';

const store = configureStore();
//getData();
//
//postData();
render(

		//<Provider store={store}>
			<RouteMap />
		//</Provider>
		,document.getElementById('mainContainer')
)
