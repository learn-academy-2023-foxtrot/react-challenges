import React from "react"

const Order = (props) => {
    const totalCost = props.increasePrice
    const selectItemsWithAmount = props.selectedItems.map((item, index) => {
        if (item.amount > 0){
        return(
            <li key={index}>
                {item.entree} -- total: {item.price} = $ {item.price * item.amount}
            </li>
            ) 
        }
      return null      
})
    return (
        <>
        <h2>Your Order</h2>
        <ul>
            {selectItemsWithAmount}
        </ul>
        <h3>Order Summary</h3>
        <p>Subtotal: $ {totalCost.rate}</p>
        <p>Sales Tax: $ {totalCost.salesTax}</p>
        <p>Total: $ {totalCost.totalCost}</p>
        </>
    )
}

export default Order