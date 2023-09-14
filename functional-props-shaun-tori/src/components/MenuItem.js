import React from "react"

const MenuItem = (props) => {
    return (
        <>
        <ul>
            {props.menu.map((item, index) =>
            <div key={index}>
                <li> {item.entree} -- amount: {item.amount} </li>
                <button onClick={() => props.increaseNumber(index)}>Increaase Number</button>
            </div>
            )}
        </ul>
        </>
    )
}
export default MenuItem