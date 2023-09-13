### Challenges 
As a user, I can see a square box on the screen with a black border and a white background. - DONE
As a user, I can click on the box to roll the dice and see the result of my roll in the box. - DONE
As a user, I can see my roll logged and see the roll log continue to grow as I roll the dice.
### Stretch Goals
As a user, I can see the image of a dice face when I roll the dice.
As a user, I can click a restart button that clears my roll log.

--- IDEAS: 
- input: create an array of numbers is the input of the function - DONE
- output: a random number to show up in the box - DONE
- process:
- on click is the trigger of the function "diceRoller"
- we need to iterate through the array with .map()
- and return a random full number
- the react part: currentNumber, serCurrentNumber 
-created a state
-created a function to trigger a random number and inside of that function we set the current number to a random number
-made the onClick work to show the random numbers
- inside the const App, in the dice element we defined the props
-we need to create a list to log the numbers generated from the dice, and then show those numbers in another box (rolls)