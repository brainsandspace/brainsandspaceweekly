import { combineReducers } from 'redux';
import todos from './todos.js';
import visibilityFilter from './visibilityFilter.js';
import reviews from './reviews.js';
import extractedTweets from './extractedTweets.js';

// each sub-reducer is managing its own part of global state
const todoApp = combineReducers({
    visibilityFilter,
    todos,
    reviews,
    extractedTweets,
});

export default todoApp;