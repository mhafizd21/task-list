import React from 'react';
import Button from './Button';
import '../styles/FormInput.css';

class FormInput extends React.Component {
  render() {
    return (
      <form style={formInput}>
        <input type="text" style={inputText} placeholder="Add Item Here"/>
        <Button text="add" variant="primary"/>
      </form>
    )
  }
}

export default FormInput;

const formInput = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#FFFFFF",  
  padding: "12px 16px",
  marginBottom: "16px"
}

const inputText = {
  width: "70%",
  outline: "none",
  border: "none"
}