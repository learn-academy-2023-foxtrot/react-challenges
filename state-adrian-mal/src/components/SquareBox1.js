import React, { useState }  from "react"

const SquareBox = () => {
    
    const colorNames = ['red', 'green','orange,', 'yellow', 'blue', 'pink']
    const [boxColors, setBoxColors] = useState('white');
    //const [displayColorName, setDisplayedColor] = useState(0);

    
    const grabColor = () => {
        const generateColors = Math.floor(Math.random() * colorNames.length);
         setBoxColors(colorNames[generateColors]);
    }

    /*
    const clickEvent = () => {
       if (setDisplayedColor === "true") {
        setBoxColors(grabColor());
       } else {
        setBoxColors(grabColor());
        setDisplayedColor(true)
       }
    }
*/
    

    return ( 
        <>
    
            <div className="box">
                <button onClick={grabColor}>Enter</button>
                {boxColors}
            </div>
            
        </>
    )
}
export default SquareBox