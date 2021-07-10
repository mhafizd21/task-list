import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types'

const TodoItem = ({ todo, modal }) => {

  return(
    <div style={todoItem}>
      <p>{todo.title}</p>
      <div>
        <Button text="edit" variant="success" action={() => modal('edit', todo.id, todo.title)}/>
        <Button text="delete" variant="danger" action={() => modal('delete', todo.id, todo.title)}/>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  modal: PropTypes.func,
}

export default TodoItem;

const todoItem = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#218DFD",
  color: "#FFFFFF",
  padding: "12px 16px",
  marginBottom: "16px"
}