import React, { useState } from "react";
import BadTimer from "./BadTimer";
import GoodTimer from "./GoodTimer1";
import './App.css';
const App: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Unmount Timer" : "Mount Timer"}
      </button>

      {/* {show && <BadTimer />} */}
      {show && <GoodTimer />}
    </div>
  );
};

export default App;