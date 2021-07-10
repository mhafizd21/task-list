import React from 'react';
import logo from './logo.svg';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';
import ModalEdit from './components/ModalEdit';
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
    ],
    isEdit: false,
    editData: {
      id: "",
      title: ""
    }
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

  openModal = (id, data) => {
    this.setState({
      isEdit: true,
      editData: {
        id,
        title: data
      }
    })
  } 

  closeModal = () => {
    this.setState({
      isEdit: false
    })
  }

  setTitle = e => {
    this.setState({
      editData: {
        ...this.state.editData,
        title: e.target.value
      }
    })
  }

  updateData = () => {
    const { id:newId, title:newTitle} = this.state.editData;
    const currTasks = this.state.tasks;
    const selectedIdx = currTasks.findIndex(task => task.id === newId);
    currTasks[selectedIdx].title = newTitle;

    this.setState({
      tasks: currTasks,
      isEdit: false,
      editData: {
        id: "",
        title: ""
      }
    })
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
            <TodoItem key={task.id} todo={task} del={this.deleteTask} edit={this.openModal}/>
          )}
        </div>
        <div className="input-form">
          <FormInput add={this.addTask}/>
        </div>
        <ModalEdit 
          modalState={this.state.isEdit} 
          close={this.closeModal} 
          edit={this.setTitle}
          data={this.state.editData}
          update={this.updateData}
        />
      </div>
    );
  }
}

export default App;
