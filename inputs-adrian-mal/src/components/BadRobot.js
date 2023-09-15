import React from "react"

const BadRobot = ({input}) => {
    const changeInput = (text) => {
        return text.replace(/./g, ["B", "L", "A", "H"])
    }
    return (
        <div>
    <p>{changeInput(input)}</p>
    </div>
    )
}

export default BadRobot