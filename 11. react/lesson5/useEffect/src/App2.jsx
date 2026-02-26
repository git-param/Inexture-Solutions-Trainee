import './App.css';
import { useLayoutEffect } from 'react';
import { useState } from 'react';

let countCall=0;
let countCleanup=0;

function App()
{
    let [flag,setFlag]=useState(false);
    
    useLayoutEffect(()=>{
        console.log("Inside ue: ",flag,", count call: ",countCall);
        countCall++;
        return ()=>{
            console.log("Cleanup: ",flag,", count cleanup: ",countCleanup);
            countCleanup++;
        };
    },[]);
    return(
        <>
            <button onClick={()=>setFlag(!flag)}>Press</button>
            {console.log("Button: ",flag)}
        </>
    )
}

export default App;