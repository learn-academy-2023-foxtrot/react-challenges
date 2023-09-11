import React from 'react'
import './App.css'
import ColorBox from './components/ColorBox.js'
import useGenerateRandomColor from './components/useGenerateRandomColor'

const App = () => {
  return (
    <>
      <h2>Color Box</h2>
      <div className="clicker">
        <ColorBox />
        <ColorBox />
        <ColorBox />
      </div>
      const { color, generateColor }
        = useGenerateRandomColor();
      <div>
      <button
                style={{
                    padding: "40px",
                    borderRadius: "10px",
                    backgroundImage:
                        "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
                    fontSize: "larger",
                }}
                onClick={generateColor}
            >
                Generate random color
            </button>
      </div>
    </>
  )
}

export default App