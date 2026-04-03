import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() 
{
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   setCount(count + 1);
  // })

  useEffect(() => 
  {
    setCount(prev=>prev + 1);
    console.log(count);
  }, []);


  // useEffect(() => {
  //   setCount(count + 1);
  // }, [count])

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>  
    </>
  )
}

export default App
