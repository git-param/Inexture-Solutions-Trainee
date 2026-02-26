import './App.css'

function App() 
{
  let name='param';
  let age=22;

  return (
    <>
      <h1>My name is {name}</h1>
      <h2>Age: {age}</h2>
    </>
  )
}


// converts it to :-

// React.createElement(
//   React.Fragment,
//   null,
//   React.createElement("h1", null, "My name is ", name),
//   React.createElement("h2", null, "Age: ", age)
// );

export default App
