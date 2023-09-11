const ColorSwitcher = () => {
    const [color, setColor] = useState("white")

    const changeColor = () => {
        setColor(color )
      }
      return (
        <>
          <p style={{ color: color }}> Color: {color} </p>
          <button onClick={setColor} style={{ backgroundColor: "white" }}> Change color </button>
        </>
      )
    }