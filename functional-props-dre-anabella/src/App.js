import React, {useState} from "react";
import './App.css'

const App = () => {
  const [menu, setMenu] = useState([
    {entree: "shrimp tempura", amount: 85}, 
    {entree: "sashimi", amount: 90}, 
    {entree: "volcano roll", amount: 70},
    {entree: "seaweed salad", amount: 50}
  ])

  return (
    <>
    <div className="background">
      <h1 className="header">Dranabella's Gourmet Sushi</h1>
      <ul>
        <h2 className= "menu">{menu.map((item, index) => {
          return (
            <li key={index}>{item.entree} -- amount: $ {item.amount}</li>
          )
        })}</h2>
      </ul>
    </div>
    </>


    );
}

export default App;


// PLAN:
// -we need to create an unordered list (with the prices of each item) this means that we need an object
// -we will use state to make an array inside of an object 
// -we will use .map to iterate through the array to display our menu items

// -useState needs to live in App.js
// -we will need to create a component where map can live. 
// -we need to use props to share useState with the component menu
// -we then need to use functional props to return .map to App.js

// Pseudo:
// input: object 
// output: unordered list of the menu items
// process: use .map to iterate through the array to display our menu items, use dot notation to access the values within the object and return the unordered list. 