import React, { useState } from "react";
import MenuItem from "./components/MenuItem";
import Order from "./components/Order"


const App = () => {
  const [menu, setMenu] = useState([
    {entree: "functionFries", price: 2, amount: 0},
    {entree: "byteBurger", price: 4, amount: 0},
    {entree: "methodShake", price: 3, amount: 0}
  ])
  
  const increaseAmount = (index) => {
    const updatedMenu = [...menu]
    updatedMenu[index].amount += 1;
    setMenu(updatedMenu)
  }  

const increasePrice = (index) => {
  const subtotal = 0
  menu.forEach((item) => {
    subtotal += item.price * item.amount
  })
  const rate = 0.1;
  const salesTax = subtotal * rate
  const totalCost = subtotal + salesTax

  return{
    subtotal: subtotal.toFixed(2),
    salesTax: salesTax.toFixed(2),
    totalCost: totalCost.toFixed(2)
  }
}  
  return (
    <>
      <h1>Coder Cafe</h1>
      <MenuItem menu={menu} increaseAmount={increaseAmount} increasePrice={increasePrice}/>
      <Order selectedItems = {menu} increasePrice = {increasePrice} />
    </>
  )
}
export default App