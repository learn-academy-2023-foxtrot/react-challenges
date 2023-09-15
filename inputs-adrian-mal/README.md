LISTENER ROBOT CHALLENGE

function name: changeHandler
input: DOM event (object)
output: user text (string)
process: event handler function that receives text by state hooks 

```js
const App = () => {
    const [input, setInput] = useState("type text")
    const changeHandler = (e) => {
        const inputText = (event.target.value) 
        setInput(inputText)
    return (
        <div className = "app">
        <h2>RoboActiveListening</h2>
        <input type = "text" value = {input} onChange = {changeHandler} placeholder = "enter text" />
        </div>
    )
    }
}
```
new component
function name: BadRobot
```js
const changeInput = (text) => {
    return text.replace(/./g, "BLABL")
}
return (
    <div>
    <p>{changeInput{input}}</p>
    </div>
)
```
for each character input, output one character of string "BLABL"
