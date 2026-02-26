import { useState } from "react";
import './App.css';
import Profile from "./components/Profile";

function App() 
{
  const [user, setUser] = useState("A");

  return (
    <>
      <button onClick={() => setUser("A")}>User A</button> <span>----- </span>                
      <button onClick={() => setUser("B")}>User B</button>

      <Profile name={user} />
      <Profile key={user} name={user} />
    </>
  );
}

export default App;