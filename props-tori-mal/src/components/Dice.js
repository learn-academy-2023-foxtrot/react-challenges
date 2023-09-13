import React, { useState } from "react"


const Dice = () => {
    const [number, setNumber] = useState()
    const diceSidesArray = [1, 2, 3, 4, 5, 6]
    const rollDice = () => {
        const randomNumber = Math.floor(Math.random()*diceSidesArray.length)
        console.log(randomNumber)
        setNumber(diceSidesArray[randomNumber])
    }
    return (
    <>
    <div className = "dicebox" onClick = {rollDice}>
    {number}</div>
    </>
    )
}

export default Dice