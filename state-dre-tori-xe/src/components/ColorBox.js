import React, {useState} from 'react'


const ColorBox = () => {
    const [count, setCount] = useState(0)
    // const [color, setColor] = useState("White")
    // var randomColor = Math.floor(Math.random()*16777215);

    const clicker = () => {
        setCount(count + 1)
 
}
        // const generateColor = () => {
        //     setColor(Math.random());
        // };
        // return {generateColor};
    
    return ( 
        <>
        <div onClick={clicker} className="box-counter">
            <p>Count{count}</p>
        </div>
        </>

    ) 
 }

export default ColorBox