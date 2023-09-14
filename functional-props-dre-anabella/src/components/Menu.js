import React from "react"

const Menu = (props) => {
    return (
        <>
          <ul>
            <h2 className= "menu">
              {props.menu.map((item, index) => {
                return (
                  <div key={index}>
                    <li>{item.entree} -- amount: $ {item.amount}</li>
                  </div>
                )
              })}</h2>
          </ul>
        </>
    )
}
export default Menu 