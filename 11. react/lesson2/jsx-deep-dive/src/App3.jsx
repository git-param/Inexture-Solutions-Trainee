import './App.css'

function App() {
  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <div>
      <h1>Fruits</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

// React requires key when rendering lists.
// Why?
// Because during reconciliation (diffing):
// React needs stable identity
// Helps optimize updates
// Index is not ideal in real apps, but fine for learning.

export default App
