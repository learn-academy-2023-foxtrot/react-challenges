import React, {useState} from "react"
import Dice from "./components/Dice.js"
// import Rolls from "./components/Rolls.js"
import './App.css'

const App = () => {
const numbers = [1, 2, 3, 4, 5, 6]
const [number, setNumber] = useState(numbers[0])

const triggerNextNumber = () => {
  let nextNumber = Math.floor(Math.random)
  setNumber("TriggerNextNumber:", numbers[nextNumber])
}
console.log(triggerNextNumber);
return (
  <>
    <h1>Dice Roller</h1>
    <div className = "box-flex" onClick={triggerNextNumber}><Dice /></div>
  </>
)  

}

export default App;
