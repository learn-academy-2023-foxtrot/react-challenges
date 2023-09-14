import React, {useState} from "react"
import MenuItem from "./components/MenuItem"
import Prices from "./components/Prices"

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
  array.map()
  // 14.99 * 2 = 29.98
  // 3.00 * 2 = 6.00
  // 29.98 + 6.00 = $35.98
}
  return (
    <>
      <h1>The Chum Bucket</h1>
      <MenuItem menu={menu} increaseNumber={increaseNumber} />
      <Prices menu={menu} totalPrice={totalPrice}/>
    </>
  )
}
export default App