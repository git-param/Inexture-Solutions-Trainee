import { useState } from "react";

function Propsdemo({ name })
{
    const [count, setCount] = useState(0);

    return(
        <>
            <h1>Hello {name}!</h1>
            <h2>Current count: {count}</h2>
            <button onClick={() => setCount(prev => prev + 1)}>
                Press Here
            </button>
        </>
    );
}

export default Propsdemo;