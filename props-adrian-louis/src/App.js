import React,{useState} from "react"
import "./App.css"
import Dice from "./components/Dice.js"
import Rolls from "./components/Rolls.js"


const App = () => {

  const [startRoll, setCurrentRoll] = useState (0)
  const [clearButton, setResetButton] = useState ([0])

  const rollDice = () => {
    let diceGen = Math.floor(Math.random() * 7)
    setCurrentRoll(diceGen)
    setResetButton((prevRoll)=> {
      const newRoll = prevRoll.slice()
      newRoll.push(diceGen)
      return newRoll
    })
  }

  const resetDice = () => {
    setResetButton([0])
  }
  return (

    <>
    <div className="App"> 
    <h1> dice </h1> 
      < Dice rollDice={rollDice} startRoll={startRoll}/>
      < Rolls clearButton={clearButton} resetDice={resetDice}/>
    </div>
    </>
  )
}
export default App