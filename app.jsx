import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import {Provider} from 'react-redux';
import reduxReducer from './reducer.js';
import MapContainer from './MapContainer.jsx';

const loggerMiddleware = createLogger();
const store = createStore(reduxReducer, applyMiddleware(loggerMiddleware));

render(
	<Provider store={store}>
		<MapContainer />
	</Provider>,
	document.getElementById('root')
);