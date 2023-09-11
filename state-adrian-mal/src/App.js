import React, { useState } from "react"
import SquareBox from "./components/SquareBox1";
import "./App.css"
const App = () => {
  const [boxCount, setBoxCount] = useState(0);

  const addBox = () => {
    setBoxCount(boxCount + 1);
  };

  const removeBox = () => {
    if (boxCount > 0) {
      setBoxCount(boxCount - 1);
    }
  }
  
 
  //create new box;
  

  return (
    <>
    <h2>Challenge: Color Box</h2>
    <button>Add Box</button>
    <button>Remove Box</button>
    
    <SquareBox />
    
    
    </>
  )
}

export default App;
