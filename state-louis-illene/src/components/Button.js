import React, {useState} from "react"

const Button = () => {
    const [color, setColor] = useState("white")
    const colors = ["white", "pink", "black", "red", "blue", "purple", "green"]
    const addColor = () => { 
        let randomNum = Math.floor(Math.random() * colors.length)
            setColor(colors[randomNum])
    }
    return (
        <>
        <p> color: {color} </p> 
        <button onClick = {addColor}> color </button>
        
        
        </>
    )
}
export default Button