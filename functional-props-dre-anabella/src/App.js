import React, {useState} from "react";
import './App.css'
import Menu from './components/Menu.js'
import Order from './components/Order.js'

const App = () => {
  const [menu, setMenu] = useState([
    {entree: "shrimp tempura", amount: 85}, 
    {entree: "sashimi", amount: 90}, 
    {entree: "volcano roll", amount: 70},
    {entree: "seaweed salad", amount: 50}
  ])
    // const addToOrder = (index) => {
    //   menu[index].entree
    //   setMenu([...menu])
    // }
  return (
    <>
    <div className="background">
      <h1 className="header">Dranabella's Gourmet Sushi</h1>
      <Menu menu={menu} /> 
      <Order /> 
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

// Pseudo:
// input: 
// output: 4 buttons
// process: 
// -we want to be able to click on one of 4 buttons to see each item
// -we want to place our button withiin the map function so that it iterates and creates a button for each menu item
// -we need to import the useState from App.js to menu.js
// -moving the .map function, using functional props to App.js

// PLAN:
// FOR ORDER COMPONENT:
// -we want to have the entree orders listed within the order box after they've been clicked on. 