import { useEffect, useState } from "react";
import './App.css';

type Listener = (v: number) => void;
// (v: number) => {
//   console.log(v);
// }

let listener: Listener | undefined;
let value = 0;

function subscribe(callback: Listener) 
{
    listener = callback;
    return () => 
    {
        listener = undefined;
    };
}

function increment() 
{
    value++;
    if (listener) 
        listener(value);
}


export default function App() 
{
    const [count, setCount] = useState(0);

    useEffect(() => {
        const unsubscribe = subscribe(setCount);

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        </div>
    );
}