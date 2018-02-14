import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import '../Styles/App.css';


let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
  <h1 className="Title" >Test ReactRedux ToDo </h1>
      <form  className="form-group" onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button className="btn btn-primary todo-button"  type="submit">
          Add Task
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
