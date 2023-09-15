import React, {useState} from "react"
import GoodRobot from "./components/GoodRobot"
import BadRobot from "./components/BadRobot"
import ReginaGeorgeBot from "./components/ReginaGeorgeBot"

const App = () => {
  const[userInput, setUserInput] = useState("Type what you want to say")
  const manageChanges = (e) => {
    setUserInput(e.target.value)
    console.log(e.target.value)
  }

  return(
    <>
    <h1>
      Robo Active Listening
    </h1>
    <input 
      type="text"
      onChange={manageChanges}
    />
    <GoodRobot />
    <BadRobot />
    <ReginaGeorgeBot />
    </>
  )
}

export default App