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

  deleteTask = id => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    });
  }

  addTask = data => {
    const currId = this.state.tasks.length;

    const newTask = {
      id: currId + 1,
      title: data
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }

  render() {
    const { tasks } = this.state;
    return (
      <div className="app">
        <div className="logo">
          <img src={logo} alt="logo"/>
          <h1>Task List</h1>
        </div>
        <div className="list">
          {tasks.map(task => 
            <TodoItem key={task.id} todo={task} del={this.deleteTask}/>
          )}
        </div>
        <div className="input-form">
          <FormInput add={this.addTask}/>
        </div>
      </div>
    );
  }
}

export default App;
