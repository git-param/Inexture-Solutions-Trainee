import './App.css';
import { useState } from 'react';
import Chat from './components/Chat';

function App() 
{
  const [person, setPerson] = useState("Alice");

  return (
    <>
      <button onClick={() => setPerson("Alice")}>Alice</button>
      <button onClick={() => setPerson("Bob")}>Bob</button>

      <Chat person={person} />
      <Chat person={person} key={person}/>
    </>
  );
}

export default App;