
import './App.css';
import squareComponent from './Components/squareComponent';

function App() {
  return (
    <div className="app-header">
     <p className="heading-text">Tic Tac Toe</p>
     <div className="row jc-center">
      <squareComponent />
     </div>
     <div className="row jc-center">
      X
     </div>
     <div className="row jc-center">
      X
     </div>
    </div>
  );
}

export default App;
