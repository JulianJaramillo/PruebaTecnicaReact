import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import UndoRedo from '../containers/UndoRedo'
import '../Styles/App.css';

const App = () => (
  <div className="App">
  <div className="todo-wrapper">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <UndoRedo />
  </div>
  </div>
)

export default App
