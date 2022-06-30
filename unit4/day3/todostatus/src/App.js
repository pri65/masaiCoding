
import './App.css';
import Todo from './Components/Todo';
import TodoItem from './Components/TodoItem';
import todoList from './Components/todoList';

function App() {
  return (
    <div >
      <Todo />
      <TodoItem />
      <todoList />
      <input type="text" placeholder='type something' />
      <button>Add</button>
    </div>
  );
}

export default App;
