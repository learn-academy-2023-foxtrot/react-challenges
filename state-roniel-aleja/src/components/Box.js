import React, {useState} from "react"

const Box = () => {
    const [color, setColor] = useState("white")
    const colors = ["Blue", "Red", "Yellow", "Pink"]
    
    const changeColors = () => {
        const random = Math.floor(Math.random() * 3)
        setColor(colors[random])
        
    }
    return (
        <>
        <div className="box" style= {{backgroundColor: color}} >
            <p>
            {color}  
            </p>
        <button onClick={changeColors} className="button">Change Colors</button>
        </div>
        
        </>
    )
}


export default Box