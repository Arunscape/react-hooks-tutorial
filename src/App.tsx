import React, { useState, useEffect } from 'react'

const App: React.FC = () => {

  const [count, setCount] = useState(0)
  const [isOn, toggleOn] = useState(false)


  // useeffect is called on every render
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <>
      <h2>Counter</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        I was clicked {count} times!
      </button>
      <h2>Toggle this</h2>
      <img
        style={{
          height: "50px",
          width: "50px"
        }}
        src={isOn ? 'https://icon.now.sh/highlight/fd0' : 'https://icon.now.sh/highlight/aaa'}

        onClick={() => toggleOn((prev) => !prev)}
        alt="Flashlight"
      />
    </>
  )

}

export default App;