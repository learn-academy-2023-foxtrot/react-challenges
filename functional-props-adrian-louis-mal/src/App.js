import React, { useState } from "react";
import MenuItem from "./components/MenuItem";


const App = () => {
  const [menu, setMenu] = useState([
    {entree: "functionFries", price: 2, amount: 0},
    {entree: "byteBurger", price: 4, amount: 0},
    {entree: "methodShake", price: 3, amount: 0}
  ])
  
  const increaseAmount = (index) => {
    menu[index].amount += 1;
    setMenu([...menu])
  }  

const increasePrice = (index) => {
   const one = menu[index].price;
    menu[index].price + {one};
    setMenu([...menu])
  }  

  return (
    <>
      <h1>Coder Cafe</h1>
      <MenuItem menu={menu} increaseAmount={increaseAmount} increasePrice={increasePrice}/>
    </>
  )
}
export default App