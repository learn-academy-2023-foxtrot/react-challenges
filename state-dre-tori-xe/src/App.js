import React from 'react'
import ColorBox from './components/ColorBox.js'
import './App.css'

const App = () => {
  return (
    <>
      <h2>Color Box</h2>
      <div className="clicker">
        <ColorBox />
        {/* <ColorBox /> */}
        {/* <ColorBox /> */}
      </div>
    </>
  )
}

export default App