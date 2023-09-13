import React from "react"

const Dice = (props) => {
  console.log(props);
  return(
    <div className="dice-block">
      <button onClick={props.triggerRandomNum}>
        Click the button to roll the dice
      </button>
      {props.currentNumber}
    </div>
  ) 
}







export default Dice