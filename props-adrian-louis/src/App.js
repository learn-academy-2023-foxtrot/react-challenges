import React,{useState} from "react"
import "./App.css"
import Dice from "./components/Dice.js"
import Rolls from "./components/Rolls.js"
import Dice1 from "./assets/1-dice.png"
import Dice2 from "./assets/2-dice.png"
import Dice3 from "./assets/3-dice.png"
import Dice4 from "./assets/4-dice.png"
import Dice5 from "./assets/5-dice.png"
import Dice6 from "./assets/6-dice.png"

const App = () => {

  const [startRoll, setCurrentRoll] = useState (0)
  const [clearButton, setResetButton] = useState ([])


  const rollDice = () => {
    let diceGen = Math.floor(Math.random() *  6)+1
    setCurrentRoll(diceGen);
    setResetButton((prevRoll) => [...prevRoll, diceGen]);
  }

  const resetDice = () => {
    setResetButton([])
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