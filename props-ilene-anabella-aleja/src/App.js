import React, {useState} from 'react';
import Dice from "./components/Dice"
import Rolls from "./components/Rolls"
import './App.css';

const App = () => {
  const numbers = [1, 2, 3, 4, 5, 6]
  const [currentNumber, setCurrentNumber] = useState("Click the button to roll the dice")
  // console.log(currentNumber)

  const triggerRandomNum = () => {
     setCurrentNumber(Math.floor(Math.random()*7))
  }
  console.log(Math.floor(Math.random()*7))
return (
  <>
  <h1>Dice Roll Application</h1>
  <Dice 
    triggerRandomNum={triggerRandomNum}
    currentNumber={currentNumber} 
  /> 

  </>
)

}


export default App;
