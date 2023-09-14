import React, { useState } from 'react';
import MenuMeal from "./component/MenuMeal"
import './App.css'
import Order from "./component/Order"

const App = () => {
  const [menu, setMenu] = useState([
    {meal:"cocopuffs", price:100},
    {meal:"granola", price:200},
    {meal:"banana", price:1}])
// we need a storage for our orders []

const [orders, setOrders] = useState([])
const addItem = (index) => {
  // this function will be triggered by the onClick to send the menu item into our orders array
  orders[index] += 1
  setOrders([...orders])
  // menu[index] into our orders array
  // setOrders([...orders])
  // the set should be for the order not menu because we are adding it into the orders array
}

  return (
    <>
    <h1>Menu </h1>
    <MenuMeal menu={menu} addItem={addItem} />
    {/* passing whats inside of orders array to order component */}
    <Order  orders={orders} />
    </>
  )
}

export default App;
