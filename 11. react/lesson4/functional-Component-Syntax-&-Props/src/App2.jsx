import './App.css'

function App() 
{
  const numbers = [3, 2, 1];

  return(
    <>

    <ul>
      {numbers.map(num => (
        <li>{num}</li>
      ))}
    </ul>

    </>
  );
}

export default App