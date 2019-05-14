import React, { useState } from 'react'

const App: React.FC = () => {

  const [count, setCount] = useState(0)
  const [isOn, toggleOn] = useState(false)

  return (
    <>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        I was clicked {count} times!
      </button>
      <h2>Toggle this</h2>
      <div style={{
        height: "50px",
        width: "50px",
        background: isOn ? "yellow" : "grey"
      }}
        onClick={() => toggleOn((prev) => !prev)}>

      </div>
    </>
  )

}

export default App;