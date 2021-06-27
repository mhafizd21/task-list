import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types'

const TodoItem = ({ todo, del }) => {
  const delById = id => {
    del(id);
  }

  return(
    <div style={todoItem}>
      <p>{todo.title}</p>
      <div>
        <Button text="edit" variant="success"/>
        <Button text="delete" variant="danger" action={() => delById(todo.id)}/>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  del: PropTypes.func.isRequired,
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