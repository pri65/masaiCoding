import logo from './logo.svg';
import './App.css';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Skills items={["skill1","skill2","skill3"]}/>
    </div>
  );
}

export default App;
