import React, { useReducer } from 'react';


const initialState = {
  count: 0
}

const reducer = (state: any, action: any) => {
  switch (action.type) {

    case "INCREMENT":
      return {
        count: state.count + 1
      };

    case "DECREMENT":
      return {
        count: state.count - 1
      };

    case "RESET":
      return {
        count: 0
      }

    default:
      return initialState
  }
}
const App: React.FC = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
    </button>

      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
    </button>

      <button
        onClick={() => dispatch({ type: "RESET" })} >Reset</button>

    </div>
  );
}

export default App;
