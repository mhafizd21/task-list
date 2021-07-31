import React, { useState } from 'react';
import Button from './Button';
import '../styles/FormInput.css';

const FormInput = props => {
  const [text, setText] = useState("");

  const change = e => {
    setText(e.target.value);
  }

  const submit = e => {
    e.preventDefault();
    if(text !== "") {
      props.add(text);
    }

    setText("");
  }

  return (
    <form style={formInput} onSubmit={submit}>
      <input type="text" style={inputText} placeholder="Add Item Here" onChange={change} value={text}/>
      <Button text="add" variant="primary" action={submit}/>
    </form>
  )

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