import React, { useState } from 'react';
import logo from './logo.svg';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';
import ModalEdit from './components/ModalEdit';
import ModalDelete from './components/ModalDelete';
import './App.css';

const App = () => {
  const [tasks , setTasks ] = useState([
    {
      id: 1,
      title: "Daily Scrum"
    },
    {
      id: 2,
      title: "Sprint Planning"
    }
  ]);

  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [editData, setEditData] = useState({
    id: "",
    title: ""
  });

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
    setIsDelete(false);
    setEditData({
      id: "",
      title: ""
    });
  };

  const addTask = data => {
    const currId = tasks.length;

    const newTask = {
      id: currId + 1,
      title: data
    }

    setTasks([...tasks, newTask]);
  };

  const openModal = (type, id, data) => {
    let modalEdit = isEdit;
    let modalDelete = isDelete;
    switch(type){
      case 'edit':
        modalEdit = true
        break;
      case 'delete':
        modalDelete = true
        break;
      default:
        break;
    }

    setIsDelete(modalDelete);
    setIsEdit(modalEdit);
    setEditData({
      id,
      title: data
    });

  };

  const closeModal = type => {
    let modalEdit = isEdit;
    let modalDelete = isDelete;
    switch(type){
      case 'edit':
        modalEdit = false;
        break;
      case 'delete':
        modalDelete = false;
        break;
      default:
        break;
    }

    setIsEdit(modalEdit);
    setIsDelete(modalDelete);
    setEditData({
      id: "",
      title: ""
    });
  }

  const setTitle = e => {
    setEditData({
      ...editData,
      title: e.target.value
    });
  }

  const updateData = () => {
    const { id:newId, title:newTitle} = editData;
    const currTasks = tasks;
    const selectedIdx = currTasks.findIndex(task => task.id === newId);
    currTasks[selectedIdx].title = newTitle;

    setTasks(currTasks);
    setIsEdit(false);
    setEditData({
      id: "",
      title: ""
    });
  }

  return (
    <div className="app">
      <div className="logo">
        <img src={logo} alt="logo"/>
        <h1>Task List</h1>
      </div>
      <div className="list">
        {tasks.map(task => 
          <TodoItem key={task.id} todo={task} modal={openModal}/>
        )}
      </div>
      <div className="input-form">
        <FormInput add={addTask}/>
      </div>
      <ModalEdit 
        modalState={isEdit} 
        close={closeModal} 
        edit={setTitle}
        data={editData}
        update={updateData}
      />
      <ModalDelete 
        modalState={isDelete} 
        close={closeModal} 
        data={editData}
        del={deleteTask}
      />
    </div>
  );
}

export default App;
