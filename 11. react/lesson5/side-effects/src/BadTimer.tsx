import React, { useEffect, useState } from "react";

const BadTimer: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const id = setInterval(() => 
    {
        console.log("Interval running...");
        setCount((prev) => prev + 1);
    }, 1000);

    console.log("Interval started:", id);
  }, []);

  console.log("Bad timer:", count);

  return <div>Count in Bad Timer: {count}</div>;
};

export default BadTimer;