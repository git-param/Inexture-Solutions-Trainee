import {useState} from "react";

function App()
{
    const [cnt,func] = useState(0);
    return(
        <>
            <h1>{cnt}</h1>
            <button onClick={()=>{func(cnt+1)}}>Press to increase the count</button>
        </>
    )
}
export default App;