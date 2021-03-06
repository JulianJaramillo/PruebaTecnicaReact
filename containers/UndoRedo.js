import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import '../Styles/App.css';

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <p>
    <button className="btn btn-danger btnD" onClick={onUndo} disabled={!canUndo}>
      Undo
    </button>
    <button  className="btn btn-info"onClick={onRedo} disabled={!canRedo}>
      Redo
    </button>
  </p>
)

const mapStateToProps = (state) => {
  return {
    canUndo: state.todos.past.length > 0,
    canRedo: state.todos.future.length > 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo())
  }
}

UndoRedo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo)

export default UndoRedo
