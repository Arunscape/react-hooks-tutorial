import React, { useState, useEffect } from 'react'
import { functionTypeParam } from '@babel/types';
import { watch } from 'fs';

const App: React.FC = () => {

  const [count, setCount] = useState(0)
  const [isOn, toggleOn] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [online, setOnlineStatus] = useState(navigator.onLine)
  const [{ lat, lon, speed }, setLocation] = useState({ lat: 0, lon: 0, speed: 0 })
  let mounted = true; //because handlegeolocation doesn't have a nice way to unsubscribe


  const handleMouseMove = (event: { pageX: number, pageY: number }) => setMousePosition({ x: event.pageX, y: event.pageY })
  const handleOnline = () => setOnlineStatus(true)
  const handleOffline = () => setOnlineStatus(false)
  const handleGeolocation = (event: any) => {

    if (!mounted) { return }

    setLocation(
      {
        lat: event.coords.longitude,
        lon: event.coords.longitude,
        speed: event.coords.speed
      })

  }

  // useeffect is called on every render
  useEffect(() => {
    document.title = `You clicked ${count} times`

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    navigator.geolocation.getCurrentPosition(handleGeolocation)
    const watchId = navigator.geolocation.watchPosition(handleGeolocation)

    // tell useeffect to do something before unmount, works like componentWillUnmount on steroids
    // will run when the component unmounts AND before re-render
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
      navigator.geolocation.clearWatch(watchId)
      mounted = false;


    }
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

      <h2>Network status</h2>
      <p>You are {online ? 'online' : 'offline'}.</p>

      <h2>Geolocation</h2>
      <p>Your lattitude is {lat}</p>
      <p>Your longitude is {lon}</p>
      <p>Your speed is {speed} </p>
    </>
  )

}

export default App;