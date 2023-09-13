import React from "react"


const Rolls = (props) => {
//    console.log(props)
    return(
    <>
        <div className = "box-two">
            Rolls
         {props.logNumber}
         {props.logRolls}
        </div>
    </>
    )
}

export default Rolls;
