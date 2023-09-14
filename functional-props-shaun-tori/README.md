###Create a food ordering system. It will be called The Chum Bucket. 
plan: 
- Build some funtional components

import React from "react"

const App = () => {
  return (
    <>

    </>
  )
}

export default App

- a react state to change the values of our array

import React, {useState} from "react"

const [menu, setMenu] = useState([
  {entree: "chum bucket", amount: 0},
  {entree: "karen's cookies", amount: 0},
  {entree: "seaweed salad", amount: 0},
  {entree: "plankton's potatoes", amount: 0}])
-Display:
    -.map to iterate though the menu items in our array
    -goal: we're trying to get the entree with the amount of each item bought 

    chum bucket -- amount: 0
   
    -container component: App.js

const MenuItem = () => {
  return (
    <>

    </>
  )
}

export default MenuItem

    -presentational component: This will hold all of our nested components

  <ul>
    {menu.map((item, index) =>
      <li key={index}> {item.entree} -- amount: {item.amount} </li>
    )}
  </ul>

  Pseudocode:
  input: the price and the amount in numbers
  output: total price, number
  process: multiply the prices by the amount, add the results together, return the total number with a dollar sign in front 
  