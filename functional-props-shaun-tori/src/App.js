import React, {useState} from "react"
import MenuItem from "./components/MenuItem"


const App = () => {

const [menu, setMenu] = useState([
  {entree: "chum bucket", price: 14.99, amount: 0},
  {entree: "karen's cookies", price: 3.00, amount: 0},
  {entree: "seaweed salad", price: 8.00, amount: 0},
  {entree: "plankton's potatoes", price: 5.00, amount: 0}
])

const increaseNumber = (index) => {
  menu[index].amount += 1
  setMenu([...menu])
}

const totalPrice = (array) => {
  let total = array.map((value) => {
    return value.price * value.amount 
  })
  let sum = 0
  for(let i = 0; i < total.length; i++) {
    sum += total[i]
  }
  return sum  
}
  return (
    <>
      <h1>The Chum Bucket</h1>
      <MenuItem menu={menu} increaseNumber={increaseNumber} />
      <h2>Total Price: ${totalPrice(menu)}</h2>
    </>
  )
}
export default App