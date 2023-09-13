import React from "react"

const Dice = ({rollDice, startRoll}) => {
    return ( 
        <div className="DiceContainer" onClick={rollDice}>
        {startRoll}
        </div>
        
    )
}   
export default Dice