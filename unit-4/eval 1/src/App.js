import Slide from "./Components/Slide";
import "./styles.css";
import React, {useState} from "react";

// set this as the


export default function App() {
  const data = [
    {
      id: 1,
      title: "Intro to React",
      description: "React is a Javascript UI library"
    },
    {
      id: 2,
      title: "Intro to Props",
      description: "Props are just properties"
    },
    {
      id: 3,
      title: "Sate management",
      description: "Learn how to manage state"
    }
  ];
  const[page, setPage] = useState(0);
  const[info, setInfo] = useState(data.slice(0,1))

  const Previous =() => {
    if(page>0) {
      setPage(page -1)
      const nextdata = data.splice(page-1, 1)
      setInfo(nextdata)
    }
  }

  const Next =() => {
  if(page<2) {
    setPage(page +1)
    const nextdata = data.splice(page+1, 1)
    setInfo(nextdata)
  }
  }
  return (
    <div className="App">
      <h1 data-testid="header">Slides</h1>
      <Slide detail={info}/>
      <button data-testid="prev" onClick={Previous}>Prev</button>
      <button data-testid="next" onClick={Next}>Next</button>
    </div>
  );
}
