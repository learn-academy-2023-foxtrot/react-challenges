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
  const boxes = []
    for (let i=0; i < boxCount; i++) {
      boxes.push(<SquareBox key={i} />)
    }
  return (
    <>
    <h2>Challenge: Color Box</h2>
    <button onClick = {addBox}>Add Box</button>
    <button onClick = {removeBox}>Remove Box</button>
    {boxes}
    <SquareBox />
    
    
    </>
  )
}

export default App;
