import React from "react"


const Dice = (props) => {
    return (
        <>
            <div className = "dicebox" onClick = {props.rollDice}>
            {props.number}
            </div>
        </>
    )
}

export default Dice