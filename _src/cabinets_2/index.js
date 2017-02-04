/**
 * index.js
 * 
 * Entry file for application. App setup.
 */

// needed for redux-sage and es6 generator
import 'babel-polyfill';

// import 3rd party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';
import 'sanitize.css/sanitize.css';

// root app
import App from './containers/App';

// import selector for 'syncHistoryWithStore'
import { makeSelectLocationState } from './containers/App/selectors';

import configureStore from './store';

// import css reset and global styles
import './global-styles'

// import routes
import createRoutes from './routes';


// Create redux history with singleton browserHistory provided by react-router
const initialState = {};
const store = configureStore(initialState, browserHistory);

// sync history with store
// const history = syncHistoryWithStore(browserHistory, store, {
//   selectLocationStore: makeSelectLocationState(),
// });
