import './App.css';
import Timer from './component/Timer1';
import { useState } from "react";
import React from 'react';

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <>
      {flag && <Timer />}
      <button onClick={() => setFlag(false)}>
        Click to unmount the Component
      </button>
    </>
  );
}

export default App;