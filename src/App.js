import logo from './logo.svg';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';
import './App.css';

function App() {
  return (
    <div className="app">
      <div class="logo">
        <img src={logo} alt="logo"/>
        <h1>Task List</h1>
      </div>
      <div class="list">
        <TodoItem/>
      </div>
      <div class="input-form">
        <FormInput/>
      </div>
    </div>
  );
}

export default App;
