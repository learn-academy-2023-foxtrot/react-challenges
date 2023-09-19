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

       <ul>
      {props.menu.map((item, index) => 
      <div key={index}>
            <button onClick={() => props.increaseAmount(index)}>Add</button>    
          <li>{item.entree} -- price: {item.price} -- amount {item.amount}</li>
          <button onClick={() => props.increasePrice(index)}>Calculate Price</button>
      </div>
        )}
      </ul>