import React, {useState} from "react"
import GoodRobot from "./components/GoodRobot"
import BadRobot from "./components/BadRobot"
import ReginaGeorgeBot from "./components/ReginaGeorgeBot"

const App = () => {

  return(
    <>
    <h1>
      Robo Active Listening
    </h1>
    <input 
    type="text"
    />
    <GoodRobot />
    <BadRobot />
    <ReginaGeorgeBot />
    </>
  )
}

export default App