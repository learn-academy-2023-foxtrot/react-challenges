📚 User Stories
1) As a user, I can see a landing page with heading and a text input. 
- on App.js we can add an h1 and add a simple heading "Robot active listening"
- add an input tag with the type="text"
2) As a user, I see titles of three robots waiting for my text.
- create an unordered list and then list item for each robot (this is done in App.js) and we call the output individually in each component
- each component is going to have its onw input text 
As a user, I see my "Good Robot" repeating exactly what I type in real time.
- create a veriable with usestate 
const [userInput, setUserInput] = useState ("Say Something") 
- create a function in the App.js 
- 
const botPhrase = (e) => {
    let input = e.target.value
    setUserInput(`I hear you saying ${input} is that correct?`)
}

As a user, I see my "Bad Robot" saying "BLABLA....." One character for every character I type in real time.
For example, a user input of "robot" would return "BLABL".
As a user, I see a third robot that modifies the input as per the developer's choice in real time.