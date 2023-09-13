import React, {useState} from 'react';
import Dice from "./components/Dice"
import Rolls from "./components/Rolls"
import './App.css';

const App = () => {
  const numbers = [1, 2, 3, 4, 5, 6]
  const [currentNumber, setCurrentNumber] = useState()
  // console.log(currentNumber)
return (
  <>
  <h1>Dice Roll Application</h1>
  <Dice currentNumber={currentNumber}/> 

  
  </>
)

}


export default App;
