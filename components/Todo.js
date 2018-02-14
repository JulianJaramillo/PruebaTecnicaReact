import React, { PropTypes } from 'react'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import '../Styles/App.css';

const Todo = ({ onClick, completed, text }) => (

  <li className="list-group-item"
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>

)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
