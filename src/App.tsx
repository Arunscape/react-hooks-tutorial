import React, { useState } from 'react'

const App: React.FC = () => {

  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      I was clicked {count} times!
        </button>
  )
}

export default App;