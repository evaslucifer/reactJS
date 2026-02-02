import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  // let value = 0;

  const addValue = () => {
    // counter += 1;
    setCounter(counter + 1);
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(counter);
    }
  };
  return (
    <>
      <h2>counter value :{counter}</h2>
      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
