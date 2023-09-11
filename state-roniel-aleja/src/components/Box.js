import React, {useState} from "react"

const Box = () => {
    const [color, setColor] = useState("White")
    const colors = ["Blue", "Red", "Yellow", "Pink"]
    const changeColors = () => {
        const random = Math.floor(Math.random() * 3)
        setColor(colors[random])
    }
    return (
        <>
        <div className="box">
            <p>
            {color}  
            </p>
        <button onClick={changeColors}>Change Colors</button>
        </div>
        
        </>
    )
}


export default Box