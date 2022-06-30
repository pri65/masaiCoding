
import './App.css';
import squareComponent from './Components/squareComponent';

function App() {
  return (
    <div className="app-header">
     <p className="heading-text">Tic Tac Toe</p>
     <div className="row jc-center">
      <squareComponent />
      <squareComponent />
      <squareComponent />
     </div>
     <div className="row jc-center">
     <squareComponent />
      <squareComponent />
      <squareComponent />
     </div>
     <div className="row jc-center">
     <squareComponent />
      <squareComponent />
      <squareComponent />
     </div>
    </div>
  );
}

export default App;
