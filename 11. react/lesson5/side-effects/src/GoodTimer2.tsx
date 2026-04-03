import React, { useEffect, useState } from "react";

const TimerControl: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);

  useEffect(() => {
    if (running) 
        return;

    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, [running]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
    </div>
  );
};

export default TimerControl;