
import './App.css';
import CartContainer from './Components/CartContainer';
import Todo from './Components/Todo';
import AfterRender from './Components/useEffectsExamples/AfterRender';
import NestedComponent from './Components/useEffectsExamples/NestedComponent';
import TodoWithPagination from './Components/TodoWithPagination';

function App() {
  return (
    <div className="App">
      {/* <Todo /> */}
      {/* <AfterRender /> */}
     {/* <NestedComponent /> */}
     <TodoWithPagination />
    </div>
  );
}

export default App;
