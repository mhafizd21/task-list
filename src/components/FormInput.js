import React from 'react';
import Button from './Button';
import '../styles/FormInput.css';

class FormInput extends React.Component {

  state = {
    text: ""
  }

  change = e => {
    this.setState({text: e.target.value});
  }

  submit = e => {
    e.preventDefault();
    if (this.state.text !== "") {
      this.props.add(this.state.text);
    }

    this.setState({text:""});
  }

  render() {
    return (
      <form style={formInput} onSubmit={this.submit}>
        <input type="text" style={inputText} placeholder="Add Item Here" onChange={this.change} value={this.state.text}/>
        <Button text="add" variant="primary" action={this.submit}/>
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