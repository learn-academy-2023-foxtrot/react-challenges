import React, {useState} from "react"
import "./App.css"

// const App = () => {
  // const colors = ["white", "red", "orange", "yellow", "green", "blue", "purple", "pink"]
  // const [currentColorIndex, setCurrentColorIndex] = useState(0)
  // const switchColor = () => {
  //   setCurrentColorIndex(currentColorIndex + 1)
  // }
//   return (
//     <>
//       <h1>Color Switcher</h1>
//       <div className="color-box">{setCurrentColorIndex}</div>
//       <p> colors: {colors} </p>
//       <button onClick={switchColor} style={{ backgroundColor: "white" }}> Change color </button>
//     </>
//   )
// }
// export default App

const App = () => {
  const colors = ["white", "red", "orange", "yellow", "green", "blue", "purple", "pink"] = useState (0)
  return (
    <>
  <h1> Color Box </h1>
  <p> Colors: {colors} </p>
  < button.color-box {
    border: 2px solid black;
    height: 200px;
    width: 200px > Turn on Color </button>

      <Tracker />
      <h2> Red: </h2>
      <Tracker />
      <h2> Orange: </h2>
      <Tracker />
      <h2> Yellow: </h2>
      <Tracker />
      <h2> Green: </h2>
      <Tracker />
      <h2> Blue: </h2>
      <Tracker />
      <h2> Purple: </h2>
      <Tracker />
      <h2> Pink: </h2>
      <Tracker />
      </>
    )
  }


export default App