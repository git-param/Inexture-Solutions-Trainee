import './App.css'
import { useState } from 'react'
import Propsdemo from './components/Props-demo'

function App() 
{
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>
        Press to start counter
      </button>

      {show && <Propsdemo name="Param" />}
    </>
  )

//   function App({ isLoggedIn }) 
//   {
//     if (isLoggedIn) 
//       return <h1>Welcome</h1>;

//     return <h1>Please login</h1>;
//   }

    // {isLoggedIn ? <Dashboard /> : <Login />}
}

export default App