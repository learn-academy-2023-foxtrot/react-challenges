import React from 'react'
import "./App.css"
import Dice from "./components/Dice"

const App = () => {
  return (
  <>
  <h1>Dice Roller</h1>
  <div className = "dicebox">
  <Dice />
  </div>
  </>
  )
}

export default App