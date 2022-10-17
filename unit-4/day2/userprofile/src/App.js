import logo from './logo.svg';
import './App.css';
import UserProfile from './Components/UserProfile';

function App() {
  return (
    <div >
     <UserProfile
     name="Priyanaka" 
     avatar_url=""
     title="Software"
    skillsets={[{icon:"healt", description:"she is good"}, {icon:"healt", description:"she is good"}]}
     />
    </div>
  );
}

export default App;
