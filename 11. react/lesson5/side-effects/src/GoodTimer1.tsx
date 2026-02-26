import React, { useEffect, useState } from "react";

const BadTimer: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("Interval running...");
      setCount((prev) => prev + 1);
    }, 1000);

    console.log("Interval started:", id);

    return () => {
      console.log("Clearing interval:", id);
      clearInterval(id);
    };
  }, []);

  console.log("Timer count:", count);

  return <div>Count in Timer: {count}</div>;
};

export default BadTimer;