import React from 'react';
import logo from './logo.svg';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';
import './App.css';

class App extends React.Component {
  state = {
    tasks: [
      {
        id: 1,
        title: "Daily Scrum"
      },
      {
        id: 2,
        title: "Sprint Planning"
      }
    ]
  }

  render() {
    const { tasks } = this.state;
    return (
      <div className="app">
        <div class="logo">
          <img src={logo} alt="logo"/>
          <h1>Task List</h1>
        </div>
        <div class="list">
          {tasks.map(task => 
            <TodoItem key={task.id} todo={task}/>
          )}
        </div>
        <div class="input-form">
          <FormInput/>
        </div>
      </div>
    );
  }
}

export default App;
