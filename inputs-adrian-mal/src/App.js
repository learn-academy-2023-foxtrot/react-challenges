import React, { useState } from "react"
import "./App.css"
import BadRobot from "./components/BadRobot" 

const App = () => {
  const [input, setInput] = useState("type text")
  const changeHandler = (e) => {
      const inputText = e.target.value
      setInput(inputText)
  }
  return (
      <div className = "app">
      <h2>RoboActiveListening</h2>
      <input type = "text" value={input} onChange={changeHandler} placeholder="enter text" />
      <h3>🤖 GoodBot 🤖</h3>
      <p>{input}</p>
      <h3>😈 BadBot 😈</h3>
      <BadRobot input={input} />
      </div>
  )
  }


export default App