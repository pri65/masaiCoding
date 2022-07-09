
import './App.css';
import CartContainer from './Components/CartContainer';
import Todo from './Components/Todo';
import AfterRenderAlways from './Components/useEffectsExamples/AfterRender';

function App() {
  return (
    <div className="App">
      {/* <Todo /> */}
      <AfterRenderAlways />
    </div>
  );
}

export default App;
