import { combineReducers } from 'redux';
import todos from './todos.js';
import visibilityFilter from './visibilityFilter.js';
import reviews from './reviews.js';

// each sub-reducer is managing its own part of global state
const todoApp = combineReducers({
    visibilityFilter,
    todos,
    reviews
});

export default todoApp;