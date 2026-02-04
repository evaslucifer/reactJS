import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Cards";

function App() {
  const [count, setCount] = useState(0);

  let newArr = [1, 2, 3, 4];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">tailwind test</h1>
      <Card username="himanish" btnText="click me" />
      <Card username="Sanchita" btnText="visit Me" />
    </>
  );
}

export default App;
