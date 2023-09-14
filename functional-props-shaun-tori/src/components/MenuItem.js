import React from "react"

const MenuItem = (props) => {
    return (
        <>
        <ul>
            {props.menu.map((item, index) =>
            <div key={index}>
                <li> {item.entree} --${item.price} -- amount: {item.amount} </li>
                <button onClick={() => props.increaseNumber(index)}>Increase Number</button>
            </div>
            )}
        </ul>
        </>
    )
}
export default MenuItem