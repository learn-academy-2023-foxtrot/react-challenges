import React from "react"


const Dice = (props) => {
//    console.log(props)
    return(
    <>
        <div className = "box">
         {props.number}
        </div>
    </>
    )
}

export default Dice;
