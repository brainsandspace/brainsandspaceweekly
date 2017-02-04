import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import VisiblePage from '../containers/VisiblePage.js';
import AddTodo from '../containers/AddTodo.js';
import Reviews from '../containers/Reviews.js';
import VisibleTodoList from '../containers/VisibleTodoList.js';

const App = () => (
  <div>
    <Header />
    <VisiblePage />
    <AddTodo />
    <VisibleTodoList />
    {/*<Reviews />*/}
    <Footer />
  </div>
);

export default App;