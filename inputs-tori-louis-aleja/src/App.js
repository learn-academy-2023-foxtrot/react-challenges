import React, {useState} from "react"
import './App.css';
import GoodBot from "./components/GoodBot"
import BadBot from "./components/BadBot"
import RudeBot from "./components/RudeBot"

const App = () =>{
  const [userInput, setUserInput] = useState (" ")

  const botPhrase = (e) => {
    let input = e.target.value
    setUserInput(input)
    setUserInput(`I hear you saying: ${input}. Is that correct?`)
  }
  
  
  return (
    <>
    <h1>Robot active listening</h1>
    <h2><input onChange={botPhrase}/>{userInput}</h2>
    <GoodBot />
    
    <BadBot />
    <RudeBot />
    </>
  )
}


export default App;
