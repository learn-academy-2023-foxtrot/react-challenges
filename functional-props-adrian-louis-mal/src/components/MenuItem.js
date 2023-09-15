import React from "react";

const MenuItem = (props) => {
 
    return (
        <>
        <ul>
      {props.menu.map((item, index) => 
      <div key={index}>
            <button onClick={() => props.increaseAmount(index)}>Add</button>    
          <li>{item.entree} -- price: $ {item.price} -- amount {item.amount}</li>
      </div>
        )}
      </ul>
        </>
    )
}

export default MenuItem