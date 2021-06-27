import React from 'react';
import Button from './Button';

const TodoItem = () => {
  return(
    <div style={todoItem}>
      <p>Todo Item</p>
      <div>
        <Button text="edit" variant="success"/>
        <Button text="delete" variant="danger"/>
      </div>
    </div>
  );
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