import "./styles.css";
import data from "./utils/data.json";
import Video from "./Components/video/Video.jsx";
import Users from "./Components/users/Users";

export default function App() {

  return (
    <div className="App">
     <Video />
     <Users />
    </div>
  );
}
