🤖 Challenge: Listening Robot

As a developer, you are tasked with creating an application where three "robots" are listening to the text that a user types. As the user types, each robot responds in real time with a different modification to the input.

When creating a project, it is important to think about organizing your code so that you are not repeating yourself unnecessarily. It is a best practice to separate and compartmentalize all the actions in your code. In this application, App.js will handle the state values, inputs, and event listener method. Each robot will be in its own presentational component. The state value can be passed to the nested components where the individualized manipulation of words can be handled by each robot.

Pseudocode:
input: user string input
output: a string
process: make three different bots. Two with the user's exact input. The third uses the length of the string to return blablabla. We will use string iinterpolation 


📚 User Stories

As a user, I can see a landing page with heading and a text input.
As a user, I see titles of three robots waiting for my text.
As a user, I see my "Good Robot" repeating exactly what I type in real time.
As a user, I see my "Bad Robot" saying "BLABLA....." One character for every character I type in real time.
For example, a user input of "robot" would return "BLABL".
As a user, I see a third robot that modifies the input as per the developer's choice in real time.
🏔 Stretch Goals

As a user, I see a fourth robot that modifies the input as per the developer's choice in real time.
As a user, I can see pleasant stylings on the application.
👩‍💻 Developer Stretch Goals

As a developer, I have a well commented application.
As a developer, I have well written README file with instructions on how to access my repository.
As a developer, my variables are all named semantically.
As a developer, I have refactored and efficient code.
As a developer, I have my application deployed as a live website.