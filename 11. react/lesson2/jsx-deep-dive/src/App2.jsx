import './App.css'

function App() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? <h1 className='sample'>Welcome</h1> : <h1>Please Login</h1>}
    </div>
  )
}

export default App
