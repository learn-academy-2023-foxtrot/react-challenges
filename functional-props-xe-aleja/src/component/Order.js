import React from 'react'

const Order = (props) => {

    return (
        <>
        <div className='order-box'>
            {/* the menu item that was ordered */}
            {props.orders}
        </div>
        </>
    )
}

export default Order