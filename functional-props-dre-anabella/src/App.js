import React, {useState} from "react";


const App = () => {
  const [menu, setMenu] = useState([
    {entree: "shrimp tempura", amount: 85}, 
    {entree: "sashimi", amount: 90}, 
    {entree: "volcano roll", amount: 70},
    {entree: "seaweed salad", amount: 50}
  ])

  return (
    <></>


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

Psuedo:
input