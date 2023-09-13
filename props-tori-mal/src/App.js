import React, { useState } from 'react'
import "./App.css"
import Dice from "./components/Dice"
import Counter from "./components/Counter"

const App = () => {
  const [number, setNumber] = useState("")
  const diceSidesArray = [1, 2, 3, 4, 5, 6]
  const [results, setResults] = useState([])
  const rollDice = () => {
    const randomNumber = Math.floor(Math.random()*diceSidesArray.length)
    console.log(randomNumber)
    setNumber(diceSidesArray[randomNumber])
    setResults([number, results].join(", "))
  }
  return (
    <>
      <h1>Dice Roller</h1>
      <div>
        <Dice rollDice={rollDice} number={number}/>
        <Counter results={results} />
      </div>
    </>
  )
}

export default App