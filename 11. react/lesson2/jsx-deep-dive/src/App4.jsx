import './App.css'
// Que: Create a variable price = 100
// Show price
// Show discounted price (price * 0.9)

function App() {
  
  let price=100;
  return (
    <div>
      <h1>The price is: {price}</h1>
      <h2>Disocunted price: {price*0.9}</h2>
    </div>
  );
}

export default App
