### Challenge: Food Ordering App
- As a developer, you are tasked with creating a food ordering application in React. This is the first iteration of an application that is going to be much larger in the future so it is important to create a solid foundation from which the code base can grow.

- The menu UI will be in its own component as will the order UI. App.js controls of all the data in state, renders the other components, and passes data to the menu and the order component.
------ PLANNING STAGE------
- create an array of objects and we will pass a key value of the food and the price

const [menu, setMenu] = useState([{}])


### User Stories
As a user, I can see an application that has a list of food items and the price of each item.
Hint: Take some time to think about the data structure that will allow you to effectively store the required information.
As a user, I can click a button to select an item I wish to order.
 - create a button that allows the user to select what they want to order next to the items price


As a user, I can see the selected items displayed on the page.
- we want to create an array that holds the items that the user selects
- and we want that item to show up in the order box/component
- add the menu item into the array with 


