import React, { useState, useEffect } from 'react'

const App: React.FC = () => {

  const [count, setCount] = useState(0)
  const [isOn, toggleOn] = useState(false)

  interface mousePosition {
    x: number,
    y: number
  }
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })


  const handleMouseMove = (event: { pageX: number, pageY: number }) => setMousePosition({ x: event.pageX, y: event.pageY })

  // useeffect is called on every render
  useEffect(() => {
    document.title = `You clicked ${count} times`

    window.addEventListener('mousemove', handleMouseMove)

    // tell useeffect to do something before unmount, works like componentWillUnmount on steroids
    // will run when the component unmounts AND before re-render
    return () => window.removeEventListener('mousemove', handleMouseMove)
  },
    [count] // empty list will only run component mount and unmount but now it also run when count changes
  )

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
      <h2>Mouse Position</h2>
      <p>X position: {mousePosition.x}</p>
      <p>Y position: {mousePosition.y}</p>
    </>
  )

}

export default App;