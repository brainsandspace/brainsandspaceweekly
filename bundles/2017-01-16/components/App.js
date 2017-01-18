import React from 'react';
import Footer from './Footer.js';
import AddTodo from '../containers/AddTodo.js';
import Reviews from '../containers/Reviews.js';
import VisibleTodoList from '../containers/VisibleTodoList.js';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Reviews />
    <Footer />
  </div>
);

export default App;