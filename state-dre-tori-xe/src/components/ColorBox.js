import React, {useState} from 'react'


const ColorBox = () => {
    // const [count, setCount] = useState(0)
    const [color, setColor] = useState("white")
    const colorsArray = ["blue", "purple", "red", "gold", "grey"]
//    console.log(colorsArray.length)

    // const clicker = () => {
    //     setCount(count + 1)

    const generateColor = () => {
        const randomColor = Math.floor(Math.random()*colorsArray.length);
        console.log(randomColor)
        setColor(colorsArray[randomColor])
    }
   
                
    return ( 
         <>
            {/* <div onClick={clicker} className="box-counter">
                <p>Count{count}</p>
            </div> */}
            {/* <div>
                <button className = "button" onClick={generateColor}>Generate random color</button>
            </div> */}
            <div className = "box" onClick = {generateColor}>
                {color} 
            </div>
        </>

    ) 

}

export default ColorBox