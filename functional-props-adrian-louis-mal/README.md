Create a visible list of set food items and prices
Each item has a button to order and click to order

.map method will be used
state will be used to create objects
similar syntax props dice project

component name:
- functionFries = $2
- byteBurger = $4
- methodDotShake = $3


<h1>Coder Cafe</h1>
      <ul>
      {menu.map((item) => {
          <li>{item.entree} -- price: {item.price}</li>
        })}
      </ul>