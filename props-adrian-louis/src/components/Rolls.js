import React from "react"
const Rolls = ({clearButton, resetDice}) => {
    return (
        <>
        <div className="Rolls">
        <button onClick={resetDice}>Clear</button> 
        <ul>
            {clearButton.map((roll, index) => (
                <li key={index}>{roll}</li>
            ))}
        </ul>
        <h1>Roll Counter</h1>    
        </div> 
        </>
    )

}

export default Rolls