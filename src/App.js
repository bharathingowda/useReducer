import "./styles.css";
import React, { useReducer } from "react";

export default function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return {
          count: state.count + 1,
          showToggleText: !state.showToggleText
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showToggleText: true
  });

  return (
    <div className="App">
      <h1>{state.count}</h1>
      <h1>
        <button
          onClick={() => {
            dispatch({ type: "Increment" });
          }}
        >
          click me
        </button>
      </h1>
      {state.showToggleText ? <p>Even Number</p> : <p>odd Number</p>}
    </div>
  );
}
