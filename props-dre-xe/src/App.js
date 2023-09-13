import React, {useState} from "react"
import Dice from "./components/Dice.js"
import Rolls from "./components/Rolls.js"
import './App.css'

const App = () => {
  const numbers = [1, 2, 3, 4, 5, 6]
  const [number, setNumber] = useState(numbers[0])
  const [logNumber, setLogNumber] = useState([])

  const triggerNextNumber = () => {
    let nextNumber = Math.floor(Math.random() * numbers.length)
    setNumber(numbers[nextNumber])
    let newArray = []
    // newArray.push(nextNumber)
    console.log(newArray, "newArray")
    setLogNumber(...logNumber,nextNumber)
  }
  // console.log("TriggerNextNumber:", triggerNextNumber)
  
  // const logRolls = () => {
  //   let newArray = []
  //   newArray.push(triggerNextNumber())
  //   console.log(newArray, "newArray")
  //   setLogNumber(newArray)
  // }
  // console.log("logRolls", logRolls)
  
  return (
    <>
      <h1>Dice Roller</h1>
      <div className = "box-flex" onClick={triggerNextNumber}>
        <div className = "number-flex">
          <Dice  number={number} key={number} />
        </div>
        <div className = "box-flex">
          <Rolls 
          rolls={logNumber}
          // logRolls={logRolls}
          />
        </div>
      </div>
    </>
  )  

}

export default App;
