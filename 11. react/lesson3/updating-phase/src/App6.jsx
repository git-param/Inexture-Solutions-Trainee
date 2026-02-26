import { useState } from "react";
import './App.css';
import Clock from "./component/Clock";

function App() {
  const [start, setStart] = useState(false);

  return (
    <>
      <button onClick={() => setStart(true)}>
        Start Clock
      </button>
      {start && <Clock />}
    </>
  );
}


export default App;